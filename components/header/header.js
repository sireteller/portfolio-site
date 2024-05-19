class SweetHeader extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
        <header>
        <h1>Siret Eller</h1>
        <div class="header-subtitle">Front-end developer & artist</div>
        </header>`;
	}
}

if ("customElements" in window) {
	customElements.define("sweet-header", SweetHeader);
}
