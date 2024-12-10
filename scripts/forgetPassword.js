function toHome() {
    window.location.href = "home.html"
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('forgetPasswordForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const forgetEmail = document.getElementById('forgetEmail').value;
        const novaPassword = document.getElementById('novaPassword').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const userIndex = users.findIndex(user => user.email === forgetEmail);

        if (userIndex === -1) {
            alert('Esta conta não existe!')
        } else {
            users[userIndex].password = novaPassword;
            localStorage.setItem('users', JSON.stringify(users))
            alert('Password atualizada com sucesso!')
            window.location.href = "login.html"
        }
    });

});