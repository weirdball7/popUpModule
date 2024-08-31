const popUp = (...links) => {
    let existingPopUp = document.querySelector('.popup');
    if (existingPopUp) {
        existingPopUp.remove();
        return;
    }

    const popUp = document.createElement('div');
    popUp.classList.add('popup');
    const linksList = document.createElement('ul');
    links.forEach(link => {
        const item = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link;
        anchor.textContent = link;
        item.appendChild(anchor);
        linksList.appendChild(item);
    });
    popUp.appendChild(linksList);
    document.body.appendChild(popUp);
};

module.exports = { popUp };