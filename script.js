var nav = document.querySelector("nav");

document.querySelector(".toggle").onclick = () =>{
    
    document.querySelector(".menu_list").classList.toggle("active");
    document.querySelector("nav").classList.toggle("blur");
};  

document.querySelectorAll(".nav_links").forEach(links =>{
    links.onclick = function(){
        document.querySelector(".menu_list").classList.remove("active");
        document.querySelector("nav").classList.remove("blur");
    }
})


let observer = new IntersectionObserver(target =>{
    target.forEach(entry =>{
        if(entry.isIntersecting)
            entry.target.classList.add("show");
        else
            entry.target.classList.remove("show");
    })
})

let hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach(el => observer.observe(el));


