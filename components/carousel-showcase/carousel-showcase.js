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
                            <slot name="work-title"></slot>
                            <slot name="work-desc"></slot>
                        </div>
                    </div>
				</div>
				<div class="carousel-showcase__carousel-side">
                    <slot name="slide"></slot>
                </div>
			</div>`;
	}
}

customElements.define("sweet-carousel-showcase", SweetCarouselShowcase);
