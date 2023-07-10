import Notiflix from 'notiflix';
const formEl = document.querySelector('.form');
let delayInp = null;
let stepInp = null;
let amountInp = null;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function submitHandler(e) {
  e.preventDefault();

  const {
    elements: { delay, step, amount },
  } = e.currentTarget;
  delayInp = parseInt(delay.value);
  stepInp = parseInt(step.value);
  amountInp = parseInt(amount.value);

  for (let i = 0; i < amountInp; i++) {
    createPromise(i, delayInp)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });

    delayInp += stepInp;
  }
}

formEl.addEventListener('submit', submitHandler);
// test bag
