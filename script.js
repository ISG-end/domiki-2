function showDetails(cabinId) {
    alert(`Подробная информация о ${cabinId}`);
    // Здесь можно добавить логику для открытия модального окна или перехода на другую страницу
}

let lastScroll = 0; // Переменная для хранения последней позиции скролла
const header = document.querySelector('header'); // Находим header

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset; // Текущая позиция скролла

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Скроллим вниз и проскроллили больше 100px
        header.classList.add('hide'); // Скрываем меню
    } else {
        // Скроллим вверх
        header.classList.remove('hide'); // Показываем меню
    }

    lastScroll = currentScroll; // Обновляем последнюю позицию скролла
});