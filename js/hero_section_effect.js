const varName = ["--hero-section-bg-bn", "--hero-section-bn", "--hero-section-sepia"]
const defaultValue = [0.3, 1, 0.5]
const maxValue = [1, 0, 0]

window.addEventListener('scroll', function() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight  - document.documentElement.style.getPropertyValue("--navbar-height");

    const scrollPercent = Math.min(scrollY / viewportHeight, 1);

    for (var i = 0; i < varName.length; i++) {
        const value = defaultValue[i] + scrollPercent * (maxValue[i] - defaultValue[i]);
        document.documentElement.style.setProperty(varName[i], value);
    }
});