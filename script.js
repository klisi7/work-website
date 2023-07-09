var nav = document.querySelector("nav");

document.querySelector(".toggle").onclick = () =>{
    let menu_list = document.querySelector(".menu_list");
    
    menu_list.classList.toggle("active");
};  

document.querySelectorAll(".nav_links").forEach(links =>{
    links.onclick = function(){
        document.querySelector(".menu_list").classList.remove("active");
    }
})
