const burgerIcon = document.querySelector('.adaptive__menu');
const modalWindow = document.querySelector('.modal__window');
const smallMenu = document.querySelector('.small__menu__wrapper');
const smallMenuItems = document.querySelectorAll('.small__menu__link');
const closeSmallMenu = document.querySelector('.cross');

const loginWindow = document.querySelector('.modal__login__window');
const loginWrapper = document.querySelector('.modal__login__wrapper');
const login = document.querySelector('.login');

let signIn = document.querySelector('.form__submit');
let register = document.querySelector('.modal__register');
const modalLogin = document.querySelector('.modal__login');

let loginForm = document.querySelector('#modal__form__login');
let passwordForm = document.querySelector('#modal__form__password')

let prev;
let next;

let position = 1;

const slidesField = document.querySelector('.wrapper__container__destinations');

const sliderButtons = document.querySelectorAll('.select__button ');

let sliderItems;
let destinationWrapper;

let screen1 = 290;
let screen2 = -570;
let screen3 = -1430;

let smallScreen1 = 158;
let smallScreen2 = -222;
let smallScreen3 = -602;

let slideIndex;

function removeMain() {
  sliderButtons.forEach(button => {
    button.classList.remove('main');
  })
}

sliderButtons.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    target = event.target;
    if (target) {
      removeMain()
      button.classList.add('main');

      if (window.innerWidth > 390) {

        if (sliderItems[1].classList.contains('pic2') && index === 0) {
          addSlider(3, 'USA', 'prepend');
          slidesField.style.transition = '0s';
          slidesField.style.transform = `translateX(${screen3}px)`;

          setTimeout(backTranslate, 1)

          function backTranslate() {
            slidesField.style.transition = '0.4s'
            slidesField.style.transform = `translateX(${screen2}px)`;
            setTimeout(waitToDelete, 400)

            function waitToDelete() {
              destinationWrapper[3].remove();
              sliderItems = document.querySelectorAll('.destination');
              destinationWrapper = document.querySelectorAll('.destination__wrapper');
            }

            sliderItems = document.querySelectorAll('.destination');
            destinationWrapper = document.querySelectorAll('.destination__wrapper');
            addMid(1)
          }

          removeMain()
          sliderButtons[0].classList.add('main');
        }


        if (sliderItems[1].classList.contains('pic3') && index === 1) {
          addSlider(1, 'SPAIN', 'prepend');
          slidesField.style.transition = '0s';
          slidesField.style.transform = `translateX(${screen3}px)`;

          setTimeout(backTranslate, 1)

          function backTranslate() {
            slidesField.style.transition = '0.4s'
            slidesField.style.transform = `translateX(${screen2}px)`;
            setTimeout(waitToDelete, 400)

            function waitToDelete() {
              destinationWrapper[3].remove();
              sliderItems = document.querySelectorAll('.destination');
              destinationWrapper = document.querySelectorAll('.destination__wrapper');
            }

            sliderItems = document.querySelectorAll('.destination');
            destinationWrapper = document.querySelectorAll('.destination__wrapper');
            addMid(1)
          }

          removeMain()
          sliderButtons[1].classList.add('main');
        }


        if (sliderItems[1].classList.contains('pic1') && index === 2) {
          addSlider(2, 'JAPAN', 'prepend');
          slidesField.style.transition = '0s';
          slidesField.style.transform = `translateX(${screen3}px)`;

          setTimeout(backTranslate, 1)

          function backTranslate() {
            slidesField.style.transition = '0.4s'
            slidesField.style.transform = `translateX(${screen2}px)`;
            setTimeout(waitToDelete, 400)

            function waitToDelete() {
              destinationWrapper[3].remove();
              sliderItems = document.querySelectorAll('.destination');
              destinationWrapper = document.querySelectorAll('.destination__wrapper');
            }

            sliderItems = document.querySelectorAll('.destination');
            destinationWrapper = document.querySelectorAll('.destination__wrapper');
            addMid(1)
          }

          removeMain()
          sliderButtons[2].classList.add('main');
        }

        // right 

        if (sliderItems[1].classList.contains('pic2') && index === 2) {
          addSlider(1, 'SPAIN', 'append');
          slidesField.style.transition = '0.4s';
          slidesField.style.transform = `translateX(${screen3}px)`;

          setTimeout(backTranslate, 1)

          function backTranslate() {
            addMid(2)
            setTimeout(waitToDelete, 400)

            function waitToDelete() {
              slidesField.style.transition = '0s';
              slidesField.style.transform = `translateX(${screen2}px)`;
              destinationWrapper[0].remove();
              sliderItems = document.querySelectorAll('.destination');
              destinationWrapper = document.querySelectorAll('.destination__wrapper');
            }
          }


          removeMain()
          sliderButtons[2].classList.add('main');
        }

        if (sliderItems[1].classList.contains('pic3') && index === 0) {
          addSlider(2, 'JAPAN', 'append');
          slidesField.style.transition = '0.4s';
          slidesField.style.transform = `translateX(${screen3}px)`;

          setTimeout(backTranslate, 1)

          function backTranslate() {
            addMid(2)
            setTimeout(waitToDelete, 400)

            function waitToDelete() {
              slidesField.style.transition = '0s';
              slidesField.style.transform = `translateX(${screen2}px)`;
              destinationWrapper[0].remove();
              sliderItems = document.querySelectorAll('.destination');
              destinationWrapper = document.querySelectorAll('.destination__wrapper');
            }

          }


          removeMain()
          sliderButtons[0].classList.add('main');
        }


        if (sliderItems[1].classList.contains('pic1') && index === 1) {
          addSlider(3, 'USA', 'append');
          slidesField.style.transition = '0.4s';
          slidesField.style.transform = `translateX(${screen3}px)`;

          setTimeout(backTranslate, 1)

          function backTranslate() {
            addMid(2)
            setTimeout(waitToDelete, 400)

            function waitToDelete() {
              slidesField.style.transition = '0s';
              slidesField.style.transform = `translateX(${screen2}px)`;
              destinationWrapper[0].remove();
              sliderItems = document.querySelectorAll('.destination');
              destinationWrapper = document.querySelectorAll('.destination__wrapper');
            }

          }

          addMid(1)
          removeMain()
          sliderButtons[1].classList.add('main');
        }

      }

      if (window.innerWidth <= 390) {

        if (target == sliderButtons[0]) {
          slidesField.style.transform = `translateX(${smallScreen1}px)`;
          position = 1
        }

        if (target == sliderButtons[1]) {
          slidesField.style.transform = `translateX(${smallScreen2}px)`;
          position = 2
        }

        if (target == sliderButtons[2]) {
          slidesField.style.transform = `translateX(${smallScreen3}px)`;
          position = 3
        }
      }
    }
  })
})



