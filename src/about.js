
export default function About() {
    const container = document.querySelector('#content');
    const aboutContent = document.createElement('p');

    aboutContent.textContent = 'This is the about page';
    container.appendChild(aboutContent);
};