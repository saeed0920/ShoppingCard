(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))h(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&h(m)}).observe(document,{childList:!0,subtree:!0});function f(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function h(t){if(t.ep)return;t.ep=!0;const o=f(t);fetch(t.href,o)}})();const b=[{id:1,name:"Nin",price:"140$",img:"https://loremflickr.com/240/340"},{id:2,name:"Turf",price:"540$",img:"https://loremflickr.com/240/350"},{id:3,name:"lorem",price:"199$",img:"https://loremflickr.com/500/510"},{id:4,name:"nop",price:"240$",img:"https://loremflickr.com/500/520"},{id:5,name:"Poo",price:"1140$",img:"https://loremflickr.com/500/530"},{id:6,name:"pO",price:"40$",img:"https://loremflickr.com/500/540"}],r=function(e){return document.querySelector(e)},d=function(e){return document.querySelectorAll(e)},c=function(e,i){return e.classList.add(i)},n=function(e,i){return e.classList.remove(i)};document.querySelector("#app").innerHTML=`

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
`;for(const e of b){const i=r(".layoutRes");i.innerHTML+=`
    <div class="box flex flex-col gap-2 p-4 bg-gray-700 rounded-lg shadow-xl" id="${e.id}">
      <div class="flex justify-between text-2xl items-center gap-2 [&>*]:cursor-pointer mb-2 px-2">
        <i class="hover:scale-125 active:scale-95 transition-all fa-regular fa-heart like text-red-500"></i>
        <i class="fa-solid fa-cart-plus add-icon hover:text-green-500 ${localStorage.getItem(e.id)==="true"?" hide ":" "}"></i>
        <span class="animate-spin bg-transparent w-5 h-5 border-t rounded-full hide loading"></span>
        <i class="fa-solid fa-xmark remove-icon
         ${localStorage.getItem(e.id)==="true"?" ":" hide "}"></i>
     </div>
       <img class="w-full h-56 object-cover rounded-md" src="${e.img}" />
        <h1 class="font-bold font-serif text-4xl">${e.name}</h1>
       <h4 class="font-normal font-mono text-xl text-gray-400">${e.price}</h4>
       
   </div>
  `}let u=!0;const x=d(".like"),l=d(".add-icon"),a=d(".remove-icon"),p=d(".loading"),g=r(".backetBox"),k=r(".backetIcon"),s=r(".backetItem");for(const e of x)e.addEventListener("click",function(){e.classList.toggle("fa-regular"),e.classList.toggle("fa-solid")});for(let e=0;e<6;e++)l[e].addEventListener("click",function(){c(l[e],"hide"),n(p[e],"hide"),localStorage.setItem(l[e].parentElement.parentElement.id,!0),setTimeout(()=>{c(p[e],"hide"),n(a[e],"hide")},300)}),a[e].addEventListener("click",function(){c(a[e],"hide"),n(l[e],"hide"),c(p[e],"hide"),localStorage.setItem(a[e].parentElement.parentElement.id,!1)});k.addEventListener("click",function(){if(s.innerHTML="",u){c(r(".open-backet"),"hide"),n(r(".close-backet"),"hide"),c(g,"scale-[150]"),setTimeout(()=>{n(s,"hide")},300),u=!1;let e=0;for(const i of b)if(localStorage.getItem(i.id)==="true"){let f=i.price.slice(0,-1);e+=Number(f),s.innerHTML+=`
          <div class="flex flex-col gap-4 bg-zinc-800 p-8 justify-center rounded-lg shadow-xl transition-all hover:scale-110 items-center">
            <h1 class="">
              ${i.name}
            </h1>
            <h1>
              ${i.price}
            </h1>
          </div>
        `}s.innerHTML+=`<h1 class="col-span-full mt-auto">Total price : <span class="font-bold text-7xl">${e}$</span></h1>`}else n(r(".open-backet"),"hide"),c(r(".close-backet"),"hide"),c(s,"hide"),n(g,"scale-[150]"),u=!0});