function addSlider(number, text, pend) {
  sliderItems = document.querySelectorAll('.destination');
  const newSlider = document.createElement('div');
  newSlider.classList.add('destination__wrapper');
  newSlider.innerHTML = `
  <div class="destination pic${number}">
  <img src="./img/slider_arrow.png" alt="left-arrow" class="arrow__left ${number == 1 ? 'disabled' : ''}">
  <img src="./img/slider_arrow.png" alt="right-arrow" class="arrow__right ${number == 3 ? 'disabled' : ''}">
  <span class="pic-text">${text}</span></div>
  </div>
  `
  const location = `${pend}`;
  slidesField[location](newSlider);


}


function createSliders() {
  addSlider(1, 'SPAIN', 'append')
  addSlider(2, 'JAPAN', 'append')
  addSlider(3, 'USA', 'append')
  sliderItems = document.querySelectorAll('.destination');
  destinationWrapper = document.querySelectorAll('.destination__wrapper');
  prev = document.querySelectorAll('.arrow__left');
  next = document.querySelectorAll('.arrow__right');
}

createSliders();






function addMid(i) {
  destinationWrapper.forEach((elem, index) => {
    elem.classList.remove('mid');
    if (index === i) {
      elem.classList.add('mid')
    }
  })
}

function deleteFirstSlider() {
  setTimeout(slidesField.addEventListener('click', movingSlider), 400);
  destinationWrapper = document.querySelectorAll('.destination__wrapper');
  sliderItems = document.querySelectorAll('.destination');
  destinationWrapper[0].remove();
  slidesField.style.transition = '0s';
  slidesField.style.transform = `translateX(${screen2}px)`;

  function backTransition() {
    slidesField.style.transition = '0.4s';
  }
  setTimeout(backTransition, 400)
  destinationWrapper = document.querySelectorAll('.destination__wrapper');
  sliderItems = document.querySelectorAll('.destination');
}


