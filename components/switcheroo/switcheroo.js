class SweetSwitcheroo extends HTMLElement {
	constructor() {
		super();
		this.innerHTML = `
        <div class="switcheroo">
            <div class="switcheroo-resizer">
                <div class="switcheroo-top-img">
                    <img src="./components/switcheroo/assets/intro-image__drawing.png" alt="A cartoony illustration of me"/>
                </div>
            </div>
            <div class="switcheroo-bottom-img">
                <img src="./components/switcheroo/assets/intro-image__photo.png" alt="A photograph of me"/>
            </div>
        </div>
        `;
	}
}

if ("customElements" in window) {
	customElements.define("sweet-switcheroo", SweetSwitcheroo);
}
