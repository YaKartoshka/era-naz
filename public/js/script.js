const answers = [
    "Ты уверена?",
    "Точно точно??",
    "Ты действительно не хочешь???",
    "Подумай еще раз?",
    "Даю еще один шанс",
    "Че такая холодная(?",
    "Можем поговорим об этом?",
    "Я не буду спрашивать снова!",
    "Ладно спрошу!",
    "Ну пж!",
    "Баспа мнаны",
    "Баспа деймін!",
    "Токтанавись пожалуйста!",
    "Увы, ответ нет не принимается",
    ''
]

const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 0;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    // Change banner source
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "https://i.pinimg.com/originals/0b/ef/13/0bef130a27a83714abdb00572d9fba18.gif";
        refreshBanner();
    }
    clicks++;
    // increase button height and width gradually to 250px
    const sizes = [20, 25, 15, 17, 22]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers.length;
    // change button text
    if (i < total - 1) {
        no_button.innerHTML = answers[i];
        i++;
    } else if (i === total - 1) {
        
    }
});

yes_button.addEventListener('click', () => {
    // change banner gif path
    let banner = document.getElementById('banner');
    banner.src = "https://media.tenor.com/O_ZWTlW4BssAAAAM/cat-cute.gif";
    document.getElementById('valentine').innerHTML = 'Правильный выбор'
    refreshBanner();
    for(let i = 0; i< 10; i++){
        confetti({
            ...defaults,
            particleCount: 50,
            scalar: 2,
          });
    }
    // hide buttons div
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    // show message div
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    // Reload banner gif to force load  
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}