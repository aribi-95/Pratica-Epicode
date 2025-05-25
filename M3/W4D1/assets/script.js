function carouselScrollLeft(carousel) {
    const scrollAmount = carousel.scrollLeft - carousel.clientWidth;
    carousel.scrollTo({
        left: Math.max(scrollAmount, 0),
        behavior: "smooth",
    });
}

function carouselScrollRight(carousel) {
    const scrollAmount = carousel.scrollLeft + carousel.clientWidth;
    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    carousel.scrollTo({
        left: Math.min(scrollAmount, maxScroll),
        behavior: "smooth",
    });
}
