window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight  - document.documentElement.style.getPropertyValue("--navbar-height");

    const scrollPercent = Math.min(scrollY / viewportHeight, 1);

    const value = 0.7 + scrollPercent * (1 - 0.7);

    document.documentElement.style.setProperty("--backgroundColorAlpha", value);

});