
// var settingsmenu = document.querySelector(".settings-menu");
// var darkbtn = document.getElementById("dark-btn");

// function settinsMenuToggle() {
//     settingsmenu.classList.toggle("settings-menu-height");
// }
// darkbtn.onclick = function() {
//     darkbtn.classList.toggle("dark-btn-on");
//     document.body.classList.toggle("dark-theme");
//     if (localStorage.getItem("theme") == "light") {
//         localStorage.setItem("theme", "dark");
//     } else {
//         localStorage.setItem("theme", "light");
//     }
// }

// if (localStorage.getItem("theme") == "light") {
//     darkbtn.classList.remove("dark-btn-on");
//     document.body.classList.remove("dark-theme");
// } else if (localStorage.getItem("theme") == "dark") {
//     darkbtn.classList.add("dark-btn-on");
//     document.body.classList.add("dark-theme");
// } else {
//     localStorage.setItem("theme", "light");
// }


var darkbtn = document.getElementById("dark-btn");
darkbtn.addEventListener('click',function(){
    document.body.classList.toggle('dark');
});

var like=document.querySelector('.heart');
like.addEventListener('click',function(){
    document.body.classList.toggle('heart_1');
})
