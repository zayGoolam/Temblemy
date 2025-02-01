document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const items = document.querySelectorAll(".carousel-track img");
    const visibleBooks = 4;
    let index = 0;
    let autoScroll;

    function updateCarousel() {
        const itemWidth = items[0].clientWidth + 15; 
        track.style.transform = `translateX(${-index * itemWidth}px)`;
    }

    function startAutoScroll() {
        autoScroll = setInterval(() => {
            index++;
            if (index > items.length - visibleBooks) {
                index = 0;
            }
            updateCarousel();
        }, 3000);
    }

    function stopAutoScroll() {
        clearInterval(autoScroll);
    }

    prevButton.addEventListener("click", function () {
        stopAutoScroll();
        index = index > 0 ? index - 1 : items.length - visibleBooks;
        updateCarousel();
    });

    nextButton.addEventListener("click", function () {
        stopAutoScroll();
        index = index < items.length - visibleBooks ? index + 1 : 0;
        updateCarousel();
    });

    startAutoScroll();
});
















