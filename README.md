# API de Tarefas (Todo List)

Esta é uma API REST desenvolvida em Node.js com o framework Fastify para gerenciar uma lista de tarefas (Todo List). O projeto utiliza um banco de dados PostgreSQL para armazenar os dados.

## Funcionalidades

- Visualizar todas as tarefas (GET `/todos`)
- Criar uma nova tarefa (POST `/todos`)
- Deletar uma tarefa (DELETE `/todos`)
- Alterar o status de uma tarefa (PUT `/todos`) **(Em desenvolvimento)**

## Pré-requisitos

- Node.js instalado
- PostgreSQL instalado e configurado

## Instalação e Execução Local

1. Clone o repositório:

```bash
git clone https://github.com/0thigs/todo-api.git
```

2. Navegue até o diretório do projeto:

```bash
cd api-todo
```

3. Instale as dependências:

```bash
npm install
```

4. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis de ambiente do banco de dados:

```
DATABASE_URL=postgres://usuario:senha@host:porta/nome_do_banco
```

5. Crie a tabela `todos` no seu banco de dados PostgreSQL:

```sql
CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    todo TEXT NOT NULL,
    done BOOLEAN NOT NULL DEFAULT false
);
```

6. Inicie o servidor em modo de desenvolvimento:

```bash
npm run dev
```

O servidor irá iniciar na porta `3333` (ou na porta especificada pela variável de ambiente `PORT`).

## Endpoints

- `GET /todos`: Retorna todas as tarefas
- `POST /todos`: Cria uma nova tarefa
  - Corpo da requisição: `{ "todo": "Tarefa exemplo", "done": false }`
- `DELETE /todos`: Deleta uma tarefa
  - Corpo da requisição: `{ "id": 1 }`
- `PUT /todos`: Altera o status de uma tarefa _(Em desenvolvimento)_

## Tecnologias Utilizadas

- Node.js
- Fastify
- PostgreSQL
- Postgres (With NEON SERVERLESS)

## Considerações Finais

Este projeto está em desenvolvimento e algumas funcionalidades ainda não estão implementadas, como a atualização do status de uma tarefa (PUT `/todos`).

Além disso, **AINDA** não foi feito o deploy da aplicação, portanto, ela só pode ser executada localmente no momento.

#### Assim que for feito a atualização do projeto colocarei os endpoints em uso!

Se você tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato ou abrir uma issue no repositório.
