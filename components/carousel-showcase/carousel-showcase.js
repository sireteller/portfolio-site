class SweetCarouselShowcase extends HTMLElement {
	constructor() {
		super();

		let amountOfSlides;
		let arrowLeftBtn;
		let arrowRightBtn;
		let currentSlide;
		let descriptions;
		let images;
		let titles;
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

		this.currentSlide = 1;
		this.descriptions = this.querySelectorAll("[slot=work-desc]");
		this.images = this.querySelectorAll("[slot=slide]");
		this.titles = this.querySelectorAll("[slot=work-title]");

		this.amountOfSlides = this.images.length;

		this.style.setProperty("--carousel-showcase-amount-of-slides", this.amountOfSlides);
		this.setSlideStyles(this.descriptions);
		this.setSlideStyles(this.titles);
		this.setSlideStyles(this.images);

		this.arrowLeftBtn = this.shadowRoot.querySelector(".carousel-showcase__arrow-left");
		this.arrowRightBtn = this.shadowRoot.querySelector(".carousel-showcase__arrow-right");

		this.arrowLeftBtn.addEventListener("click", this.prevSlide);
		this.arrowRightBtn.addEventListener("click", this.nextSlide);
	}

	prevSlide = () => {
		let translatex;

		/* Deducutions all around because translatex 0 is the first slide
		   and -100 is the second and so on. */
		if (this.currentSlide === 1) {
			translatex = (this.amountOfSlides - 1) * -100;
			this.currentSlide = this.amountOfSlides;
		} else {
			translatex = (this.currentSlide - 2) * 100;
			this.currentSlide--;
		}

		this.setSlideStyles(this.descriptions);
		this.setSlideStyles(this.titles);
		this.setSlideStyles(this.images);
		this.style.setProperty("--carousel-showcase-translatex", `${translatex}%`);
	};

	nextSlide = () => {
		let translatex;

		if (this.currentSlide === this.amountOfSlides) {
			translatex = 0;
			this.currentSlide = 1;
		} else {
			translatex = this.currentSlide * -100;
			this.currentSlide++;
		}

		this.setSlideStyles(this.descriptions);
		this.setSlideStyles(this.titles);
		this.setSlideStyles(this.images);
		this.style.setProperty("--carousel-showcase-translatex", `${translatex}%`);
	};

	setSlideStyles = (array) => {
		array.forEach((item, index) => {
			if (index === this.currentSlide - 1) {
				item.style.visibility = "visible";
				item.style.opacity = "1";
			} else {
				item.style.visibility = "hidden";
				item.style.opacity = "0";
			}
		});
	};
}

customElements.define("sweet-carousel-showcase", SweetCarouselShowcase);
