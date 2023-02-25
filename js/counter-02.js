// Добавляем прослушку на все окно
window.addEventListener('click', function(event){

    let counter;

    //Проверяем клик по кнопкам плюс и минус 
    if (event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus') {

        // Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper');
        // Находим див с числом
        counter = counterWrapper.querySelector('[data-counter]');

    }

    // Проверяем является ли элемент кнопкой плюс
    if (event.target.dataset.action === 'plus') {
    
        counter.innerText = ++counter.innerText;
    }

    // Проверяем является ли элемент кнопкой минус
    if (event.target.dataset.action === 'minus') {

    
        //  Проверяем чтобы счетчик был больше 1
        if  ( parseInt(counter.innerText) > 1 ) {

            counter.innerText = --counter.innerText; 

        } else if(event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {

            // Проверка на товар который находится в корзине

            //  Удаляем товар из корзины
            event.target.closest('.cart-item').remove();

            //  Отображение статуса корзины
            toggleCartStatus ()

            //  Пересчет общей стоимости товаров в корзине
            calcCartPriceAndDelivery()
            
        }

    }

    //  Проверяем клик на плюс или минус внутри корзины
    if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
        //  Пересчет общей стоимости товаров в корзине
        calcCartPriceAndDelivery()
    }

    
})