
# Imobo - Desafio Backend

## Apresentação

Este repositório se trata de uma API REST desenvolvida utilizando Node.js. Também utilizamos Typescript e TypeORM no desenvolvimento da mesma. 
Se trata de um CRUD de restaurantes e pratos. Algumas funcionalidades ainda não estão desenvolvidas, e seu desafio será completá-las!

## Rodando o projeto
### Requisitos básicos
* Git
* Node.js
* npm ou yarn
* Um banco de dados PostgreSQL

### Configuração do ambiente
* Fazer um fork do repositório para sua conta pessoal do Github.
* Clonar o repositório
* Criar um arquivo .env na raiz e colar o conteúdo do arquivo .env.example
* Preencher as informações de conexão do banco de dados PostgreSQL (host, port, user, pass, dbname) - *Observação - Criar um banco de dados vazio para rodar o projeto*
* Não é necessário mexer nos outros paths dentro do .env
* Executar `yarn install ` ou `npm install` para instalar as dependências do projeto.
* Executar `yarn typeorm migration:run` ou `npm run typeorm migration:run` para criar as tabelas no banco de dados.
* Executar `yarn dev` para rodar o projeto.

### Estrutura do Projeto
Este repositório foi organizado da seguinte forma, utilizando alguns conceitos de clean architecture e SOLID patterns:

📁 src - 
|_ app.ts - inicialização do express
|_ index.ts - ponto de entrada do projeto
|_ 📁 dtos - interfaces de definição de objetos de requisições
|_ 📁 entities - interfaces de definição das entidades do projeto (restaurantes e pratos, neste caso)
|_ 📁 repositories - interfaces de definição dos repositórios das entidades (classes responsáveis por controlar todas as atividades 		   de determinada entidade no banco de dados)
|_ 📁 routes - definição das rotas do projeto
|_ 📁 useCases - definição e execução dos casos de uso do projeto
|_ |_ **Controller.ts - controller de uma determinada rota
|_ |_ **UseCase.ts - execução de determinado caso de uso
|_ 📁 infra - relacionada a bibliotecas externas
|_ |_ 📁 typeorm - todas as implementações do ORM no projeto
|_ |_ |_ 📁 entities - implementações das entidades dentro do ORM
|_ |_ |_ 📁 migrations
|_ |_ |_ 📁 repositories - implementações dos repositórios do ORM
|_ |_ |_ index.ts - arquivo de conexão do ORM

#### Fluxo de uma rota
route -> controller -> useCase -> repository -> useCase -> controller

Temos quatro rotas definidas no projeto:
* Criar um restaurante (com pratos)
* Adicionar um prato a um restaurante existente
* Listar restaurantes
* Listar pratos (todos ou por id do restaurante)

Cada rota leva a um controller, dentro de um useCase na pasta useCases. 

## Desafio

Antes de começar, neste link você pode encontrar uma coleção de requisições do Postman com os endpoints já implementados:
https://www.getpostman.com/collections/b2bb0e2ca445b9cdcbdb

1. No repositório de restaurantes `infra/typeorm/repositories/RestaurantsRepository.ts`, no método list, implementar a listagem por meio do ORM. o repositório do model pode ser acessado por meio de `this.repository`.
2. Criação de um prato
	2.1. No controller de criação de um prato `useCases/createDish/CreateDishController.ts`, pegar as informações da requisição.
	2.2. No repositório de pratos `infra/typeorm/repositories/DishesRepository.ts`, no método create, implementar a criação de um prato e retornar a instância criada.
3. Deleção de um restaurante
	3.1. No arquivo de rotas de restaurante `src/routes/restaurant.ts` implementar uma rota DELETE apontando para o controller `DeleteRestaurantController.ts`. O parâmetro `restaurantId` deve ser definido dentro dos parâmetros de rota (url)
	3.2. No controller de deleção de restaurante `useCases/deleteRestaurant/DeleteRestaurantController.ts` obter o restaurantId dos parâmetros de rota (atualmente está definido como string vazia)
	3.3. No repositório de restaurantes `infra/typeorm/repositories/RestaurantsRepository.ts`, no método delete, implementar a deleção de um restaurante no banco de dados por meio do ORM.

## Execução e Avaliação
Ao terminar o desafio, enviar link do repositório contendo as alterações. Sinta-se livre para pesquisar nas documentações do TypeORM para executar as atividades. Assim como o desafio completo corretamente, o esforço também será avaliado. Boa sorte!
	