function deleteLastSlider() {
  slidesField.removeEventListener('click', movingSlider);
  destinationWrapper = document.querySelectorAll('.destination__wrapper');
  setTimeout(waitToDelete, 400)
  slidesField.style.transition = '0.4s';
  slidesField.style.transform = `translateX(${screen2}px)`;

  function waitToDelete() {
    destinationWrapper[3].remove();
    sliderItems = document.querySelectorAll('.destination');
    destinationWrapper = document.querySelectorAll('.destination__wrapper');
  }
  setTimeout(slidesField.addEventListener('click', movingSlider), 400);
  addMid(1)
}


const movingSlider = function (event) {
  const target = event.target;


  if (target == sliderItems[0]) {
    slidesField.removeEventListener('click', movingSlider);
    if (target.classList.contains('pic1')) {
      addSlider(3, 'USA', 'prepend')
      removeMain()
      sliderButtons[0].classList.add('main');
    } else if (target.classList.contains('pic2')) {
      addSlider(1, 'SPAIN', 'prepend')
      removeMain()
      sliderButtons[1].classList.add('main');
    } else if (target.classList.contains('pic3')) {
      addSlider(2, 'JAPAN', 'prepend')
      removeMain()
      sliderButtons[2].classList.add('main');
    }
    slidesField.style.transition = '0s';
    slidesField.style.transform = `translateX(${screen3}px)`;
    setTimeout(deleteLastSlider, 1);
  }


  if (target == sliderItems[2]) {
    slidesField.removeEventListener('click', movingSlider);

    if (target.classList.contains('pic1')) {
      addSlider(2, 'JAPAN', 'append')
      removeMain()
      sliderButtons[0].classList.add('main');
    } else if (target.classList.contains('pic2')) {
      addSlider(3, 'USA', 'append')
      removeMain()
      sliderButtons[1].classList.add('main');
    } else if (target.classList.contains('pic3')) {
      addSlider(1, 'SPAIN', 'append')
      removeMain()
      sliderButtons[2].classList.add('main');
    }

    setTimeout(deleteFirstSlider, 300);
    slidesField.style.transition = '0.4s';
    slidesField.style.transform = `translateX(${screen3 - 30}px)`;

    destinationWrapper = document.querySelectorAll('.destination__wrapper');
    addMid(2)
  }

}











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
    addMid(1)
    slidesField.style.transform = `translateX(${screen2}px)`;
    clearInterval(interval);
    interval = setInterval(slideShort, 100);
    slidesField.addEventListener('click', movingSlider);
    position = 1
  }
}


function slideShort() {
  if (window.innerWidth <= 390) {
    position = 1
    clearInterval(interval);
    interval = setInterval(slideLong, 100);

    destinationWrapper.forEach(elem => elem.remove());
    createSliders();
    removeMain()
    slidesField.style.transition = '0.4s';
    sliderButtons[0].classList.add('main');
    slidesField.style.transform = `translateX(${smallScreen1}px)`;
    destinationWrapper.forEach(elem => elem.classList.add('mid'))
    slidesField.removeEventListener('click', movingSlider)

    prev.forEach(arrow => {
      arrow.addEventListener('click', () => {
        if (position === 2) {
          slidesField.style.transform = `translateX(${smallScreen1}px)`;
          removeMain()
          sliderButtons[0].classList.add('main');
          position--
        } else if (position === 3) {
          slidesField.style.transform = `translateX(${smallScreen2}px)`;
          removeMain()
          sliderButtons[1].classList.add('main');
          position--
        }
      })
    })


    next.forEach(arrow => {
      arrow.addEventListener('click', () => {
        if (position === 1) {
          slidesField.style.transform = `translateX(${smallScreen2}px)`;
          removeMain()
          sliderButtons[1].classList.add('main');
          position++
        } else if (position === 2) {
          slidesField.style.transform = `translateX(${smallScreen3}px)`;
          removeMain()
          sliderButtons[2].classList.add('main');
          position++
        }
      })
    })
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
    if (element.innerHTML === 'Account') {
      openPage1()
      openLoginModal()
    }
    hideModal()
  })
});

