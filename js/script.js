//const bar = document.getElementById('#bar');
//const nav = document.getElementById('#navbar');
//
//if (bar) {
//    bar.addEventListener('click', () => {
//        nav.classList.add('active');
//    })
//}






function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
