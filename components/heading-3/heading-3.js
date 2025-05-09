class SweetHeading3 extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.attachShadow({mode: "open"});
        this.shadowRoot.innerHTML = `
        <style>@import url("./css/index.css");</style>

        <h3 class="heading-3">
            <span class="heading-3__text">
                <slot></slot>
            </span>
        </h3>`;
    }
}

customElements.define("sweet-heading-3", SweetHeading3);
