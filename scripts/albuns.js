// Obtém os elementos da página
const albumNameInput = document.getElementById('albumName');
const createAlbumBtn = document.getElementById('createAlbumBtn');
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const albumsContainer = document.getElementById('albums');

// Função para criar um novo álbum
function createAlbum(albumName, photos) {
    const album = document.createElement('div');
    album.classList.add('album');
    
    // Cria um link para a página do álbum
    const albumLink = document.createElement('a');
    albumLink.href = `album.html?album=${albumName}`;
    albumLink.style.textDecoration = 'none';
    
    // Título do álbum
    const albumTitle = document.createElement('h3');
    albumTitle.innerText = albumName;
    
    // Capa do álbum (primeira foto ou imagem pré-definida)
    const coverImage = document.createElement('img');
    coverImage.classList.add('cover-image');
    coverImage.src = photos.length > 0 ? photos[0] : 'https://via.placeholder.com/300'; // Usa a primeira foto como capa ou uma imagem de placeholder
    coverImage.alt = 'Capa do álbum';
    
    // Adiciona título e capa ao álbum
    albumLink.appendChild(coverImage);
    albumLink.appendChild(albumTitle);
    album.appendChild(albumLink);
    
    // Adiciona o álbum ao container de álbuns
    albumsContainer.appendChild(album);
}

// Função para adicionar álbuns predefinidos
function createPredefinedAlbums() {
    const albums = [
        { name: 'Viagem à Praia', photos: ['imagens/pessoa4.jpg', 'imagens/pessoa1.jpg', 'imagens/pessoa3.jpg'] },
        { name: 'Aniversário', photos: ['imagens/pessoa2.jpg', 'imagens/pessoa4.jpg'] },
        { name: 'Natal 2024', photos: ['imagens/pessoa1.jpg', 'imagens/pessoa1.jpg', 'imagens/pessoa3.jpg'] }
    ];

    albums.forEach(album => {
        createAlbum(album.name, album.photos); // Cria o álbum com nome e fotos
    });
}

// Chama a função para criar álbuns predefinidos ao carregar a página
window.onload = createPredefinedAlbums;

// Botão de criar álbum
document.getElementById('createAlbumBtn').addEventListener('click', () => {
    window.location.href = 'album-novo.html';
});

// Função para carregar álbuns do localStorage
function loadAlbums() {
    const albums = JSON.parse(localStorage.getItem('albums')) || [];

    albums.forEach(album => {
        const albumContainer = createAlbum(album.name);
        album.photos.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = 'Foto do álbum';
            albumContainer.appendChild(img);
        });
    });
}

// Chamar a função ao carregar a página
window.onload = () => {
    createPredefinedAlbums(); // Mantém os álbuns predefinidos
    loadAlbums(); // Carrega os álbuns do armazenamento local
};
