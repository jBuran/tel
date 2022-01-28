const funcAccordeon = () => {
    const chrItems = document.querySelectorAll('.characteristics__item');

    chrItems.forEach(item => {
        const chrButton = item.querySelector('.characteristics__title');
        const chrDesc = item.querySelector('.characteristics__description');

        chrButton.addEventListener('click', () => {
            chrItems.forEach(item => {

                const chrRemoveButton = item.querySelector('.characteristics__title');
                const chrRemoveDesc = item.querySelector('.characteristics__description');

                if (chrRemoveDesc !== chrDesc) {
                    chrRemoveDesc.classList.remove('open');
                    chrRemoveDesc.style.height = 0;
                    chrRemoveButton.classList.remove('active');
                }
            })
            
            if (chrDesc.classList.contains('open')) {
                chrDesc.style.height = 0;
            } else {
                chrDesc.style.height = chrDesc.scrollHeight + 'px';
            }

            chrDesc.classList.toggle('open');
            chrButton.classList.toggle('active');
        })
    })
}

funcAccordeon();