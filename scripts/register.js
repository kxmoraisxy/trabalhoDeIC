function toHome() {
    window.location.href = "home.html"
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("registerForm").addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        const newUser = {
            name: name,
            email: email,
            password: password
        };

        let users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(user => user.name === name || user.email === email);


        if (userExists) {
            alert('Já existe uma conta com este username ou email!');

        } else {
            users.push(newUser);

            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('loggedUser', JSON.stringify(newUser));

            alert('Registo com sucesso, Bem vindo, ' + name + '!');
            window.location.href = "Home.html"
        }
    });


});