class SweetHeader extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
        <header class="header">
			<div class="header-stripe">
				<div class="header-stripe-text">
        			<h1 class="header-title">Siret Eller</h1>
        			<div class="header-subtitle">Front-end developer & artist</div>
				</div>
				<img class="header-img-overlay" src="./components/header/assets/hero-bg-top.png" alt=""/>
			</div>
        </header>`;
	}
}

customElements.define("sweet-header", SweetHeader);
