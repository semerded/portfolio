class HamburgerNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div id="hamburger-nav">
        <a href="">About me</a>
        <a href="">My projects</a>
        <a href="">Blog</a>
        <a href="">Contact</a>
    </div>
`;
    }
}

customElements.define("app-hamburger-nav", HamburgerNav);

const element = document.getElementById("content");

element.addEventListener("click", () => {
    if (document.getElementById("hamburgerCheckBox").checked) {
        document.getElementById("hamburgerCheckBox").checked = false;
        document.querySelector("main").id = "body-shift-exit";
    }
});
