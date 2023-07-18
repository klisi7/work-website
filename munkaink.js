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




let galery = document.querySelector("#galery");

let pictures = [
    {
        name: "Fürdőszobák",
        imgs: ["img/header-5.jpg", "img/home-carousel-img1.jpg", "img/home-carousel-img9.jpg", "img/bathroom-1.jpg", "img/bathroom-2.jpg", "img/bathroom-3.jpg", "img/bathroom-4.jpg",],
    },
    {
        name: "Konyhák",
        imgs: ["img/home-carousel-img5.jpg", "img/home-carousel-img6.jpg", "img/konyha-card.jpg", "img/konyha-1.jpg", "img/konyha-2.jpg", "img/konyha-3.jpg", "img/konyha-4.jpg"],
    },
    {
        name: "Terasz, kültér",
        imgs: ["img/home-carousel-img2.jpg", "img/home-carousel-img3.jpg", "img/home-carousel-img4.jpg", "img/home-carousel-img7.jpg", "img/terasz-card.jpg", "img/terrace-1.jpg", "img/terrace-2.jpg", "img/terrace-3.jpg", "img/terrace-4.jpg",],
    },
];

document.querySelectorAll(".options a").forEach(target =>{
    target.onclick = () =>{

        let targetItem = document.querySelector(".options .selected");

        if(targetItem)
            targetItem.classList.remove("selected");

        target.classList.add("selected");

        galery.innerHTML = "";

        for( let i in pictures ){
            if(target.innerHTML == pictures[i].name){
                console.log(pictures[i].name);
                for( let j in pictures[i].imgs){
                    console.log(pictures[i].imgs[j]);

                    let newImg = document.createElement("img");
                    newImg.alt = pictures[i].name;
                    newImg.src = pictures[i].imgs[j];

                    galery.appendChild(newImg)
                }
            }
        }
    }
})
