document.addEventListener('DOMContentLoaded', function () {
    const DISCOUNT = document.querySelector('.discount');
    const DETAILS = document.querySelector('.discount__details');
    const DETAILS_TEXT = document.querySelector('.discount__details span');
    DETAILS.addEventListener('click', function() {
        DISCOUNT.classList.toggle('active');
        if (DETAILS_TEXT.innerText === 'Дивіться подробиці') {
            DETAILS_TEXT.innerText = "Приховати подробиці";
        } else {
            DETAILS_TEXT.innerText = 'Дивіться подробиці';
        }
    });

    const date = new Date();
    const currentYear = date.getFullYear();
    document.getElementById("currentYear").innerHTML = currentYear;
});