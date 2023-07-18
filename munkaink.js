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

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
let firstImgWidth = firstImg.clientWidth + 14;


arrowIcons.forEach(target =>{
    target.onclick = () =>{
        carousel.scrollLeft += target.id == "left" ? -firstImgWidth : firstImgWidth;
    }
})

let autoSlide = () =>{
    if(carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;

    positionDiff = Math.abs(positionDiff);
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft){
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;

}

let dragStart = (e) =>{
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

let dragging = (e) =>{
    if(!isDragStart) return;
    e.preventDefault();
    carousel.scrollLeft = e.pageX;

    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;

    carousel.classList.add("dragging");
    isDragging = true;
}

let dragStop = () =>{
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart)
carousel.addEventListener("touchstart", dragStart)

carousel.addEventListener("mousemove", dragging)
carousel.addEventListener("touchmove", dragging)

carousel.addEventListener("mouseup", dragStop)
carousel.addEventListener("touchend", dragStop)

let furdoSzoba = ["img/header-5.jpg", "img/home-carousel-img1.jpg", "img/home-carousel-img9.jpg"];
let konyha = ["img/home-carousel-img5.jpg", "img/home-carousel-img6.jpg", "img/konyha-card.jpg"];
let kulter = ["img/home-carousel-img2.jpg", "img/home-carousel-img3.jpg", "img/home-carousel-img4.jpg", "img/home-carousel-img7.jpg", "img/terasz-card.jpg"];

document.querySelectorAll(".options a").forEach(target =>{
    target.onclick = () =>{

        let targetItem = document.querySelector(".options .selected");

        if(targetItem)
            targetItem.classList.remove("selected");

        target.classList.add("selected");

        carousel.innerHTML = "";


        carousel.scrollLeft = 0;

        if(target.innerHTML == "Fürdőszobák"){
            for(let i = 0; i < furdoSzoba.length; i++){
                let newImg = document.createElement("img");
                newImg.src = furdoSzoba[i];
                newImg.alt = "img";
                newImg.draggable = "false";

                document.querySelector(".carousel").appendChild(newImg);
            }
        }
        else if(target.innerHTML == "Konyhák"){
            for(let i = 0; i < konyha.length; i++){
                let newImg = document.createElement("img");
                newImg.src = konyha[i];
                newImg.alt = "img";
                newImg.draggable = "false";

                document.querySelector(".carousel").appendChild(newImg);
            }
        }
        else if(target.innerHTML == "Terasz, kültér"){
            for(let i = 0; i < kulter.length; i++){
                let newImg = document.createElement("img");
                newImg.src = kulter[i];
                newImg.alt = "img";
                newImg.draggable = "false";

                document.querySelector(".carousel").appendChild(newImg);
            }
        }
    }
})