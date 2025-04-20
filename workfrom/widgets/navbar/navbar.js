class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /*html*/ `
        <div class="fixed">
        <div id="navbar-container">
            <div id="navbar-top">
                <div id="navbar-logo-container">
                    <a href="/index.html" id="navbar-logo-link"
                        ><img
                            id="navbar-logo"
                            src="/images/common/logo.webp"
                            class="unselectable"
                            alt="website logo"
                    /></a>
                </div>
                <div id="navbar-links-container">
                    <a
                        href="/pages/aboutme.html"
                        id="navbar-linktype-aboutme"
                        class="navButton"
                        >About Me</a
                    >
                    <a
                        href="/pages/projects.html"
                        id="navbar-linktype-projects"
                        class="navButton"
                        >My Projects</a
                    >
                    <a
                        href="/pages/blog_redirect.html"
                        class="navButton"
                        id="navbar-linktype-blog"
                        >Blog</a
                    >
                    <a
                        href="/pages/contact.html"
                        id="navbar-linktype-contact"
                        class="navButton"
                        >Contact</a
                    >
                </div>
                <div id="navbar-hamburger-button">
                    <input
                        type="checkbox"
                        id="hamburgerCheckBox"
                        class="hamburgerCheckBox visuallyHidden"
                        onclick="if (document.getElementById('hamburgerCheckBox').checked) {
                    // document.getElementById('hamburger-nav-wrapper').style.display = 'flex'; 
                    document.querySelector('main').id = 'body-shift-entry';
                    document.querySelector('app-hamburger-nav').id = 'body-shift-entry'
                } else {
                    // document.getElementById('hamburger-nav-wrapper').style.display = 'none'; 
                    document.querySelector('main').id = 'body-shift-exit'; 
                    document.querySelector('app-hamburger-nav').id = 'body-shift-exit'
    
                };" />
                    <label for="hamburgerCheckBox" style="cursor: pointer">
                        <div class="hamburger hamburger4">
                            <span class="bar bar1"></span>
                            <span class="bar bar2"></span>
                            <span class="bar bar3"></span>
                            <span class="bar bar4"></span>
                            <span class="bar bar5"></span>
                        </div>
                    </label>
                </div>
            </div>
            <div id="navbar-progress-bar-container">
                <div id="navbar-progress-bar-background"></div>
                <div id="navbar-progress-bar"></div>
            </div>
        </div>
    </div>
    
`;
    }
}

customElements.define("app-navbar", Navbar);

window.addEventListener("scroll", function () {
    let yPos = window.scrollY;
    let siteHeight = document.body.scrollHeight - window.innerHeight;
    let width = (yPos / siteHeight) * 100;
    if (width > 100) {
        width = 100;
    }
    document.getElementById("navbar-progress-bar").style.width = width + "vw";
});

// window.onresize = function () {
//     if (
//         document.getElementById("navbar-logo-container").style.display == "flex" &&
//         document.body.clientWidth > 840
//     ) {
//         document.getElementById("navbar-logo-container").style.display = "none";
//         document.body.style.height = "";
//         document.body.style.overflowY = "";
//         document.getElementById("hamburgerCheckBox").checked = false;
//     }

//     document.documentElement.style.setProperty(
//         "--scrollbar-width",
//         window.innerWidth - document.documentElement.clientWidth + "px"
//     );
// };
