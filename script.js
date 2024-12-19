const itemInput = document.getElementById('itemInput');
const addButton = document.getElementById('addButton');
const clearButton = document.getElementById('clearButton');
const shoppingListContainer = document.getElementById('shoppingListContainer');

let shoppingList = []; 


function renderList() {
    shoppingListContainer.innerHTML = ''; 

    shoppingList.forEach((item, index) => {
        const listItem = document.createElement('div');
        listItem.className = 'shopping-list-item';
        if (item.purchased) listItem.classList.add('purchased');

        const itemText = document.createElement('span');
        itemText.textContent = item.name;
        listItem.appendChild(itemText);

        listItem.addEventListener('click', () => {
            shoppingList[index].purchased = !shoppingList[index].purchased;
            renderList();
        });

        shoppingListContainer.appendChild(listItem);
    });
}


addButton.addEventListener('click', () => {
    const newItem = itemInput.value.trim();
    if (newItem) {
        shoppingList.push({ name: newItem, purchased: false });
        itemInput.value = ''; 
        renderList();
    }
});


clearButton.addEventListener('click', () => {
    shoppingList = [];
    renderList();
});

