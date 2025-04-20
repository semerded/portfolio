const startValue = 0.4;
const maxValue = 1.005;

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight  - document.documentElement.style.getPropertyValue("--navbar-height");

    const scrollPercent = Math.min(scrollY / viewportHeight, 1);

    const value = startValue + scrollPercent * (maxValue - startValue);

    document.documentElement.style.setProperty("--backgroundColorAlpha", value);

});


class ChangeOnScrollLinear {
    constructor(yMin, yMax, startValue, maxValue) {
        this.startValue = startValue;
        this.maxValue = maxValue;
    }
}