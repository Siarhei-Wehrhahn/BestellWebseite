function renderBasket() {
    const basket = document.getElementById('foodListId')
    basket.innerHTML = ""
    for ( let i = 0; i < restaurant.cart.items.length; i++) {
        const element = restaurant[i];
        basket.innerHTML += getBasketList(element, i);
    }

    if(restaurant.cart.items.length < 1) {
        basket.innerHTML += getBasketListIfEmpty()
    }
}

function getBasketList(element, i) {
    return /*html*/`
            <div class="food">
                    <h3>${element.cart.items[i].name}</h3>
                    <div class="price_count">
                        <i class="fa-solid fa-minus" style="color: #ff9935;"></i>
                        <p>${element.cart.items[i].cartCount}x</p>
                        <i class="fa-solid fa-plus padding_right" style="color: #ff9935;"></i>
                        <p class="padding_right">${element.cart.items[i].price}</p>
                        <i class="fa-solid fa-trash-can" style="color: #ff2600;"></i>
                    </div>
                </div>
                <div class="price">
                    <table>
                        <tr>
                            <td class="left">Zwischensumme</td>
                            <td class="right">${element.cart.totalPrice}€</td>
                        </tr>
                        <tr>
                            <td class="left">Lieferkosten</td>
                            <td class="right">5,00 €</td>
                        </tr>
                        <tr>
                            <td class="left">Gesamt</td>
                            <td class="right">${element.cart.items[i].cartCount + 5.00}€</td>
                        </tr>
                    </table>
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
                            <td class="right">5,00€</td>
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
        <span id="categoryBtn${i}" class="categoryButton">${categorie}</span>
    </div>
    `
}

function init() {
    renderKategories()
}