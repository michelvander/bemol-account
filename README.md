# bemol-account

Aplicação para criação de conta digital Bemol

## Installation

Após clonar o repositório, realizar o download e instalação do NodeJS versão [14.17.0](https://nodejs.org/dist/v14.17.0/). O sistema poderá ser instalado tanto no Windows quanto Linux.

## Back-end

Abrir o CMD, entrar na pasta "./backend" e executar o seguinte comando:

```bash
npm i
```

Após instalação dos pacotes, faz-se necessário criar a base de dados, que está em SQLite, para facilitar o uso em ambiente de teste. Para isso, ainda na pasta "./backend", executar:

```bash
npx prisma db push
```

Um arquivo do banco de dados SQLite será criado na pasta "./backend/prisma/dev.db".

E, ao fim, iniciar o back-end com o seguinte comando:

```bash
npm run dev
```

O back-end iniciará em: [localhost:5000](http://localhost:5000)

## Front-end

Abrir outra janela do CMD, entrar na pasta "./frontend" e executar o seguinte comando para instalação de pacotes:

```bash
npm i
```

Feito isso, iniciar o front-end com o comando:

```bash
npm run start
```

A aplicação poderá ser acessada em: [localhost:3000](http://localhost:3000/)

## Outras informações

Após cadastrar os usuários durante os testes, é possível buscá-los no banco de dados, chamar a rota [http://localhost:5000/user/getall](http://localhost:5000/user/getall) utilizando o método GET.

As respostas para as questões do desafio estão no arquivo "questoes.txt", na raiz do repositório.