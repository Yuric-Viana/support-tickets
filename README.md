# 🎫 API - Gerenciamento de Tickets de Suporte

Este projeto foi desenvolvido como parte prática do módulo de **Node.js** da **Formação Full Stack da Rocketseat**.  
O objetivo é consolidar os conhecimentos sobre criação de APIs utilizando Node.js puro, sem frameworks como Express.

---

## 🚀 Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- HTTP nativo
- `fs/promises` para persistência de dados em arquivos
- JavaScript moderno (ESM, import/export)
- JSON para comunicação de dados

---

## 📚 O que essa API faz?

A API permite **criar**, **listar**, **atualizar** e **deletar** tickets de suporte técnico. Os dados são armazenados **em memória** e salvos em um arquivo `db.json` para persistência local.

### Funcionalidades:

- `POST /tickets` → Criar um novo ticket
- `GET /tickets` → Listar todos os tickets
- `PUT /tickets/:id` → Atualizar um ticket existente
- `DELETE /tickets/:id` → Remover um ticket

---

## 🧠 Conceitos aplicados

- Criação de servidor HTTP sem bibliotecas externas
- Manipulação de rotas e métodos HTTP manualmente
- Criação de banco de dados em memória com salvamento em arquivo JSON
- Manipulação assíncrona de arquivos com `fs/promises`
- Leitura e escrita de dados com `JSON.parse` e `JSON.stringify`
