# Back-end Challenge 🏅 2021 - Space Flight News
  
## Desafio Back-end
Construir uma API Restful com as melhores práticas de desenvolvimento, baseada na API [Space Flight News](https://api.spaceflightnewsapi.net/v3/documentation).

**Obrigatório 1** - Você deverá desenvolver as seguintes rotas:

- `[GET]/: ` Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News"
- `[GET]/articles/:`   Listar todos os artigos da base de dados, utilizar o sistema de paginação para não sobrecarregar a REQUEST
- `[GET]/articles/{id}:` Obter a informação somente de um artigo
- `[POST]/articles/:` Adicionar um novo artigo
- `[PUT]/articles/{id}:` Atualizar um artigo baseado no `id`
- `[DELETE]/articles/{id}:` Remover um artigo baseado no `id`

**Obrigatório 2** - Para alimentar o seu banco de dados você deve criar um script para armazenar os dados de todos os artigos na Space Flight News API. 

**Obrigatório 3** - Além disso você precisa desenvolver um CRON para ser executado diariamente às 9h e armazenar em seu os novos artigos ao seu banco de dados. (Para essa tarefa você poderá alterar o seu modelo de dados) 

**Diferencial 1** Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;

**Diferencial 2** Configurar um sistema de alerta se houver algum falha durante a sincronização dos artigos;

**Diferencial 3** Descrever a documentação da API utilizando o conceito de Open API 3.0;

**Diferencial 4** Escrever Unit Tests para os endpoints da API;

>  This is a challenge by [Coodesh](https://coodesh.com/)

## Build Setup

Install [Docker Compose](https://docs.docker.com/compose/install/).

```bash
# Create container with MySQL
$ docker-compose up -d

# Create database structure
$ node ace migration:run

# install dependencies
$ npm install

# server with changes watcher
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start