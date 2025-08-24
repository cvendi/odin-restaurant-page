
export default function Menu() {
    const container = document.querySelector('#content');
    const menuContent = document.createElement('p');
    
    menuContent.textContent = 'This is the menu';
    container.appendChild(menuContent);
}