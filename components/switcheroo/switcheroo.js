let parentEl;
let resizerEl;

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

		parentEl = this.parentElement;
		resizerEl = this.querySelector(".switcheroo-resizer");

		this.updateMaxWidth();

		window.addEventListener("resize", this.updateMaxWidth);
	}

	updateMaxWidth = () => {
		if (parentEl.className === "grid-duo") {
			const parentCompStyle = window.getComputedStyle(parentEl);

			resizerEl.style.maxWidth = `${
				document.documentElement.clientWidth > 720
					? parseFloat(parentCompStyle.getPropertyValue("width")) / 2 -
					  parseFloat(parentCompStyle.getPropertyValue("gap"))
					: parseFloat(parentCompStyle.getPropertyValue("width"))
			}px`;
		}
	};
}

customElements.define("sweet-switcheroo", SweetSwitcheroo);
