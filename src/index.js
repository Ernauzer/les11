// Plus Cons \\
const $buttons = document.querySelectorAll('button');
// const zero = 0;
$buttons.forEach(btn => {
    btn.addEventListener('click', function() {
        const parent = this.parentElement;
        const $span = parent.querySelector('.text');
        let num = +($span.textContent);
        if (this.classList.contains('button_plus')) {
            num++;
        }
        else if (this.classList.contains('button_cons')) {
            num--;
        }
        /////////
        // if (num < 1) { // eslint-disable-line no-magic-numbers
        //     num = zero;
        // }
        /////////

        parent.querySelector('.text').textContent = num;
    });
});

// Сhange Сolor \\
const $boxes = document.querySelectorAll('.box_color');
$boxes.forEach(item => {
    item.addEventListener('click', function () {
        const bgColor = this.style.backgroundColor;
        if (bgColor === bgColor) {
            this.style.backgroundColor = 'rgb(30, 144, 255)';
        }
        if (bgColor === 'rgb(30, 144, 255)') {
            this.style.backgroundColor = 'rgb(0, 128, 0)';
        }
        if (bgColor === 'rgb(0, 128, 0)') {
            this.style.backgroundColor = 'rgb(255,255,51)';
        }
        this.parentElement.appendChild(this);
    });
});
