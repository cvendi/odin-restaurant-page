
export default function Contact() {
    const container = document.querySelector('#content');
    const contactCard = document.createElement('div');

    const contactHeader = document.createElement('h1');
    contactHeader.textContent = 'Contact Us';

    const sections = [
        { name: 'Reservations', items: [
            { item: "(555) 123-4567" },
        ]},
        { name: 'General Inquiries', items: [
            { item: "Email: hello@example.com" },
        ]},
    ];

    contactCard.appendChild(contactHeader);

    sections.forEach(section => {
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.name;

        const list = document.createElement('ul');

        section.items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${item.item}</span>`;
            list.appendChild(li);
        });

        contactCard.appendChild(sectionTitle);
        contactCard.appendChild(list);
    });

    container.appendChild(contactCard);
}