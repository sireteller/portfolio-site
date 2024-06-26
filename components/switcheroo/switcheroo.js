let parentEl;
let resizerEl;
let windowHasScrollListener;

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

		if (resizerEl.getBoundingClientRect().bottom <= window.innerHeight) {
			this.animate();
		} else {
			window.addEventListener("scroll", this.animate);
			windowHasScrollListener = true;
		}
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

	animate = () => {
		if (resizerEl.getBoundingClientRect().bottom <= window.innerHeight) {
			resizerEl.style.animation = "2000ms 1 100ms normal sneak-peek";

			window.removeEventListener("scroll", this.animate);
			windowHasScrollListener = false;
		}
	};
}

customElements.define("sweet-switcheroo", SweetSwitcheroo);
