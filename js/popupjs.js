var link = document.querySelector('.write-us-link');
var popup = document.querySelector('.write-us');
var close = popup.querySelector('.modal-close');
var formName = popup.querySelector('.form-name');
var form = popup.querySelector('form');
var formEmail = popup.querySelector('.form-email');
var formComment = popup.querySelector('.form-comment');

var isStorageSupport = true;
var storage = '';

try {
  storage = localStorage.getItem('formName');
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.add('modal-show');
  if (storage) {
    formName.value = storage;
    formEmail.focus();
  } else {
  formName.focus();
}
});

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('modal-show');
  popup.classList.remove('modal-error');
});

form.addEventListener('submit', function (evt) {
  if (!formName.value || !formEmail.value || !formComment.value) {
    evt.preventDefault();
    popup.classList.remove('modal-error');
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
    localStorage.setItem('formName', formName.value );
  }
  }
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains('modal-show')) {
      popup.classList.remove('modal-show');
      popup.classList.remove('modal-error');
    }
  }
});
