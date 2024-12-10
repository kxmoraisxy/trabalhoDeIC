function toHome() {
    window.location.href = "home.html"
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;

        let users = JSON.parse(localStorage.getItem('users')) || [];

        const user = users.find(user => user.email === loginEmail);

        if (!user) {
            alert('Esta conta não existe! Confirme se inseriu corretamente os seus dados!');

        } else if (user.password !== loginPassword) {
            alert('Password incorreta!')
        } else {
            alert('Login com sucesso! Bem vindo, ' + user.name + '!');
            localStorage.setItem('loggedUser', JSON.stringify(user));
            window.location.href = 'home.html'
        }


    });


});