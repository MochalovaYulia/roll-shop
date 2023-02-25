function calcCartPriceAndDelivery() {

    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceEl = document.querySelector('.total-price');
    const deliveryCost = document.querySelector('.delivery-cost');
    const deliverySmall = document.querySelector('.small');
    const CartDelivery = document.querySelector('[data-cart-delivery]');

    //  Общая стоимость товаров
    let priceTotal = 0;

    //  Обходим все блоки с ценами в корзине
    cartItems.forEach(function (item) {

        //  Находим товар
       const amountEl =  item.querySelector('[data-counter]');
       const priceEl = item.querySelector('.price__currency');

       //  Добавляем стоимость товара в общую стоимаость
       const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
       priceTotal = priceTotal + currentPrice;
    });

    // Отображаем цену на странице
    totalPriceEl.innerText = priceTotal;

    //  Скрываем/показываем блок со стоимостью доставки
    if (priceTotal > 0) {
        CartDelivery.classList.remove('none');
    } else {
        CartDelivery.classList.add('none');
    }

    // Устанавливаем стоимость доставки
    if (priceTotal >= 600) {
        deliverySmall.classList.add('none');
        deliveryCost.classList.add('free');
        deliveryCost.innerText = 'бесплатно';
    } else {
        deliverySmall.classList.remove('none');
        deliveryCost.classList.remove('free');
        deliveryCost.innerText = '250 ₽';
    }    
    
} 