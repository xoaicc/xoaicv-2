form.onsubmit = (e) => {
    e.preventDefault();

    if (!grecaptcha.getResponse()) {
        alert('Vui lòng xác minh captcha!');
        return;
    } else {
        emailjs.sendForm('service_xoaicv', 'template_xoaicv', form)
            .then(res => {
                alert('SUCCESS!', res.status, res.text);
            }, err => {
                alert('FAILED...', err);
            });
    }

}