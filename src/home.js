
export default function Home() {
    const container = document.querySelector('#content');
    const introHeader = document.createElement('h2');
    const introMessage = document.createElement('p');

    introHeader.textContent = 'Where authentic Italian tradition meets modern elegance.'
    introHeader.style.textAlign = 'center';

    introMessage.textContent = `For over 25 years, we've brought the true flavors of Italy to your table—using fresh ingredients,
                                time-honored recipes, and a warm, inviting atmosphere. From regional classics to contemporary creations,
                                every dish tells a story of passion, family, and a love for la bella tavola.
                                We're honored to share an unforgettable culinary experience with you.`
    
    container.appendChild(introHeader);
    container.appendChild(introMessage);
}