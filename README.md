# 🎮 Sistema de Gerenciamento de Personagens do Mario Bros

Este é um projeto de aplicação web do tipo CRUD (Criar, Ler, Atualizar e Excluir) desenvolvido como uma Single Page Application (SPA) utilizando **React**, **Bootstrap** e **LocalStorage**. O objetivo é gerenciar uma lista de personagens do universo Mario Bros de forma simples e intuitiva.

---

## 🧩 Objetivo

Desenvolver uma aplicação web que permita ao usuário cadastrar, visualizar, editar e remover personagens do Mario Bros. A persistência dos dados é feita utilizando o `LocalStorage` do navegador, e a interface é responsiva e construída com React e Bootstrap.

---

## ✅ Funcionalidades (CRUD)

- **Criar (Create):** Adicionar novos personagens com todos os campos obrigatórios por meio de um formulário.
- **Ler (Read):** Exibir todos os personagens cadastrados em uma tabela estilizada com Bootstrap.
- **Atualizar (Update):** Editar as informações de personagens já cadastrados.
- **Excluir (Delete):** Remover um personagem da lista com confirmação prévia.

---

## 📄 Modelo de Dados

Cada personagem do Mario Bros possui os seguintes campos:

| Campo           | Tipo     | Descrição                              |
|----------------|----------|------------------------------------------|
| `id`           | number   | Identificador único                     |
| `URL`          | string   | Imagem do personagem                    |
| `nome`         | string   | Nome do personagem                      |
| `raca`         | string   | Humano, Koopa, Yoshi                    |
| `tipo`         | string   | Herói, vilão, aliado, etc.              |
| `descricao`    | string   | Desecrição do personagem                | 

---

## 🛠️ Tecnologias Utilizadas

- **React** (v17 ou superior) com Hooks e Componentes Funcionais
- **Bootstrap** (v5 ou superior) para layout e responsividade
- **LocalStorage** para persistência de dados (JSON)
- **npm** para gerenciamento de dependências
- **Git e GitHub** para versionamento

---

## 📁 Estrutura de Pastas

```bash
src/
├── components/         # Componentes reutilizáveis (Tabela, Formulário, Modal, etc)
├── pages/              # Páginas principais da aplicação
├── services/           # Funções utilitárias (ex: manipulação do LocalStorage)
├── App.js              # Componente raiz da aplicação
└── index.js            # Ponto de entrada da aplicação
