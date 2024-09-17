function renderBasket() {
    const basket = document.getElementById('foodListId')
    basket.innerHTML = ""
    for ( let i = 0; i < restaurant.cart.items.length; i++) {
        const element = restaurant;
        basket.innerHTML += getBasketList(element, i);
    }

    if(restaurant.cart.items.length < 1) {
        basket.innerHTML += getBasketListIfEmpty()
    } else {
        basket.innerHTML += getPrice()
    }
}

function getPrice() {
    return `
            <div class="price">
                <table>
                    <tr>
                        <td class="left">Zwischensumme</td>
                        <td class="right">${restaurant.cart.totalPrice} €</td>
                    </tr>
                    <tr>
                        <td class="left">Lieferkosten</td>
                        <td class="right">5.00 €</td>
                    </tr>
                    <tr>
                        <td class="left">Gesamt</td>
                        <td class="right">${(parseFloat(restaurant.cart.totalPrice) + 5.00).toFixed(2)} €</td>
                    </tr>
                </table>
                <button class="orderBtn" onclick="renderMessage()">Bestellen</button>
            </div>`
}

function getBasketList(element, i) {
    return /*html*/`
            <div class="food">
                <h3>${element.cart.items[i].name}</h3>
                <div class="price_count">
                    <i class="fa-solid fa-minus" style="color: #ff9935;" onclick="removeFromBasket(${element.cart.items[i].id})"></i>
                    <p>${element.cart.items[i].cartCount}x</p>
                    <i class="fa-solid fa-plus padding_right" style="color: #ff9935;" onclick="insertToBasket(${element.cart.items[i].id})"></i>
                    <p>${(element.cart.items[i].price * element.cart.items[i].cartCount).toFixed(2)}</p>
                    <i class="fa-solid fa-trash-can" style="color: #ff9935;" onclick="removeAll(${element.cart.items[i].id})"></i>
                </div>
            </div>
                
    `
}

function getBasketListIfEmpty() {
    return /*html*/`
            <div class="food">
                <h4>Dein Warenkorb ist zurzeit leer!</h4>
            </div>
            <div class="price">
                <table>
                    <tr>
                        <td class="left">Zwischensumme</td>
                        <td class="right">0.00 €</td>
                    </tr>
                    <tr>
                        <td class="left">Lieferkosten</td>
                        <td class="right">5,00 €</td>
                    </tr>
                    <tr>
                        <td class="left">Gesamt</td>
                        <td class="right">0.00 €</td>
                    </tr>
                </table>
            </div>
    `
}

function renderKategories() {
    const categorieBox = document.getElementById('categoriesBox')
    categorieBox.innerHTML = `<i class="fa-solid fa-hand-point-right fa-2xl right_hand" style="color: rgba(255, 144, 0, 0.992);"></i>`

    for (let i = 0; i <= 21; i++) {
        const category = restaurant.menu[i].category;
        categorieBox.innerHTML += getCategories(category, i)
    }
}

function getCategories(categorie, i) {
    return /*html*/`
    <div>
        <span id="categoryBtn${i}" class="categoryButton" onclick="scrollToCategory('${categorie}')">${categorie}</span>
    </div>
    `;
}

function scrollToCategory(category) {
    const categoryElement = document.getElementById(`category-${category}`);
    if (categoryElement) {
        categoryElement.scrollIntoView({ behavior: 'smooth' });
    }
}

function init() {
    renderKategories();
    renderDishCart();
}

function renderDishCart() {
    const dishBox = document.getElementById('dishCartFullId');
    dishBox.innerHTML = "";

    const categoriesRendered = {};  // Ein Objekt, um sicherzustellen, dass jede Kategorie nur einmal gerendert wird

    for (let i = 0; i < restaurant.menu.length; i++) {
        const menuItem = restaurant.menu[i];
        const category = menuItem.category;

        if (!categoriesRendered[category]) {
            categoriesRendered[category] = true;
            
            const categoryImage = restaurant.categoryImages[category] || '/images/default.jpg';
            
            dishBox.innerHTML += getCategoryHeader(category, categoryImage);
            
            for (let j = 0; j < restaurant.menu.length; j++) {
                const dish = restaurant.menu[j];
                
                if (dish.category === category) {
                    dishBox.innerHTML += getDishCart(dish);
                }
            }
        }
    }
}

// Diese Funktion rendert den Header der Kategorie (mit Bild)
function getCategoryHeader(category, categoryImage) {
    return /*html*/`
        <div class="categoryHeader" id="category-${category}">
            <img class="categoryPhoto" src="${categoryImage}" alt="${category}">
            <h2>${category}</h2>
        </div>
    `;
}

// Diese Funktion rendert die Gerichte einer Kategorie
function getDishCart(menuItem) {
    return /*html*/ `
        <div class="dishHeaderFull">
            <div class="dishHeader">
                <div class="nameAndRating">
                    <h2>${menuItem.name}</h2>
                    <div class="ratingWithStar">
                        <h3>${menuItem.rating}</h3>
                        <i class="fa-regular fa-star" style="color: rgba(255, 140, 0, 0.8);"></i>
                    </div>
                </div>
                <div class="plus">
                    <i class="fa-solid fa-plus fa-2xl" style="color: #ff9935;" onclick="insertToBasket(${menuItem.id})"></i>
                </div>
            </div>
            <div class="priceAndDescription">
                <p class="descriptionDisch">${menuItem.description}</p>
                <p class="dishPrice">${menuItem.price.toFixed(2)} €</p>
            </div>
        </div>
    `;
}

function renderOderInfo() {
    for (let index = 0; index < restaurant.orderStatus.orderDetails.length; index++) {
        const element = restaurant.orderStatus.orderDetails[index].order;
        return element
    }
}

function renderMessage() {
    order()
    const orderStatus = restaurant.orderStatus
    const basket = document.getElementById('foodListId')
    basket.innerHTML += /*html*/`
            <div id="overlay" class="overlay">
                <div class="overlay-content">
                    <p id="overlay-message">Testbestellung erfolgreich!</p>
                    <p>Bestellnummer: ${orderStatus.orderNumber}</p>
                    <p>Dauer der zubereitung: ${orderStatus.deliveryEstimate}</p>
                    <button id="closeOverlay" onclick="toggleOverlay()">OK</button>
                </div>
            </div>
    `
    toggleOverlay()
}