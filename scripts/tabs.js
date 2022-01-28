const tabsFunc = () => {

    /* Constants */

    const tabs = document.querySelectorAll('.card-detail__change');
    const tabsTitle = document.querySelector('.card-details__title');
    const tabsImage = document.querySelector('.card__image_item');
    const tabsPrice = document.querySelector('.card-details__price');
    const tabsDescriptionRom = document.querySelector('.description__memory'); // Изменить размер памяти в описании под табами (в уроке мы это не затронули)

    const tabsInformation = [
        {
            name: 'Graphite',
            memory: 128,
            price: 69990,
            image: 'iPhone-graphite.webp',
            title: 'iPhone 13 Pro Графитовый'
        },

        {
            name: 'Silver',
            memory: 256,
            price: 89990,
            image: 'iPhone-silver.webp',
            title: 'iPhone 13 Pro Серебристый'
        },

        {
            name: 'Sierra Blue',
            memory: 512,
            price: 109990,
            image: 'iPhone-sierra_blue.webp',
            title: 'iPhone 13 Pro Небесно-голубой'
        }
    ]

    /* Functions */

    // Активация работы табов
    const toActiveTab = (indexTab) => {
        tabs.forEach((tab) => {
            tab.classList.contains('active') && tab.classList.remove('active');
        })
        tabs[indexTab].classList.add('active');
        changeTabContent(indexTab);
    }

    // Я решил для каждого определенного действия создать свою функцию и объединить всё в одну

    const changeTabPrice = (index) => {
        tabsPrice.textContent = tabsInformation[index].price + '₽';
    }
    const changeTabTitle = (index) => {
        tabsTitle.textContent = `Смартфон Apple iPhone 13 Pro ${tabsInformation[index].memory}GB ${tabsInformation[index].name}`;
    }
    const changeTabImage = (index) => {
        tabsImage.setAttribute('src', `./img/${tabsInformation[index].image}`);
        // tabsImage.src = `./img/${tabsInformation[index].image}`;
    }
    const changeTabDescriptionRom = (index) => {
        tabsDescriptionRom.textContent = `Встроенная память (ROM) ${tabsInformation[index].memory}
        ГБ`;
    }
    const changeTitleWithTab = (index) => {
        document.title = tabsInformation[index].title;
    }

    // Главная функция смены контента
    const changeTabContent = (index) => {
        changeTabTitle(index);
        changeTabImage(index);
        changeTabPrice(index);
        changeTabDescriptionRom(index);
        changeTitleWithTab(index);
    }

    
    // Создание события клика и запуск функции
    tabs.forEach((tab, index)=> {
        tab.addEventListener('click', () => {
            toActiveTab(index);
        })
    })
    // Смена контента для активного по умолчанию элемента
    changeTabContent(0);
}
// Запуск
tabsFunc();