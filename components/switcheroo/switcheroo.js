let draggerEl;
let parentEl;
let resizerEl;

let pointerMoveListener = new AbortController();
const scrollListener = new AbortController();

class SweetSwitcheroo extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		// TODO a11y - keyboard & screen reader
		this.innerHTML = `
        <div class="switcheroo">
			<button class="switcheroo__dragger" aria-label="Drag me"></button>
            <div class="switcheroo__resizer">
                <div class="switcheroo__top-img">
                    <img src="./components/switcheroo/assets/intro-image__drawing.png" alt="A cartoony illustration of me"/>
                </div>
            </div>
            <div class="switcheroo__bottom-img">
                <img src="./components/switcheroo/assets/intro-image__photo.png" alt="A photograph of me"/>
            </div>
        </div>
        `;

		draggerEl = this.querySelector(".switcheroo__dragger");
		parentEl = this.parentElement;
		resizerEl = this.querySelector(".switcheroo__resizer");

		this.updateMaxWidth();
		window.addEventListener("resize", this.updateMaxWidth);

		draggerEl.style.visibility = "hidden";
		if (resizerEl.getBoundingClientRect().bottom <= window.innerHeight) {
			this.animate();
		} else {
			window.addEventListener("scroll", this.animate, { signal: scrollListener.signal });
		}
	}

	updateMaxWidth = () => {
		if (parentEl.className === "grid-duo") {
			const parentCompStyle = getComputedStyle(parentEl);

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
			resizerEl.style.animation = "2500ms 1 100ms normal sneak-peek";

			scrollListener.abort();

			setTimeout(this.setUpResizing, 2600);
		}
	};

	setUpResizing = () => {
		draggerEl.style.visibility = "visible";

		/* Pointer events were recommended on MDN here https://developer.mozilla.org/en-US/docs/Web/API/Touch_events#:~:text=To%20support%20both%20touch%20and%20mouse%20across%20all%20types%20of%20devices%2C%20use%20pointer%20events%20instead.
		   Supposedly it should support both mouse and touch, but it's super messy on mobile. 
		   TODO Requires further research what I can do here to support mobile */
		draggerEl.addEventListener("pointerdown", () => {
			pointerMoveListener = new AbortController();

			document.addEventListener("pointermove", (e) => this.resize(e), {
				signal: pointerMoveListener.signal,
			});
		});

		document.addEventListener("pointerup", () => {
			pointerMoveListener.abort();
		});

		document.addEventListener("pointercancel", () => {
			pointerMoveListener.abort();
		});
	};

	resize = (event) => {
		const draggedWidth = event.clientX - resizerEl.getBoundingClientRect().left;
		const maxWidth = parseFloat(resizerEl.style.maxWidth);
		let newWidth = draggedWidth;

		if (draggedWidth > maxWidth) {
			newWidth = maxWidth;
		}

		if (draggedWidth < 16) {
			// 16 to make sure the lilac handle stays visible.
			newWidth = 16;
		}

		resizerEl.style.width = `${newWidth}px`;
		// The dragger is 24px wide, deducting 12 ensures that it's centered on the visible line.
		draggerEl.style.left = `${newWidth - 12}px`;
	};
}

customElements.define("sweet-switcheroo", SweetSwitcheroo);
