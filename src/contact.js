
export default function Contact() {
    const container = document.querySelector('#content');
    const contactContent = document.createElement('p');

    contactContent.textContent = 'This is the contact page';
    container.appendChild(contactContent);
}