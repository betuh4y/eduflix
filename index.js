const videos = {
    Matemática: [
        { title: "Aula 1: Adição", url: "https://www.youtube.com/embed/HjyCT6K5O1I" },
        { title: "Aula 2: Subtração", url: "https://www.youtube.com/embed/fy3CBP0lu8M" },
        { title: "Aula 3: Geometria", url: "https://www.youtube.com/embed/BetgRvNQEC0" },
        { title: "Aula 4: Quiz Matemático", url: "https://www.youtube.com/embed/FZPddOfFmhQ" }
    ],
    Física: [
        { title: "Aula 1: Leis de Newton", url: "https://www.youtube.com/embed/dU14qCv5AuI" },
        { title: "Aula 2: Cinemática", url: "https://www.youtube.com/embed/kbaN17Z41ZM" },
        { title: "Aula 3: Termodinâmica", url: "https://www.youtube.com/embed/U_2AJc1mcas" }
    ],
    Português: [
        { title: "Aula 1: Gramática Básica", url: "https://www.youtube.com/embed/V2-OBq2YVQ4" },
        { title: "Aula 2: Interpretação de Texto", url: "https://www.youtube.com/embed/OxTNN-IKcEQ" },
        { title: "Aula 3: Redação - Dicas e Estrutura", url: "https://www.youtube.com/embed/kx_r8NXD6GA" }
    ],
    Inglês: [
        { title: "Aula 1: Verbos Básicos", url: "https://www.youtube.com/embed/bSeZlT7Og8I" },
        { title: "Aula 2: Tempos Verbais", url: "https://www.youtube.com/embed/6z57Ug01b_8" },
        { title: "Aula 3: Expressões Comuns", url: "https://www.youtube.com/embed/PJT6vROO3eM" }
    ],
    História: [  // Categoria História com seus vídeos
        { title: "Aula 1: Antiguidade", url: "https://www.youtube.com/embed/q7E4XrfGGnE" },
        { title: "Aula 2: Idade Média", url: "https://www.youtube.com/embed/K8zw6r-sw7o" },
        { title: "Aula 3: História Moderna", url: "https://www.youtube.com/embed/Q4E3vPl-KkY" }
    ]
};

function openCategory(category) {
    // Esconde todas as seções
    document.querySelectorAll(".category").forEach(section => {
        section.style.display = "none";
    });

    // Mostra apenas a categoria selecionada
    const selectedSection = document.querySelector(`#${category.toLowerCase()}-section`);
    if (selectedSection) {
        selectedSection.style.display = "block";
    }
}

function goHome() {
    document.querySelectorAll(".category").forEach(section => {
        section.style.display = "block";  // Mostra todas as categorias
    });
}

function loadVideos() {
    Object.keys(videos).forEach(category => {
        const container = document.getElementById(`${category.toLowerCase()}-videos`);
        if (container) {
            container.innerHTML = "";  // Limpa o conteúdo antigo
            videos[category].forEach(video => {
                const videoItem = document.createElement("div");
                videoItem.classList.add("video-item");
                videoItem.innerHTML = `
                    <p><strong>${video.title}</strong></p>
                    <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
                `;
                container.appendChild(videoItem);
            });
        }
    });
}

document.addEventListener("DOMContentLoaded", loadVideos);
