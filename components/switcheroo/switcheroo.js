class SweetSwitcheroo extends HTMLElement {
    constructor() {
        super();

        let draggerEl;
        let parentEl;
        let resizerEl;
        let pointerMoveListener;
        let scrollListener;
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="switcheroo">
			<button class="switcheroo__dragger" aria-label="Drag me to switch between images"></button>
            <div class="switcheroo__resizer">
                <div class="switcheroo__top-img">
                    <img src="./components/switcheroo/assets/intro-image__drawing.png" alt="A cartoony illustration of me" draggable="false" loading="eager" />
                </div>
            </div>
            <div class="switcheroo__bottom-img">
                <img src="./components/switcheroo/assets/intro-image__photo.png" alt="A photograph of me" draggable="false" loading="eager" />
            </div>
        </div>
        `;

        this.draggerEl = this.querySelector(".switcheroo__dragger");
        this.parentEl = this.parentElement;
        this.resizerEl = this.querySelector(".switcheroo__resizer");
        this.pointerMoveListener = new AbortController();
        this.scrollListener = new AbortController();

        this.updateMaxWidth();
        window.addEventListener("resize", this.updateMaxWidth);

        this.draggerEl.addEventListener("keydown", (e) => this.onDraggerKeyDown(e));

        this.draggerEl.style.display = "none";

        if (
            this.resizerEl.getBoundingClientRect().bottom <= window.innerHeight &&
            this.resizerEl.getBoundingClientRect().top >= 0
        ) {
            this.animate();
        } else {
            window.addEventListener("scroll", this.animate, {signal: this.scrollListener.signal});
        }
    }

    updateMaxWidth = () => {
        if (this.parentEl.className === "grid-duo") {
            const parentCompStyle = getComputedStyle(this.parentEl);

            this.resizerEl.style.maxWidth = `${
                document.documentElement.clientWidth > 720
                    ? parseFloat(parentCompStyle.getPropertyValue("width")) / 2 -
                    parseFloat(parentCompStyle.getPropertyValue("gap"))
                    : parseFloat(parentCompStyle.getPropertyValue("width"))
            }px`;
        }

        this.resizerEl.style.removeProperty("width");
        this.draggerEl.style.removeProperty("left");
    };

    animate = () => {
        if (
            this.resizerEl.getBoundingClientRect().bottom <= window.innerHeight &&
            this.resizerEl.getBoundingClientRect().top >= 0
        ) {
            this.resizerEl.style.animation = "2500ms 1 100ms normal sneak-peek";

            this.scrollListener.abort();

            setTimeout(this.setUpResizing, 2600);
        }
    };

    setUpResizing = () => {
        this.draggerEl.style.display = "unset";

        /* Exasperation, a haiku

            I tried drag and drop.
            I tried some pointer events.
            Neither works for touch.

        Here's the simplest workaround I could think of. */

        /* Mouse */

        this.draggerEl.addEventListener("mousedown", () => {
            this.pointerMoveListener = new AbortController();

            document.addEventListener(
                "mousemove",
                (event) => {
                    this.resize(event.clientX - this.resizerEl.getBoundingClientRect().left);
                },
                {
                    signal: this.pointerMoveListener.signal,
                }
            );
        });

        document.addEventListener("mouseup", () => {
            this.pointerMoveListener.abort();
        });

        /* Touch */

        this.draggerEl.addEventListener("touchstart", () => {
            this.pointerMoveListener = new AbortController();
            document.addEventListener(
                "touchmove",
                (event) => {
                    this.resize(
                        event.touches[0].clientX - this.resizerEl.getBoundingClientRect().left
                    );
                },
                {
                    signal: this.pointerMoveListener.signal,
                }
            );
        }, {passive: true});

        document.addEventListener("touchend", () => {
            this.pointerMoveListener.abort();
        });
    };

    resize = (newWidth) => {
        const maxWidth = parseFloat(this.resizerEl.style.maxWidth);

        if (newWidth > maxWidth) {
            newWidth = maxWidth;
        }

        if (newWidth < 16) {
            // 16 to make sure the lilac handle stays visible.
            newWidth = 16;
        }

        this.resizerEl.style.width = `${newWidth}px`;
        // The dragger is 24px wide, deducting 12 ensures that it's centered on the visible line.
        this.draggerEl.style.left = `${newWidth - 12}px`;
    };

    onDraggerKeyDown = (event) => {
        let resizerWidth = this.resizerEl.getBoundingClientRect().width;

        switch (event.key) {
            case "ArrowLeft":
                this.resize(resizerWidth - 16);
                break;
            case "ArrowRight":
                this.resize(resizerWidth + 16);
                break;
        }
    };
}

customElements.define("sweet-switcheroo", SweetSwitcheroo);
