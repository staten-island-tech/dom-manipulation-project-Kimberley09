const DOMSelectors = {
    form: document.getElementById('animalForm'),
    cardContainer: document.getElementById('cardContainer'),
    animalName: document.getElementById('animalName'),
    animalDescription: document.getElementById('animalDescription'),
    animalPhoto: document.getElementById('animalPhoto')
};

function createAnimalObject(name, description, photo) {
    return { name, description, photo };
}

function injectObjectToDOM(animal) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <h2>${animal.name}</h2>
        <p>${animal.description}</p>
        <img src="${animal.photo}" alt="${animal.name}">
        <button class="remove">Remove</button>
    `;

    DOMSelectors.cardContainer.appendChild(card);

    card.querySelector('.remove').addEventListener('click', () => {
        removeObject(card);
    });
}

function clearInputFields() {
    DOMSelectors.animalName.value = '';
    DOMSelectors.animalDescription.value = '';
    DOMSelectors.animalPhoto.value = '';
}

function removeObject(card) {
    DOMSelectors.cardContainer.removeChild(card);
}

DOMSelectors.form.addEventListener('submit', (event) => {
    event.preventDefault();
    const animal = createAnimalObject(
        DOMSelectors.animalName.value,
        DOMSelectors.animalDescription.value,
        DOMSelectors.animalPhoto.value
    );

    injectObjectToDOM(animal);
    clearInputFields();
});

