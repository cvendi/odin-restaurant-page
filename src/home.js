import introImageFile from './leonardo-yip-rVcuY3LfH_Q-unsplash.jpg';

export default function Home() {
    const container = document.querySelector('#content');
    const introContainer = document.createElement('div');
    const introHeader = document.createElement('h2');
    const introImage = document.createElement('img');
    const imageCredit = document.createElement('span');
    const introMessage = document.createElement('p');

    introContainer.classList.add('intro-container');

    introHeader.textContent = 'Where authentic Italian tradition meets modern elegance.'
    introHeader.style.textAlign = 'center';

    introImage.src = introImageFile;
    introImage.style.width = '700px';
    introImage.style.height = 'auto';
    introImage.style.marginBottom = '10px'

    imageCredit.innerHTML = `Image by <a style="text-decoration: none; color: var(--nord12);" href="https://unsplash.com/@yipleonardo">Leonardo Yip</a> on Unsplash<hr>`
    imageCredit.style.fontSize = '11px';
    imageCredit.style.textDecoration = 'none';

    introMessage.textContent = `For over 25 years, we've brought the true flavors of Italy to your table—using fresh ingredients,
                                time-honored recipes, and a warm, inviting atmosphere. From regional classics to contemporary creations,
                                every dish tells a story of passion, family, and a love for la bella tavola.
                                We're honored to share an unforgettable culinary experience with you.`
    
    container.appendChild(introContainer);
    introContainer.appendChild(introImage);
    introContainer.appendChild(imageCredit);
    introContainer.appendChild(introHeader);
    introContainer.appendChild(introMessage);
}