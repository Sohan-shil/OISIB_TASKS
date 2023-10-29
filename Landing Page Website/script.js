
const bar = document.getElementById("bar");
const nav = document.getElementById("nav-bar");
const cross = document.getElementById("cross");

if (bar) {
  bar.addEventListener("click", () => {
    console.log('clicked')
    nav.classList.add("active");
   });
}

if(cross) {
    cross.addEventListener("click", ()=> {
        console.log('clicked2')
        nav.classList.remove("active");
    })
}