document.addEventListener('DOMContentLoaded', function() {
    const harry = { name: 'Harry Potter', hair: 'black' };
    const hermoine = { name: 'Hermoine Granger', hair: 'brown' };
    const ron = { name: 'Ron Weasley', hair: 'red' };

    const wizards = [harry, hermoine, ron];

    function renderWizards(wizardArray) {
        const list = document.getElementById('wizard-list');

        wizardArray.forEach(wizard => {
            const listItem = document.createElement('li');
            listItem.textContent = wizard.name;
            listItem.style.color = wizard.hair;
            list.appendChild(listItem);
        });
    }

    renderWizards(wizards);
});