closeSmallMenu.addEventListener('click', (event) => {
  hideModal()
})



// modal login


function openLoginModal() {
  loginWindow.style.visibility = 'visible';
  loginWrapper.style.top = '10%';
}


function hideLoginModal() {
  loginWindow.style.visibility = 'hidden';
  loginWrapper.style.top = '-50%';
}


document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    hideLoginModal()
    loginWrapper.style.transition = '0.5s ease-in';
  }
})

loginWindow.addEventListener('click', (event) => {
  if (event.target === loginWindow) {
    hideLoginModal()
    loginWrapper.style.transition = '0.5s ease-in';
  }
})

login.addEventListener('click', () => {
  openPage1()
  openLoginModal()

})


function openPage1() {

  loginWrapper.style.height = '660px'

  modalLogin.innerHTML = `
  <h2>Log in to your account</h2>
<button class="modal__button facebook">Sign In with Facebook</button>
<button class="modal__button google">Sign In with Google</button>
<div class="modal__or__wrapper">
<hr />
<p class="modal__or">or</p>
<hr />
</div>
<form class="modal__sign__form" action="#">
<label class="modal__form__text first" for="modal__form__login"> E-mail
<input id="modal__form__login" class="modal__input" type="email" >
</label>
<label class="modal__form__text second" for="modal__form__password"> Password
<input id="modal__form__password" class="modal__input" type="password">
</label>
<button class="modal__button form__submit" type="submit">Sign In</button>
</form>
<a href="#" class="modal__forgot">Forgot Your Password?</a>
<hr>
<p class="modal__text">Don’t have an account? <a href="#" class="modal__register">Register</a></p>
  `
  setTimeout(avtiveTransition, 1);

  function avtiveTransition() {
    loginWrapper.style.transition = '0s';
  }
  signIn = document.querySelector('.form__submit');
  register = document.querySelector('.modal__register');
  loginForm = document.querySelector('#modal__form__login');
  passwordForm = document.querySelector('#modal__form__password')

  signIn.addEventListener('click', () => {

    if (!loginForm.value) {
      alert('Пожалуйста, укажите вашу электронную почту')
      return
    }

    if (!passwordForm.value) {
      alert('Пожалуйста, укажите ваш пароль')
      return
    }

    alert(` Спасибо за регистрацию! \n \n Ваша почта: ${loginForm.value} \n Ваш пароль: ${passwordForm.value}`)
    loginForm.value = ''
    passwordForm.value = ''
    hideLoginModal()
    loginWrapper.style.transition = '0.5s ease-in';

  })
}


function openPage2() {
  loginWrapper.style.height = '436px'
  modalLogin.innerHTML = `
  <h2>Create account</h2>

  <form class="modal__sign__form" action="#">
  <label class="modal__form__text first" for="modal__form__login"> E-mail
  <input id="modal__form__login" class="modal__input" type="email">
  </label>
  <label class="modal__form__text second" for="modal__form__password"> Password
  <input id="modal__form__password" class="modal__input" type="password">
  </label>
  <button class="modal__button form__submit" type="submit">Sign Up</button>
  </form>
  <hr>
  <p class="modal__text">Already have an account? <a href="#" class="modal__register">Log in</a></p>
    `
  register = document.querySelector('.modal__register');
}





loginWrapper.addEventListener('click', (event) => {
  const target = event.target;
  if (target === register && register.innerHTML === 'Register') {
    openPage2()
  }

  if (target === register && register.innerHTML === 'Log in') {
    openPage1()
  }
})


console.log('Бесконечный слайдер в виде карусели в секции destinations +50.');
console.log('Кнопка Login и кнопка Account показывает сверстанный логин попап + 50.');
console.log('Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету + 25.');
console.log('Итог 125/125')