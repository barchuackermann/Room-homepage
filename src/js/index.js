const menuMobile = () =>{
    const menuToggler = document.querySelector(".menu-toggler");
    const menuClose = document.querySelector(".menu-close");
    const mainMenu = document.querySelector("#main-menu");
    menuToggler.onclick= (e) => {
        mainMenu.classList.add("show");
    }
    menuClose.onclick = (e) => {
        mainMenu.classList.remove("show");
    }
}

const sliderContent = [
    {
        url: "./src/images/desktop-image-hero-1.jpg",
        urlMobile: "./src/images/mobile-image-hero-1.jpg",
        title: "Discover innovative ways to decorate",
        description: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love."
        },
    {
        url: "./src/images/desktop-image-hero-2.jpg",
        urlMobile: "./src/images/mobile-image-hero-2.jpg",
        title: "We are available all across the globe",
        description: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today."
    },
    {
        url: "./src/images/desktop-image-hero-3.jpg",
        urlMobile: "./src/images/mobile-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        description: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."
    }
]

const slider = () =>{
    const leftArrow = document.querySelector(".btn-left");
    const rightArrow = document.querySelector(".btn-right");
    const imgContainer = document.querySelector(".img-slide");
    const title = document.querySelector("#title");
    const description = document.querySelector("#description");
    let currentSlide = 0;
    let windowSize = window.screen.width;

    rightArrow.onclick = (e) =>{
        currentSlide -=1;
        if (currentSlide == -1){
            currentSlide = sliderContent.length - 1;
        }
        if (windowSize < 1440){
            imgContainer.innerHTML = `<img src="${sliderContent[currentSlide].urlMobile}" alt="" class="mobile">`
        } else {
            imgContainer.innerHTML = `<img src="${sliderContent[currentSlide].url}" alt="" class="desktop">`
        }
        title.innerHTML = sliderContent[currentSlide].title;
        description.innerHTML = sliderContent[currentSlide].description;
    }

    leftArrow.onclick = (e) =>{
        currentSlide +=1;
        if (currentSlide == sliderContent.length){
            currentSlide = 0;
        }
        if (windowSize < 1440){
            imgContainer.innerHTML = `<img src="${sliderContent[currentSlide].urlMobile}" alt="" class="mobile">`
        } else {
            imgContainer.innerHTML = `<img src="${sliderContent[currentSlide].url}" alt="" class="desktop">`
        }
        title.innerHTML = sliderContent[currentSlide].title;
        description.innerHTML = sliderContent[currentSlide].description;
    }
}



window.onload = () => {
    menuMobile();
    slider();
    window.onresize = (event) => {
        location.reload();
    };
}