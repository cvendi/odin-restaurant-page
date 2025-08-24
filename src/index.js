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
        menu();
    });

    homeButton.addEventListener("click", () => {
        home();
    });

    aboutButton.addEventListener("click", () => {
        about();
    });

    contactButton.addEventListener("click", () => {
        contact();
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

    const menu = () => {
        clear()
        Menu()
    };

    const about = () => {
        clear()
        About()
    };

    const contact = () => {
        clear()
        Contact()
    }

    return { home };
})();

page.home();