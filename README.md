
# Application Architecture 

![Alt text](./image.png)

> Spring Boot exports REST Apis using Spring Web MVC & interactsrations & finder methods with Spring D.

> React Client sends HTTP Requests and retrieves HTTP Responses using Axios. React Router is used for navigating to pages.

## Spring Boot Rest Apis Back-end
### Overview

These are APIs that Spring Boot App will export:

| Methods |      Urls      | Actions                |
|:--------|:---------------|:-----------------------|
| POST    | /api/users     | create a new User      |
| GET     | /api/users     | retrieve all users     |
| GET     | /api/users/:id | retrieve a user by :id |


## Technology

- Java 17 / 11 / 8
- Spring Boot 3 (with Spring Web MVC, Spring Data JPA)
- Maven
- React 18, Typescript 5, Vite 4
- Postgres 16
