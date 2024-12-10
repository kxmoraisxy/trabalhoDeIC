// Aguardar até que a página esteja carregada
document.addEventListener('DOMContentLoaded', () => {
    const saveAlbumBtn = document.getElementById('saveAlbumBtn');
    const albumNameInput = document.getElementById('albumName');
    const fileInput = document.getElementById('fileInput');
    const alertMessage = document.getElementById('alertMessage');

    // Adicionar evento para o botão de salvar álbum
    saveAlbumBtn.addEventListener('click', () => {
        const albumName = albumNameInput.value.trim();
        const files = fileInput.files;

        // Se o nome do álbum ou fotos não foram fornecidos
        if (!albumName || files.length === 0) {
            alertMessage.style.display = 'block';  // Exibir mensagem de erro
        } else {
            alertMessage.style.display = 'none';  // Esconder mensagem de erro

            // Criar objeto com os dados do álbum
            const albumData = {
                name: albumName,
                photos: Array.from(files).map(file => URL.createObjectURL(file)) // Cria URLs temporários para as imagens
            };

            // Recuperar álbuns do localStorage ou criar array vazio
            let albums = JSON.parse(localStorage.getItem('albums')) || [];

            // Adicionar o novo álbum ao array de álbuns
            albums.push(albumData);

            // Salvar de volta no localStorage
            localStorage.setItem('albums', JSON.stringify(albums));

            // Redirecionar para a página de álbuns
            window.location.href = 'albuns.html';
        }
    });
});
