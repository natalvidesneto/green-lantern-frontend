// URL base da API
const API_URL = import.meta.env.VITE_API_URL;

// Elementos do DOM
const gridContainer = document.getElementById('lanternas-grid');

// Estado da aplicação
let lanternas = [];

/**
 * Busca todos os Lanternas Verdes da API
 */
async function fetchLanternas() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const data = await response.json();

        lanternas = data;
        renderCards(data);
    } catch (error) {
        console.error('Erro ao buscar Lanternas Verdes:', error);

        gridContainer.innerHTML = `
            <div class="error-message">
                <p>⚠️ Não foi possível carregar os Lanternas Verdes.</p>
                <p>Verifique se a API está disponível.</p>
            </div>
        `;
    }
}

/**
 * Renderiza os cards na grid
 */
function renderCards(lista) {
    if (!lista || lista.length === 0) {
        gridContainer.innerHTML =
            '<div class="error-message">Nenhum Lanterna Verde encontrado.</div>';

        return;
    }

    gridContainer.innerHTML = lista.map(lanterna => `
        <div
            class="card"
            data-id="${lanterna.id}"
            onclick="abrirDetalhes(${lanterna.id})"
        >
            <img
                class="card-image"
                src="${lanterna.foto_perfil}"
                alt="Foto de perfil de ${lanterna.nome}"
                loading="lazy"
                onerror="this.src='https://via.placeholder.com/160/003300/00ff00?text=LV'"
            >

            <h3>${lanterna.nome}</h3>

            <p class="bio-preview">
                ${lanterna.bio}
            </p>
        </div>
    `).join('');
}

/**
 * Abre o modal com os detalhes do Lanterna
 */
async function abrirDetalhes(id) {
    try {
        const response = await fetch(`${API_URL}/${id}`);

        if (!response.ok) {
            throw new Error(`Erro HTTP: ${response.status}`);
        }

        const lanterna = await response.json();

        criarModal(lanterna);
    } catch (error) {
        console.error('Erro ao buscar detalhes:', error);
    }
}

/**
 * Cria e exibe o modal
 */
function criarModal(lanterna) {
    const modalExistente = document.querySelector('.modal-overlay');

    if (modalExistente) {
        modalExistente.remove();
    }

    const bioFormatada = lanterna.bio
        .split('\n\n')
        .map(paragrafo => `<p>${paragrafo}</p>`)
        .join('');

    const modal = document.createElement('div');

    modal.className = 'modal-overlay active';

    modal.innerHTML = `
        <div class="modal-content" onclick="event.stopPropagation()">

            <button
                class="modal-close"
                onclick="fecharModal()"
                aria-label="Fechar"
            >
                &times;
            </button>

            <div class="modal-header">

                <img
                    src="${lanterna.foto_perfil}"
                    alt="Foto de perfil de ${lanterna.nome}"
                    onerror="this.src='https://via.placeholder.com/100/003300/00ff00?text=LV'"
                >

                <h2>${lanterna.nome}</h2>

            </div>

            <div class="modal-bio">
                ${bioFormatada}
            </div>

        </div>
    `;

    modal.addEventListener('click', fecharModal);

    document.addEventListener('keydown', handleEsc);

    document.body.appendChild(modal);

    document.body.style.overflow = 'hidden';
}

/**
 * Fecha o modal
 */
function fecharModal() {
    const modal = document.querySelector('.modal-overlay');

    if (modal) {
        modal.remove();
    }

    document.body.style.overflow = '';

    document.removeEventListener('keydown', handleEsc);
}

/**
 * Fecha o modal com ESC
 */
function handleEsc(event) {
    if (event.key === 'Escape') {
        fecharModal();
    }
}

window.abrirDetalhes = abrirDetalhes;
window.fecharModal = fecharModal;

document.addEventListener('DOMContentLoaded', fetchLanternas);