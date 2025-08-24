import "./styles.css";
import Home from "./home.js";
import Menu from "./menu.js";
import About from "./about.js";
import Contact from "./contact.js";

const page = (() => {

    const container = document.querySelector('#content');

    const menuButton = document.querySelector("#menu-button");
    const homeButton = document.querySelector("#home-button");
    const aboutButton = document.querySelector("#about-us-button");
    const contactButton = document.querySelector("#contact-us-button");

    menuButton.addEventListener("click", () => {
        clear()
        Menu()
    });

    homeButton.addEventListener("click", () => {
        clear()
        Home();
    });

    aboutButton.addEventListener("click", () => {
        clear()
        About();
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

    const home = () => {
        clear()
        Home()
    };

    return { home };
})();

page.home();