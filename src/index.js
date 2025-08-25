import "./styles.css";
import Home from "./home.js";
import Menu from "./menu.js";
import Contact from "./contact.js";

const page = (() => {

    const container = document.querySelector('#content');

    const menuButton = document.querySelector("#menu-button");
    const homeButton = document.querySelector("#home-button");
    const contactButton = document.querySelector("#contact-us-button");

    menuButton.addEventListener("click", () => {
        clear()
        Menu()
    });

    homeButton.addEventListener("click", () => {
        clear()
        Home();
    });

    contactButton.addEventListener("click", () => {
        clear()
        Contact();
    });

    const clear = () => {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
    };

    Home()
    
})();
