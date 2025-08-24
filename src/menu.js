export default function Menu() {
  const container = document.querySelector('#content');

  const menuCard = document.createElement('div');

  const title = document.createElement('h1');
  title.textContent = 'La Bella Tavola Menu';

  const sections = [
        { name: 'Antipasti', items: [
            { dish: 'Bruschetta al Pomodoro', price: 6 },
            { dish: 'Calamari Fritti', price: 9 }
        ]},
        { name: 'Primi', items: [
            { dish: 'Spaghetti Carbonara', price: 14 },
            { dish: 'Risotto ai Funghi', price: 15 }
        ]},
        { name: 'Secondi', items: [
            { dish: 'Pollo alla Parmigiana', price: 17 },
            { dish: 'Branzino alla Griglia', price: 19 }
        ]},
        { name: 'Dolci', items: [
            { dish: 'Tiramisu', price: 7 },
            { dish: 'Panna Cotta', price: 6 }
    ]}
  ];

  menuCard.appendChild(title);

  sections.forEach(section => {
        const sectionTitle = document.createElement('h2');
        sectionTitle.textContent = section.name;

        const list = document.createElement('ul');

        section.items.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `<span>${item.dish}</span> - <span>$${item.price}</span>`;
            list.appendChild(li);
        });

        menuCard.appendChild(sectionTitle);
        menuCard.appendChild(list);
    });

  container.appendChild(menuCard);
}