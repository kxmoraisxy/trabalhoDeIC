// Função para abrir o popup
function openPopup(platform) {
    // Obter a imagem da URL (se existir)
    const urlParams = new URLSearchParams(window.location.search);
    const photo = urlParams.get('foto');

    // Atualizar o título do popup
    const popupTitle = document.getElementById('popup-title');
    popupTitle.innerText = `Partilhar no ${platform}`;

    // Carregar a imagem no popup, se o parâmetro estiver presente
    const popupImage = document.getElementById('popup-image');
    if (photo) {
        popupImage.src = `../imagens/${photo}`;
        popupImage.style.display = 'block'; // Garantir que a imagem aparece
    } else {
        popupImage.style.display = 'none'; // Esconder caso não haja imagem
    }

    // Adicionar a barra de rede social
    const popupBar = document.getElementById('popup-bar');
    const popupLogo = document.getElementById('popup-logo');
    const popupNetworkName = document.getElementById('popup-network-name');

    if (platform === 'Facebook') {
        popupBar.style.backgroundColor = '#3b5998'; // Cor do Facebook
        popupLogo.src = "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"; // Logo do Facebook
        popupNetworkName.innerText = "Facebook";
    } else if (platform === 'Instagram') {
        popupBar.style.backgroundColor = '#E1306C'; // Cor do Instagram
        popupLogo.src = "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"; // Logo do Instagram
        popupNetworkName.innerText = "Instagram";
    }

    // Centralizar logo e nome na barra
    popupLogo.style.marginRight = '10px'; // Espaço entre o logo e o nome
    popupNetworkName.style.marginLeft = '10px'; // Espaço entre o nome e a borda direita da barra

    // Adicionar a caixa de texto conforme a rede social
    const popupTextarea = document.getElementById('popup-textarea');
    if (platform === 'Facebook') {
        // Caixa de texto para o Facebook acima da imagem
        popupTextarea.style.marginBottom = '10px'; // Adiciona um espaço abaixo da caixa de texto
        popupTextarea.placeholder = "Escreva algo sobre o post...";
    } else if (platform === 'Instagram') {
        // Caixa de texto para o Instagram abaixo da imagem
        popupTextarea.style.marginBottom = '0'; // Remove qualquer margem extra
        popupTextarea.placeholder = "Escreva uma legenda para o post...";
    }

    // Mostrar o popup e o overlay
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

// Função para fechar o popup
function closePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

// Função para partilhar o conteúdo
function shareContent() {
    // Fechar o popup atual
    closePopup();

    // Mostrar o popup de sucesso
    const successPopup = document.getElementById('success-popup');
    successPopup.style.display = 'block';

    // Ocultar o popup de sucesso após 3 segundos
    setTimeout(() => {
        successPopup.style.display = 'none';
    }, 3000);
}
