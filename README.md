
# NPC Project

![Alt text](./image.png)

## Table of Contents

- [Get Starter](#get-starter)
- [Usage](#usage)
- [Application Architecture](#application-architecture)
- [Technology](#technology)
- [Rest Apis Back-end](#rest-apis-back-end)

### Get Starter 

> run this project inside the configured container by `.devcontainer`. See [how to open this run this in your machine](https://code.visualstudio.com/docs/devcontainers/create-dev-container#_create-a-devcontainerjson-file) 

or 

> run this project using Github CodeSpace, clicking here:

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/abraaoalves/java-spring-npc)

### Usage

Open two terminals

1. first run: (this will run java spring boot in developer mode)

``` shell
  mvn spring-boot:run
```

2. second run: (this will run react vite in developer mode) 

``` shell
  cd ui && npm run dev
```

For more details about UI project, see this [README.md](./ui/README.md)

---

### Application Architecture 



> Spring Boot exports REST Apis using Spring Web MVC & interactsrations & finder methods with Spring D.

> React Client sends HTTP Requests and retrieves HTTP Responses using Axios. React Router is used for navigating to pages.

### Technology

- Java 17 / 11 / 8
- Maven 3.9.4
- Spring Boot 3 (with Spring Web MVC, Spring Data JPA)
- NodeJS v20.6.1
- Npm 9.8.1
- React 18, Typescript 5, Vite 4
- Postgres 16

### Rest Apis Back-end

These are APIs that Spring Boot App will export:

| Methods |      Urls      | Actions                |
|:--------|:---------------|:-----------------------|
| POST    | /api/users     | create a new User      |
| GET     | /api/users     | paginated users        |
| GET     | /api/users/:id | retrieve a user by :id |
| PUT     | /api/users/:id | update a user by :id   |
| DELETE  | /api/users/:id | DELETE a user by :id   |


