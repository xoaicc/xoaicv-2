form.onsubmit = (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('input[type="submit"]');

    if (!grecaptcha.getResponse()) {
        currentLang === "vi" ? alert("Vui lòng xác minh captcha!") : alert("Please verify captcha!");
        return;
    }

    if (!submitBtn.disabled) {
        submitBtn.disabled = true;

        emailjs.sendForm("service_xoaicv", "template_xoaicv", form)
            .then(() => {
                currentLang === "vi" ? alert("Thư đã được gửi thành công! Hãy kiểm tra hòm thư của bạn") : alert("Email has been sent successfully! Please check your inbox");
            })
            .catch(() => {
                currentLang === "vi" ? alert("The message could not be sent, please check again!") : alert("Không thể gửi được thư, vui lòng kiểm tra lại!");
            })
            .finally(() => {
                submitBtn.disabled = false;
            });
    }
};
