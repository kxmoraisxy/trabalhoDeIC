// Função para alternar o estado dos botões
document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const isActive = button.getAttribute('data-active') === 'true';

        // Alterna o estado do botão
        if (isActive) {
            button.setAttribute('data-active', 'false');
            button.textContent = 'Desligado';
            button.classList.remove('active');
            button.style.backgroundColor = ''; // Remove a cor de fundo verde
        } else {
            button.setAttribute('data-active', 'true');
            button.textContent = 'Ligado';
            button.classList.add('active');
            button.style.backgroundColor = '#4CAF50'; // Define o fundo verde
        }
    });
});

// Função para redirecionar para home.html ao clicar no botão de confirmar
document.getElementById('confirmar').addEventListener('click', () => {
    window.location.href = 'home.html';
});
