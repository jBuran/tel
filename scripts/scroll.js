"use strict";

const scrollFunc = () => {
        seamless.polyfill(); // Запуск модуля для плавного скрипта с поддержкой Safari MAC OS

    const links = document.querySelectorAll('.header-menu__item a') // Сбор всех элементов в подобие массива
    const infoLink = document.querySelector('.card-details__link-characteristics')

    const allLinks = [...links, infoLink]

    allLinks.forEach(item => {
        item.addEventListener('click', (event) => { // Событие клика
            event.preventDefault(); // Сброс события по умолчанию (перевод по ID)
            const id = item.getAttribute('href').substring(1); // Получить айди без решетки
            const section = document.getElementById(id); // Найти блок с этим айди

            if (section) { // Если такой блок существует
                seamless.elementScrollIntoView(section, { // Событие плавного скролла с доп. модулем
                    behavior: 'smooth',
                    block: 'start'
                })
                
                // section.scrollIntoView({
                //     behavior: 'smooth',        // Обычный скролл без модулей, но без поддержки Safari MAC OS
                //     block: 'center'
                // })
            }
        })
    })
}

scrollFunc();