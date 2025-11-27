class SweetHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="header">
			<div class="header-stripe">
			<img class="header-img-overlay header-img-overlay--small" src="./components/header/assets/single-lilac.png" alt=""/>
				<div class="header-stripe-text">
        			<h1 class="header-title">Siret Kasar</h1>
        			<div class="header-subtitle">Front-end developer & artist</div>
				</div>
				<img class="header-img-overlay header-img-overlay--large" src="./components/header/assets/hero-bg.png" alt=""/>
			</div>
        </header>`;
    }
}

customElements.define("sweet-header", SweetHeader);
