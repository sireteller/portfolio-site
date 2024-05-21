class SweetHeading2 extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
        <style>@import url("./css/index.css");</style>

        <h2 class="heading-2">
            <span class="heading-2-text">
                <slot/>
            </span>
        </h2>`;
	}
}

if ("customElements" in window) {
	customElements.define("sweet-heading-2", SweetHeading2);
}
