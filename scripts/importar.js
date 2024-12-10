// Lista para armazenar as fontes (src) das fotos selecionadas
const selectedPhotos = [];

// Referência aos elementos HTML
const selectAllButton = document.getElementById('selectButton'); // Botão "Selecionar todas as fotos"
const importButton = document.querySelector('.import-button'); // Botão "Importar"

// Função para selecionar todas as fotos
selectAllButton.addEventListener('click', () => {
    // Seleciona todas as fotos
    document.querySelectorAll('.photo').forEach(photo => {
        const photoSrc = photo.querySelector('img').src;
        if (!selectedPhotos.includes(photoSrc)) {
            selectedPhotos.push(photoSrc);  // Adiciona o src da foto à lista
            photo.classList.add('selected'); // Marca a foto como selecionada
        }
    });

    // Atualiza o texto do botão "Importar"
    updateImportButtonText();
});

// Adiciona evento de clique às fotos para seleção individual
document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('click', () => {
        const photoSrc = photo.querySelector('img').src; // Obtendo o caminho da imagem

        // Alterna a seleção da foto
        if (photo.classList.contains('selected')) {
            photo.classList.remove('selected');
            const index = selectedPhotos.indexOf(photoSrc);
            if (index !== -1) {
                selectedPhotos.splice(index, 1); // Remove a foto da lista
            }
        } else {
            photo.classList.add('selected');
            selectedPhotos.push(photoSrc); // Adiciona a foto à lista
        }

        // Atualiza o texto do botão "Importar"
        updateImportButtonText();
    });
});

// Função para atualizar o texto do botão "Importar"
function updateImportButtonText() {
    const count = selectedPhotos.length;
    importButton.textContent = count > 0 ? `${count} Importar` : 'Importar'; // Atualiza o texto
}

// Adiciona as fotos selecionadas ao clicar no botão "Importar"
importButton.addEventListener('click', () => {
    if (selectedPhotos.length > 0) {
        // Armazena as fotos selecionadas no localStorage
        const savedPhotos = JSON.parse(localStorage.getItem('selectedPhotos')) || [];
        
        // Adiciona as novas fotos ao array de fotos salvas, sem duplicatas
        selectedPhotos.forEach(photoSrc => {
            if (!savedPhotos.includes(photoSrc)) {
                savedPhotos.push(photoSrc);
            }
        });

        // Armazena novamente as fotos no localStorage
        localStorage.setItem('selectedPhotos', JSON.stringify(savedPhotos));

        // Redireciona para a página inicial
        window.location.href = 'selecao.html';
    } else {
        alert("Por favor, selecione ao menos uma foto.");
    }
});
