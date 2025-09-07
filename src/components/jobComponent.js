
class JobComponent extends HTMLElement {
    /**
     * @private
     * @type {string}
     */
    #_title;
    /**
     * @private
     * @type {string}
     */
    #_description;
    /**
     * @private
     * @type {string[]}
     * in the dataset split the technologies with commas in one string
     */
    #_technologies;
    /**
     * @private
     * @type {string}
     */
    #_timestamp;

    constructor() {
        super();
    }

    connectedCallback() {
        this.#_title = this.dataset.title;
        this.#_description = this.dataset.description;
        this.#_technologies = this.dataset.technologies.split(',');
        this.#_timestamp = this.dataset.timestamp;

        this.render();
    }

    render() {
        let technologiesHTML = "<ul class='stylized-ul'>";

        for (const technology of this.#_technologies) {
            technologiesHTML += `<li>${technology}</li>`;
        }
        technologiesHTML += "</ul>";

        this.outerHTML = `
            <li class="bordered">
                <h3>${this.#_title}</h3>
                <p>${this.#_timestamp}</p>
                <p>${this.#_description}</p>
                ${technologiesHTML}
            </li>
        `;
    }
}

export default JobComponent;
