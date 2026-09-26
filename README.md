
# Green Lantern Frontend

Interface web interativa e responsiva construída para consumir e exibir os dados dos membros da Tropa dos Lanternas Verdes.

## 🚀 Demonstração

- **API Consumida:** [Green Lantern API](https://green-lantern-api.onrender.com/lanternas-verdes)
- **Repositório da API:** [natalvidesneto/green-lantern-api](https://github.com/natalvidesneto/green-lantern-api)

---

## 🛠️ Tecnologias Utilizadas

- **[Vite](https://vitejs.dev/):** Build tool rápida para desenvolvimento frontend.
- **HTML5 & CSS3:** Estruturação semântica e estilização customizada (com CSS Variables, Grid e Animações).
- **JavaScript (ES6+):** Consumo assíncrono de API via `fetch` e manipulação dinâmica do DOM.

---

## ✨ Funcionalidades

- 📱 **Design Responsivo:** Adaptado para dispositivos móveis e desktops.
- 🎨 **Tema Neon/Glassmorphism:** Estilização temática inspirada no universo do Lanterna Verde.
- 🃏 **Cards Dinâmicos:** Exibição em grid dos heróis com imagem de perfil, nome e resumo da biografia.
- 🔍 **Modal de Detalhes:** Visualização completa da biografia ao clicar no card de qualquer Lanterna Verde.
- ⚡ **Tratamento de Erros e Loading:** Feedback visual durante o carregamento dos dados ou em falhas de conexão.

---

## 📁 Estrutura de Pastas

```text
frontend/
├── public/          # Favicons e manifest
├── src/
│   ├── css/
│   │   └── global.css   # Estilos globais e variáveis
│   └── js/
│       └── main.js      # Consumo da API e lógica da interface
├── .env             # Variáveis de ambiente
├── index.html       # Estrutura HTML principal
├── package.json     # Dependências e scripts
└── vite.config.js   # Configurações do Vite

```

---

## ⚙️ Como Executar o Projeto

### Pré-requisitos

Antes de começar, você precisará ter instalado em sua máquina:

* [Node.js](https://nodejs.org/?utm_source=gemini) (versão 18 ou superior)
* Gerenciador de pacotes `npm` ou `yarn`

### Passo a passo

1. **Clone o repositório:**
```bash
git clone [https://github.com/natalvidesneto/green-lantern-api.git](https://github.com/natalvidesneto/green-lantern-api.git)

```


2. **Navegue até a pasta do frontend:**
```bash
cd green-lantern-api/frontend

```


3. **Instale as dependências:**
```bash
npm install

```


4. **Configure a variável de ambiente:**
Crie um arquivo `.env` na raiz da pasta `frontend` e defina a URL da API:
```env
VITE_API_URL=https://green-lantern-api.onrender.com/lanternas-verdes

```


5. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev
```


6. Abra o navegador e acesse a URL indicada no terminal (geralmente `http://localhost:5173`).

---

## ✒️ Autor

Desenvolvido por **Natalvides Neto**.