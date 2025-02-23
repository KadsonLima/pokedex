# Pokémon Search App

Um aplicativo simples para buscar informações sobre Pokémons utilizando React, Chakra UI e a API do PokéAPI.

## Descrição

Este projeto permite que os usuários busquem Pokémons pelo nome e especifiquem a quantidade de Pokémons a serem retornados. A interface é construída com Chakra UI, oferecendo uma experiência de usuário intuitiva e responsiva.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construir interfaces de usuário.
- **Chakra UI**: Biblioteca de componentes React para estilização e design.
- **Axios**: Cliente HTTP para fazer requisições à API.
- **PokéAPI**: API pública que fornece informações sobre Pokémons.

## Funcionalidades

- Busca de Pokémons pelo nome.
- Especificação da quantidade de Pokémons a serem retornados.
- Exibição de informações sobre cada Tipo de Pokémon.
- Feedback visual para carregamento e erros.

## Como Executar o Projeto

### Pré-requisitos

- Node.js (>= 14.x)
- npm ou yarn

### Passos

1. Clone o repositório:

   ```bash
   git clone https://github.com/KadsonLima/pokedex.git
   cd pokemon-search-app

2. Crie um arquivo .env na raiz do projeto com a seguinte variável de ambiente:

env

VITE_SERVER_API=https://pokeapi.co/api/v2


Instale as dependências:

bash

npm install
# ou
yarn install
Inicie o servidor de desenvolvimento:

bash

npm run dev
# ou
yarn dev

Estrutura do Projeto


  ```bash
  ├── src/
  │   ├── components/          # Componentes reutilizáveis
  │   ├── hooks/               # Hooks personalizados
  │   ├── interfaces/          # Interfaces TypeScript
  │   ├── assets/              # Imagens e outros ativos
  │   ├── styles/              # Estilos globais
  │   ├── App.tsx              # Componente principal do aplicativo
  │   └── index.tsx            # Ponto de entrada do aplicativo
  ├── public/
  │   ├── index.html           # HTML inicial
  ├── package.json             # Dependências e scripts do projeto
  └── README.md                # Documentação do projeto




Contato
Para dúvidas ou sugestões, entre em contato:

Nome: Kadson Kaio de Lima Dantas
E-mail: kadson-kaio@hotmail.com

### Como Usar o `README.md`

1. **Clone o Repositório:** Certifique-se de substituir `https://github.com/KadsonLima/pokedex.git` pelo URL real do seu repositório no GitHub.
2. **Contatos e Licença:** Substitua as informações de contato e a licença conforme necessário.
3. **Dependências:** Verifique se todas as dependências estão corretamente listadas no seu `package.json`.

Depois de ajustar as informações, você pode salvar o arquivo como `README.md` na raiz do seu pr