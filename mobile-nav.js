"use strict";
const mobileMenu=document.querySelector(".menu"),mobileLinks=document.querySelector("#links");
function closeMobileMenu(){mobileLinks?.classList.remove("open");mobileMenu?.setAttribute("aria-expanded","false")}
document.addEventListener("click",event=>{if(mobileLinks?.classList.contains("open")&&!event.target.closest("header"))closeMobileMenu()});document.addEventListener("keydown",event=>{if(event.key==="Escape"&&mobileLinks?.classList.contains("open")){closeMobileMenu();mobileMenu?.focus()}});mobileLinks?.querySelector(".menu-cart")?.addEventListener("click",closeMobileMenu);
