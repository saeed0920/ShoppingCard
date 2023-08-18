import "./style.css";
import "./typography.css";
import items from "./cards.js";
const selectElement = function (name) {
  return document.querySelector(name);
};
const selectElementAll = function (name) {
  return document.querySelectorAll(name);
};
const addClass = function (name, className) {
  return name.classList.add(className);
};
const removeClass = function (name, className) {
  return name.classList.remove(className);
};
//

document.querySelector("#app").innerHTML = `

  <div class="rounded-full w-10 h-10 grid place-items-center bg-gray-700 fixed top-4 right-4 cursor-pointer hover:scale-110 transition-all backetIcon z-10"> 
    <i class="text-xl fa-solid fa-basket-shopping open-backet"></i> 
    <i class="fa-solid fa-xmark hide close-backet"></i>
    </div>

  <section class="backetBox fixed top-5 right-5 w-8 h-8  transition-all duration-700 rounded-full bg-slate-500 overflow-hidden">
  </section>
   
  <section class="backetItem fixed top-5 right-5  w-full h-full  transition-all grid grid-cols-[repeat(auto-fill,minmax(20rem,25rem))] justify-center gap-12 bg-transparent hide py-20 px-24">
  </section>



  <section class="layoutRes">  
  </section>
`;

//

for (const child of items) {
  const section = selectElement(".layoutRes");
  section.innerHTML += `
    <div class="box flex flex-col gap-2 p-4 bg-gray-700 rounded-lg shadow-xl" id="${
      child.id
    }">
      <div class="flex justify-between text-2xl items-center gap-2 [&>*]:cursor-pointer mb-2 px-2">
        <i class="hover:scale-125 active:scale-95 transition-all fa-regular fa-heart like text-red-500"></i>
        <i class="fa-solid fa-cart-plus add-icon hover:text-green-500 ${
          localStorage.getItem(child.id) === "true" ? " hide " : " "
        }"></i>
        <span class="animate-spin bg-transparent w-5 h-5 border-t rounded-full hide loading"></span>
        <i class="fa-solid fa-xmark remove-icon
         ${localStorage.getItem(child.id) === "true" ? " " : " hide "}"></i>
     </div>
       <img class="w-full h-56 object-cover rounded-md" src="${child.img}" />
        <h1 class="font-bold font-serif text-4xl">${child.name}</h1>
       <h4 class="font-normal font-mono text-xl text-gray-400">${
         child.price
       }</h4>
       
   </div>
  `;
}

//
let checkBacket = true;
const heart = selectElementAll(".like");
const addIcon = selectElementAll(".add-icon");
const removeIcon = selectElementAll(".remove-icon");
const loading = selectElementAll(".loading");
const backetContainer = selectElement(".backetBox");
const backetIcon = selectElement(".backetIcon");
const backetItem = selectElement(".backetItem");
// events
for (const child of heart) {
  child.addEventListener("click", function () {
    child.classList.toggle("fa-regular");
    child.classList.toggle("fa-solid");
  });
}

for (let i = 0; i < 6; i++) {
  addIcon[i].addEventListener("click", function () {
    addClass(addIcon[i], "hide");
    removeClass(loading[i], "hide");
    localStorage.setItem(addIcon[i].parentElement.parentElement.id, true);
    setTimeout(() => {
      addClass(loading[i], "hide");
      removeClass(removeIcon[i], "hide");
    }, 300);
    //
  });
  removeIcon[i].addEventListener("click", function () {
    addClass(removeIcon[i], "hide");
    removeClass(addIcon[i], "hide");
    addClass(loading[i], "hide");
    localStorage.setItem(removeIcon[i].parentElement.parentElement.id, false);
    //
  });
}

backetIcon.addEventListener("click", function () {
  backetItem.innerHTML = "";

  if (checkBacket) {
    addClass(selectElement(".open-backet"), "hide");
    removeClass(selectElement(".close-backet"), "hide");
    addClass(backetContainer, "scale-[150]");

    setTimeout(() => {
      removeClass(backetItem, "hide");
    }, 300);

    checkBacket = false;
    let totalPrice = 0;
    for (const child of items) {
      if (localStorage.getItem(child.id) === "true") {
        let counter = child.price.slice(0, -1);
        totalPrice += Number(counter);
        backetItem.innerHTML += `
          <div class="flex flex-col gap-4 bg-zinc-800 p-8 justify-center rounded-lg shadow-xl transition-all hover:scale-110 items-center">
            <h1 class="">
              ${child.name}
            </h1>
            <h1>
              ${child.price}
            </h1>
          </div>
        `;
      }
    }
    backetItem.innerHTML += `<h1 class="col-span-full mt-auto">Total price : <span class="font-bold text-7xl">${totalPrice}$</span></h1>`;
  } else {
    removeClass(selectElement(".open-backet"), "hide");
    addClass(selectElement(".close-backet"), "hide");
    addClass(backetItem, "hide");
    removeClass(backetContainer, "scale-[150]");
    checkBacket = true;
  }
});

//todo
const notif = function (message) {
  const notif = selectElement(".notif");
  selectElement("#app").innerHTML += `<div class="notif">
  ${message}
  </div>`;
  setTimeout(() => {
    notif.style.transform = "translateX(-7rem)";
  }, 100);
  setTimeout(() => {
    notif.style.transform = "translateX(0)";
  }, 1500);
  setTimeout(() => notif.remove(), 2000);
  return;
};
