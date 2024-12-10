function toLogin() {
    window.location.href = "login.html";
}

// Função para carregar as fotos na galeria
window.addEventListener("load", () => {
    const gallery = document.querySelector(".photo-gallery");
    const savedPhotos = JSON.parse(localStorage.getItem("selectedPhotos")) || [];

    if (savedPhotos.length > 0) {
        savedPhotos.forEach((photoSrc) => {
            const newPhoto = document.createElement("div");
            newPhoto.classList.add("photo-item");

            const imgElement = document.createElement("img");
            imgElement.src = photoSrc;
            imgElement.alt = "Foto";

            const anchor = document.createElement("a");
            anchor.href = "foto.html?imagem=" + photoSrc.split("/").pop();
            anchor.appendChild(imgElement);

            newPhoto.appendChild(anchor);
            gallery.appendChild(newPhoto);
        });
    } else {
        const noPhotosMessage = document.createElement("p");
        noPhotosMessage.textContent = "Nenhuma foto selecionada.";
        gallery.appendChild(noPhotosMessage);
    }
});

// Função para exibir alerta
function showAlert() {
    const alertBox = document.getElementById("selectionModeAlert");
    alertBox.classList.remove("hidden");
}

// Função para ocultar alerta
function hideAlert() {
    const alertBox = document.getElementById("selectionModeAlert");
    alertBox.classList.add("hidden");
}

// Ativar modo de seleção ao clicar em "Partilhar"
document.getElementById("partilharBtn").addEventListener("click", () => {
    showAlert();

    const galleryItems = document.querySelectorAll(".photo-item");
    galleryItems.forEach((item) => {
        item.querySelector("a").removeAttribute("href"); // Remove links

        item.addEventListener("click", (event) => {
            const photoSrc = event.target.closest(".photo-item").querySelector("img").src;
            const photoName = photoSrc.split("/").pop();

            // Redireciona para redesSociais.html com o parâmetro
            window.location.href = `redesSociais.html?foto=${photoName}`;
        });
    });
});

// Logout
document.addEventListener("DOMContentLoaded", () => {
    const logoutBtn = document.getElementById("logoutBtn");
    logoutBtn.addEventListener("click", () => {
        window.location.href = "register.html";
    });
});
