# Loja Virtual

## Descrição do Projeto

### Back-end

API REST para CRUD de produtos, feito em Java. Foram usadas as seguintes tecnologias:

* Maven
* Spring Boot
* Swagger
* Lombok
* H2 (Banco em Memória)
* Hibernate

É possível acessar a documentação da API (Swagger-ui) através do link http://localhost:8080/swagger-ui.html quando a aplicação está em execução. Foram implementados testes básicos de integração.

### Front-end

Aplicação cliente para consumir o CRUD de produtos. Foram usadas as seguintes tecnologias: 

* Webpack (personalizado)
* Angular 6
* Materialize-CSS
* SASS
* Swagger (cliente)
* Prettier
* Yarn

## Configuração e Execução

### Docker

Foi disponibilizado um arquivo **docker-compose.yml** contendo os conteiners necessários à execução, já configurados. Para executar a aplicação usando docker, basta executar o compose.
> docker-compose up -d

O front-end será executado na porta 3000 (http://localhost:3000) e o back-end será executado na porta 8080 (http://localhost:8080).

### Manual

#### Front-end

Na pasta front, digite:
> yarn install

> yarn start

O front-end será executado em http://localhost:3000.

#### Back-end

Na pasta back, digite:
>mvn spring-boot:run

O back-end será executado em http://localhost:8080.