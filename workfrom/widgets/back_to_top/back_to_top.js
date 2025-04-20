class BackToTop extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<button onclick="backToTop()" class="back_to_top">
        <!-- back to top -->
        <!-- &#8679; -->
    </button>`;
    }
}

customElements.define("back-to-top", BackToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
var firstLoad = true;

document.addEventListener("scroll", function () {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        document
            .querySelector(".back_to_top")
            .classList.remove("hide_back_to_top_button");
        if (firstLoad) {
            document.querySelector(".back_to_top").style.display = "block";
            firstLoad = false;
        }
    } else if (!firstLoad) {
        document
            .querySelector(".back_to_top")
            .classList.add("hide_back_to_top_button");
    }
});
