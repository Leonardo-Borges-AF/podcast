Aqui está um exemplo de `README.md` para o seu projeto:

```markdown
# 🎙️ Podcast API

Este projeto é uma API simples em **Node.js (HTTP nativo)** para listar e filtrar episódios de podcasts.  
A API retorna informações sobre episódios, incluindo nome do podcast, título, link do vídeo e categorias.

---

## 🚀 Funcionalidades

- Listar todos os episódios disponíveis.
- Filtrar episódios de acordo com o `podcastName` ou `categories`.

---

## 📂 Estrutura do Projeto
```

.
├── controllers/
│ └── podcast-controller.ts
├── routes/
│ └── routes.ts
├── utils/
│ └── httpMethod.ts
├── app.ts
└── data/
└── podcasts.json

````

---

## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/) - Servidor HTTP nativo
- TypeScript

---

## 📡 Rotas da API

### 🔹 Listar todos os episódios
**GET** `/episodes`

**Exemplo de resposta:**
```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow #319",
    "videoId": "pQSuQmUfS30&pp",
    "link": "https://www.youtube.com",
    "categories": ["saude", "esporte", "academia"]
  },
  {
    "podcastName": "venus",
    "episode": "BRUNO PERINI - Venus #311",
    "videoId": "kYq3b5y7tXo",
    "categories": ["financas", "investimentos", "empreendedorismo"]
  }
]
````

---

### 🔹 Filtrar episódios

**GET** `/episode?podcastName=flow`
**GET** `/episode?category=politica`

**Exemplo de resposta:**

```json
[
  {
    "podcastName": "flow",
    "episode": "LUIZ INÁCIO LULA DA SILVA - Flow #315",
    "videoId": "0fX8b1k1bXw",
    "categories": ["politica", "entrevista", "conversa"]
  },
  {
    "podcastName": "flow",
    "episode": "ALEXANDRE GARCIA - Flow #318",
    "videoId": "pQSuQmUfS30",
    "categories": ["politica", "entrevista", "conversa"]
  }
]
```

---

## ▶️ Como rodar o projeto

1. Clone este repositório:

   ```bash
   git clone https://github.com/seuusuario/podcast-api.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Rode o servidor:

   ```bash
   npm run dev
   ```

4. Acesse a API:

   - `http://localhost:3000/episodes`
   - `http://localhost:3000/episode?podcastName=flow`
   - `http://localhost:3000/episode?category=politica`

---

## 📌 Exemplos de dados

O projeto já vem com alguns episódios de exemplo:

- Flow Podcast
- Venus Podcast
- Test Podcast

Com categorias como:

- 🎭 Humor
- 🏋️ Saúde & Esporte
- 💰 Finanças
- 🗳️ Política
- 🎤 Entrevistas

---

## 📄 Licença

Este projeto está sob a licença MIT.
