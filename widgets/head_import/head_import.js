class HeadImport extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="main.css">

        <link rel="stylesheet" href="/mobile.css" media="screen and (max-width: 479)">
        <link rel="stylesheet" href="/desktop.css" media="screen and (min-width: 480)">
        <script src="/widgets/navbar/navbar.js"></script>
        <link rel="stylesheet" href="/widgets/navbar/navbar.css">
        `
    }
}

customElements.define("head-import", HeadImport)