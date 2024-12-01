class SweetSettings extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="settings">
        	<div class="settings__closed-view">
        		<button class="settings__open-btn">Settings</button>
        	</div>
        	<div class="settings__open-view">
        		<button>Close</button>
        		<label>
        			<input type="checkbox" name="reduced-motion"></input>
        			Reduced motion
        		</label>
        		<label>
        			<input type="checkbox" name="dark-mode"></input>
        			Dark mode
        		</label>
        		<label>
        			<input type="checkbox" name="lang-ee"></input>
        			Translate to Estonian
        		</label>
			</div>
        </div>`;
    }
}

customElements.define("sweet-settings", SweetSettings);
