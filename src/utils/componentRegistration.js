import JobComponent from "../components/jobComponent.js";

function registerComponent() {
    customElements.define('v-job', JobComponent);
}

export default registerComponent;
