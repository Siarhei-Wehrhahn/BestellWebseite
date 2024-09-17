function toggleBasket() {
    const basket = document.getElementById('basketId');
    if (window.innerWidth > 620) {
        basket.classList.toggle('d_none');
        basket.classList.toggle('open');
    } else {
        const basket = document.getElementById('basketId');
        const cart = document.getElementById('dishCartId');
        cart.classList.toggle('d_none');
        basket.classList.toggle('d_none');
        basket.classList.toggle('open');
    }
}

function insertToBasket(dishId) {
    const selectedDish = restaurant.menu.find(dish => dish.id === dishId);
    const existingDish = restaurant.cart.items.find(item => item.id === dishId);

    if (existingDish) {
        existingDish.cartCount++;
    } else {
        restaurant.cart.items.push({
            id: selectedDish.id,
            name: selectedDish.name,
            price: selectedDish.price,
            cartCount: 1
        });
    }

    updateTotalPrice();
    renderBasket();
}

function removeFromBasket(dishId) {
    const existingDish = restaurant.cart.items.find(item => item.id === dishId);

    if (existingDish) {
        existingDish.cartCount--;

        if (existingDish.cartCount == 0) {
            const index = restaurant.cart.items.indexOf(existingDish);
            restaurant.cart.items.splice(index, 1);
        }
    }
    updateTotalPrice();
    renderBasket();
}

function removeAll(dishId) {
    const existingDish = restaurant.cart.items.find(item => item.id === dishId);
    const index = restaurant.cart.items.indexOf(existingDish);

    if (existingDish) {
        existingDish.cartCount = 0
    }
    restaurant.cart.items.splice(index, 1)

    updateTotalPrice();
    renderBasket();
}

function updateTotalPrice() {
    let total = 0;

    for (let i = 0; i < restaurant.cart.items.length; i++) {
        const element = restaurant.cart.items[i];
        total += element.price * element.cartCount;
    }

    restaurant.cart.totalPrice = total.toFixed(2)
}

function deleteBasket() {
    restaurant.cart.items = [];
    restaurant.cart.totalPrice = 0.00;
}

function order() {
    for (let index = 0; index < restaurant.cart.items.length; index++) {
        let cart = restaurant.cart.items[index]
        let price = restaurant.cart.totalPrice

        let order = {
            order: cart,
            price: price
        }
        restaurant.orderStatus.orderDetails.unshift(order);
    }

    restaurant.orderStatus.orderNumber = Date.now().toString();
    restaurant.orderStatus.deliveryEstimate = "15 min"
    console.log(restaurant.orderStatus)
    deleteBasket()
    updateTotalPrice();
    renderBasket();
}

function toggleOverlay() {
    const overlay = document.getElementById('overlay');

    overlay.classList.toggle('d_flex');
}

function checkViewportWidth() {
    const basket = document.getElementById('basketId');
    if (window.innerWidth < 620 && !basket.classList.contains('d_none')) {
        basket.classList.add('d_none');
    } else {
        return
    }
}

// Initial check
checkViewportWidth();

// Add event listener to handle resizing
window.addEventListener('resize', checkViewportWidth);
