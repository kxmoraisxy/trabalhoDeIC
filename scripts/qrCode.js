function shareQRCode() {
    // Aqui você pode definir a lógica para partilhar o QRCode
    // Por exemplo, criar um link de partilha para o QRCode, ou ativar um comportamento específico de partilha

    const qrCodeImageUrl = 'path/to/your/qrcode-image.png'; // URL do QRCode para partilhar
    const shareData = {
        title: 'Momento Gallery - QRCode',
        text: 'Confira o QRCode da Momento Gallery!',
        url: qrCodeImageUrl
    };

    if (navigator.share) {
        navigator.share(shareData)
            .then(() => console.log('QR Code compartilhado com sucesso!'))
            .catch((error) => console.log('Erro ao partilhar: ', error));
    } else {
        alert('O seu navegador não suporta partilha.');
    }
}
