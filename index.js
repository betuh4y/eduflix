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
    ]
};

// Exibe apenas a matéria selecionada
function openCategory(category) {
    const mainContent = document.querySelector("main");
    mainContent.innerHTML = `
        <button onclick="goHome()" class="back-btn">Voltar</button>
        <section class="category">
            <h2>${category}</h2>
            <div class="video-list" id="${category.toLowerCase()}-videos"></div>
        </section>
    `;

    const container = document.getElementById(`${category.toLowerCase()}-videos`);
    videos[category].forEach(video => {
        const videoItem = document.createElement("div");
        videoItem.classList.add("video-item");
        videoItem.innerHTML = `
            <p><strong>${video.title}</strong></p>
            <iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
        `;
        container.appendChild(videoItem);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Volta para a visualização principal com todas as matérias
function goHome() {
    const mainContent = document.querySelector("main");
    mainContent.innerHTML = `
        <h1>Flix</h1>
        <nav class="subject-buttons">
            <button onclick="goHome()">Início</button>
            <button onclick="openCategory('Matemática')">Matemática</button>
            <button onclick="openCategory('Física')">Física</button>
            <button onclick="openCategory('Português')">Português</button>
            <button onclick="openCategory('Inglês')">Inglês</button>
        </nav>
        
        <section class="category">
            <h2>Matemática</h2>
            <div class="video-list" id="matemática-videos"></div>
        </section>
        
        <section class="category">
            <h2>Física</h2>
            <div class="video-list" id="física-videos"></div>
        </section>
        
        <section class="category">
            <h2>Português</h2>
            <div class="video-list" id="português-videos"></div>
        </section>
        
        <section class="category">
            <h2>Inglês</h2>
            <div class="video-list" id="inglês-videos"></div>
        </section>
        
        <section class="category" id="future-category">
            <h2>Em Breve: Novas Categorias</h2>
            <p>Estamos adicionando mais matérias em breve!</p>
        </section>
    `;

    loadVideos();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Carrega vídeos normalmente
function loadVideos() {
    Object.keys(videos).forEach(category => {
        const container = document.getElementById(`${category.toLowerCase()}-videos`);
        if (container) {
            container.innerHTML = ""; // Limpa conteúdos antigos
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
