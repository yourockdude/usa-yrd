(function () {
    var formEl = document.querySelector('section.form'),
        revealer = new RevealFx(formEl),
        closeCtrl = formEl.querySelector('.form__close');
    send = formEl.querySelector('.send');

    document.querySelector('.btn--form-open').addEventListener('click', function () {
        revealer.reveal({
            bgcolor: '#8f40f1',
            direction: 'bt',
            duration: 600,
            onCover: function (contentEl, revealerEl) {
                formEl.classList.add('form--open');
                contentEl.style.opacity = 1;
            },
            onComplete: function () {
                closeCtrl.addEventListener('click', closeForm);
            }
        });
    });

    function closeForm() {
        closeCtrl.removeEventListener('click', closeForm);
        formEl.classList.remove('form--open');
        revealer.reveal({
            bgcolor: '#8f40f1',
            direction: 'tb',
            duration: 600,
            onCover: function (contentEl, revealerEl) {
                formEl.classList.remove('form--open');
                contentEl.style.opacity = 0;
            }
        });
    }

    send.addEventListener('click', (e) => { e.preventDefault() })
    formEl.addEventListener('submit', function (ev) { ev.preventDefault(); });
})();