const burgerIcon = document.querySelector('.adaptive__menu');
const modalWindow = document.querySelector('.modal__window');
const smallMenu = document.querySelector('.small__menu__wrapper');
const smallMenuItems = document.querySelectorAll('.small__menu__link');
const closeSmallMenu = document.querySelector('.cross');


const prev = document.querySelectorAll('.arrow__left');
const next = document.querySelectorAll('.arrow__right');

let percent = 33.3;
prev.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if (percent === -22.5) {
    percent = 33.3;
    slidesField.style.transform = `translateX(${percent}%)`;
    removeMain()
    sliderButtons[0].classList.add('main');
  } else if (percent === -79) {
    percent = -22.5
    slidesField.style.transform = `translateX(${percent}%)`;
    removeMain()
    sliderButtons[1].classList.add('main');
  }
  })
})

next.forEach(arrow => {
  arrow.addEventListener('click', () => {
    if (percent === 33.3) {
    percent = -22.5;
    slidesField.style.transform = `translateX(${percent}%)`;
    removeMain()
    sliderButtons[1].classList.add('main');
  } else if (percent === -22.5) {
    percent = -79
    slidesField.style.transform = `translateX(${percent}%)`;
    removeMain()
    sliderButtons[2].classList.add('main');
  }
  })
})




const slidesField = document.querySelector('.wrapper__container__destinations');

const sliderButtons = document.querySelectorAll('.select__button ');

let slideIndex;

function removeMain() {
  sliderButtons.forEach(button => {
    button.classList.remove('main')
  })
}


sliderButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    target = event.target;

    if (target) {
      removeMain()
      button.classList.add('main');

      if (button.classList.contains('main')) {
        slideIndex = index + 1;
      }

      if (slideIndex === 1 && window.innerWidth > 390) {
        slidesField.style.transform = 'translateX(8%)';
      }

      if (slideIndex === 2 && window.innerWidth > 390) {
        slidesField.style.transform = 'translateX(-25.3%)';
      }

      if (slideIndex === 3 && window.innerWidth > 390) {
        slidesField.style.transform = 'translateX(-60%)';
      }



      if (slideIndex === 1 && window.innerWidth <= 390) {
        slidesField.style.transform = 'translateX(33.3%)';
      }

      if (slideIndex === 2 && window.innerWidth <= 390) {
        slidesField.style.transform = 'translateX(-22.5%)';
      }

      if (slideIndex === 3 && window.innerWidth <= 390) {
        slidesField.style.transform = 'translateX(-79%)';
      }
    }
  })
})


let interval;

if (window.innerWidth > 390) {
  interval = setInterval(slideLong, 1000);
} else {
  interval = setInterval(slideShort, 1000);
}



function slideLong() {
    if (window.innerWidth > 390) {
    removeMain()
    sliderButtons[1].classList.add('main');
    slidesField.style.transform = 'translateX(-25.3%)';
    clearInterval(interval);
    interval = setInterval(slideShort, 100);
  }
}


function slideShort() {
  if (window.innerWidth <= 390) {
  removeMain()
  sliderButtons[0].classList.add('main');
  slidesField.style.transform = 'translateX(33.3%)';
  clearInterval(interval);
  interval = setInterval(slideLong, 100);
  percent = 33.3;
}
}







// modal menu

function hideModal() {
  modalWindow.style.visibility = 'hidden';
  smallMenu.style.right = '-200px';

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      hideModal()
    }
  })
}


modalWindow.addEventListener('click', (event) => {
  if (event.target === modalWindow) {
    hideModal()
  }
})

burgerIcon.addEventListener('click', () => {
  modalWindow.style.visibility = 'visible';
  smallMenu.style.right = '0px';
})

smallMenuItems.forEach(element => {
  element.addEventListener('click', () => {
    hideModal()
  })
});

closeSmallMenu.addEventListener('click', (event) => {
  hideModal()
})





console.log('Вёрстка соответствует макету. +48' );
console.log('Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки. +15');
console.log('реализовано адаптивное меню со всем необходимым функционалом +22');

console.log('Итог: 48 + 15 + 22 = 85 ');

