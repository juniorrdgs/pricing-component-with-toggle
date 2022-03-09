let switchInput = document.querySelector('#switch');
let yearPrice = document.querySelectorAll('.year');
let monthPrice = document.querySelectorAll('.month');

function switchPrice() {
    if (switchInput.checked) {
        for (i = 0; i < yearPrice.length; i++) {
            yearPrice[i].style.display = 'none';
        }

        for (i = 0; i < yearPrice.length; i++) {
            monthPrice[i].style.display = 'block';
        }
    } else {
        for (i = 0; i < yearPrice.length; i++) {
            yearPrice[i].style.display = 'block';
        }

        for (i = 0; i < yearPrice.length; i++) {
            monthPrice[i].style.display = 'none';
        }
    }
    console.log(switchInput.checked);
}