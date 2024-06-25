class SweetSwitcheroo extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
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

		this.updateMaxWidth();
		// TODO update width on window resize
	}

	updateMaxWidth = () => {
		// TODO make these variables' scope the component, not this function
		const parentEl = this.parentElement;
		const resizerEl = this.querySelector(".switcheroo-resizer");

		if (parentEl.className === "grid-duo") {
			resizerEl.style.maxWidth = `${
				parseFloat(window.getComputedStyle(parentEl).getPropertyValue("width")) / 2
			}px`;
		}
	};
}

customElements.define("sweet-switcheroo", SweetSwitcheroo);
