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


let carousel = document.querySelector(".carousel");
let arrowIcons = document.querySelectorAll("#galery_wrapper i");
let firstImg = carousel.querySelectorAll("img")[0];

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 14;


arrowIcons.forEach(target =>{
    target.onclick = () =>{
        carousel.scrollLeft += target.id == "left" ? -firstImgWidth : firstImgWidth;
    }
})

let dragStart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

let dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault();
    carousel.scrollLeft = e.pageX;

    let positionDiff = e.pageX -prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;

    carousel.classList.add("dragging");
}

let dragStop = () =>{
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("mouseup", dragStop)