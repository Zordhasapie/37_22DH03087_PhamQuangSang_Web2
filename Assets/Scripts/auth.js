$(document).ready(function () {
    let form = null;
    const vnPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

    if (document.title == "Register") {

        form = $("#fregister");
        form.submit(function (event) {
            // event.preventDefault();
            let is_valid = true;
            let email = $("#email").val();
            let password = $("#password").val();
            let rpassword = $("#rpassword").val();
            let phone = $("#phone").val();
            let tos = $("#tos").is(":checked");

            form.find("input").each(function () {
                if ($(this).val() == "")
                    is_valid = false;
            });

            if (!validator.isEmail(email))
                is_valid = false;

            if (password != rpassword) {
                is_valid = false;
                alert("Xác nhận mật khẩu không khớp!");
            }


            if (!phone.match(vnPhone))
                is_valid = false;
            if (!tos)
                is_valid = false;

            if (!is_valid)
                event.preventDefault();
        });
    }
});