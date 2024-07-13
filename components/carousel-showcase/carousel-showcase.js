let amountOfSlides;
let arrowLeftBtn;
let arrowRightBtn;
let currentSlide = 1;

class SweetCarouselShowcase extends HTMLElement {
	constructor() {
		super();
	}

	// TODO attribute to flip sides

	connectedCallback() {
		this.attachShadow({ mode: "open" });
		this.shadowRoot.innerHTML = `
        <style>@import url("./css/index.css");</style>

			<div class="grid-duo grid-duo--no-gap">
				<div class="carousel-showcase__info-side">
					<slot name="title"></slot>
                    <div class="carousel-showcase__info-side-inner">
					    <slot name="intro"></slot>
                        <hr/>

                        <div class="carousel-showcase__details">
							<div class="carousel-showcase__work-titles">
                            	<slot name="work-title"></slot>
							</div>
							<div class="carousel-showcase__work-descs">
                            	<slot name="work-desc"></slot>
							</div>
                        </div>
                    </div>
				</div>
				<div class="carousel-showcase__carousel-side">
					<div class="carousel-showcase__arrows">
						<button class="carousel-showcase__arrow-left" aria-label="Previous slide"></button>
						<button class="carousel-showcase__arrow-right" aria-label="Next slide"></button>
					</div>
					<div class="carousel-showcase__slides">
                    	<slot name="slide"></slot>
					</div>
                </div>
			</div>`;

		amountOfSlides = this.querySelectorAll("[slot=slide]").length;

		this.style.setProperty("--carousel-showcase-amount-of-slides", amountOfSlides);

		arrowLeftBtn = this.shadowRoot.querySelector(".carousel-showcase__arrow-left");
		arrowRightBtn = this.shadowRoot.querySelector(".carousel-showcase__arrow-right");

		arrowLeftBtn.addEventListener("click", this.prevSlide);
		arrowRightBtn.addEventListener("click", this.nextSlide);
	}

	prevSlide = () => {
		let translatex;

		/* Decutions all around because translatex 0 is the first slide
		   and -100 is the second and so on. */
		if (currentSlide === 1) {
			translatex = (amountOfSlides - 1) * -100;
			currentSlide = amountOfSlides;
		} else {
			translatex = (currentSlide - 2) * 100;
			currentSlide--;
		}

		this.style.setProperty("--carousel-showcase-translatex", `${translatex}%`);
	};

	nextSlide = () => {
		let translatex;

		if (currentSlide === amountOfSlides) {
			translatex = 0;
			currentSlide = 1;
		} else {
			translatex = currentSlide * -100;
			currentSlide++;
		}

		this.style.setProperty("--carousel-showcase-translatex", `${translatex}%`);
	};
}

customElements.define("sweet-carousel-showcase", SweetCarouselShowcase);
