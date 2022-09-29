const menu = document.getElementById('menu')
const navlist = document.getElementById('list');
const i = document.getElementById('i');

// navlist.style.display = "none";

// menu.addEventListener("click", (event) =>{
//   if (navlist.style.display == "none") {
//     navlist.style.display = "block"
//     navlist.style.textAlign = "center"
//     i.style.paddingBottom = "20px;"
//   } else{
//     navlist.style.display = "none"
//   }
// })

menu.onclick = () => {
  navlist.classList.toggle('open')
}