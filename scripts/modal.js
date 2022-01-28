const funcModal = () => {
    const btn = document.querySelector('.card-details__button_delivery')
    const cardTitle = document.querySelector('.card-details__title')

    const modalWindow = document.querySelector('.modal');
    const modalTitle = modalWindow.querySelector('.modal__title')
    const modalCloseButton = modalWindow.querySelector('.modal__close');

    const modalForm = modalWindow.querySelector('form');
    
    const modalClose = () => {
        modalWindow.classList.remove('open');
        modalForm.querySelectorAll('input').forEach(input => {
            input.value = '';
        })
    }
    btn.addEventListener('click', () => {
        modalWindow.classList.add('open');
        modalTitle.textContent = cardTitle.textContent;
    })

    modalCloseButton.addEventListener('click', modalClose);

    modalForm.addEventListener('submit', event => {
        event.preventDefault();

        const formLabels = modalWindow.querySelectorAll('.modal__label');
        const sendValueForm = {};

        formLabels.forEach(item => {
            const span = item.querySelector('span');
            const input = item.querySelector('input');

            sendValueForm[span.textContent] = input.value;
        })
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(sendValueForm),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            })
        modalClose();
    })
}

funcModal();