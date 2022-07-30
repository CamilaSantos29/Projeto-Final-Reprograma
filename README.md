 ##
![todas em tech](https://user-images.githubusercontent.com/88860081/181814231-6ef93baf-924a-4af4-b786-437dde7d9191.png )

# “Projeto final Reprograma – Back-end : Músicas que inspiram"

<p> Esse projeto visa demonstrar todo o conhecimento adquirido durante o curso da Reprograma com foco em Back-end (Node.js), assim como a capacidade criar uma API- CRUD com arquitetura MVC, uso de banco de dados MongoDB e acrescentando teste unitário em Jest. </p>


# 🚀 Começando

# Tema
Levando em consideração a trajetória que trilhamos, desde a decisão de nos jogar em uma área nova, processo seletivo e semanas de lutas/dedicação, essa API vai expressar em forma de música o que cada aluna da ON16 - Back-end sentiu durante o processo, e como finaliza essa etapa com a Reprograma. O tema seria "Músicas que inspiram" e que, consequentemente, resumem sentimentos do final do Reprograma. A partir disso,o projeto resulme em criar uma API que liste o “nome da música”, “cantor” e “nome da aluna reprograma que escolheu a música”, relacionando ao banco de dados MongoDB.


## Tecnologias e pacotes utilizados
   * Node: v14.17.6
   * "nodemon": "^2.0.19"
   * "bcrypt": "^5.0.1",
   * "cors": "^2.8.5",
   * "dotenv-safe": "^8.2.0",
   * "express": "^4.18.1",
   * "jest": "28.1.0",
   * "jsonwebtoken": "^8.5.1",
   * "mongoose": "^6.4.4",
   * "save": "^2.5.0",
   * "swagger-autogen": "^2.21.5",
   * "swagger-ui-express": "^4.5.0"


# ⚙️ Executando 
## 📋 Pré-requisitos

 * Caso queira baixar o código: Fazer um fork do projeto, fazer um clone para a máquina e baixar as dependências do package.json 

 * É possível também utilizar as rotas no Postman a partir do endereço: https://projetoreprograma29.herokuapp.com/ 

## Instalação

```bash
# Clonar o repositório
$ git clone https://github.com/CamilaSantos29/Projeto_Final-Reprograma-Back-end.git

# Entrar na pasta do repositório
$ cd reprograma-projetofinal

# Instalar as dependências
$ npm install

# Executar o servidor
$ npm start
```


## 📋 Ação

#### Rotas/Endpoints

| Rotas  Candidates                        |                                                               |
| ---------------------------------------  | ------------------------------------------------------------- | 
| GET/allMusics                            | Checar todas as músicas escolhidas pelas alunas Reprograma    |
| GET/:id                                  | Checar músicas por id escolhida pelas alunas Reprograma       |
| POST/createmusic                         | Cadastrar uma nova música escolhida por uma aluna Reprograma  |
| PUT/updatemusic/:id                      | Alterar dados da música escolhida por uma aluna Reprograma    |
| DELETE/deletemusic/:id                   | Excluir música escolhida por uma aluna Reprograma             |

### Test Jest

- Instalar: ``` bash npm install --save-exact jest@28.1.0 --save-dev ```
- Adicionar package.json: ``` bash "test:watch": "jest --watchAll" ```
- Rodar no terminal: ``` bash npm run test:watch ```
  

# ⚙️ Resultado final

## Swagger


  ![chrome_PmPihpTA7d](https://user-images.githubusercontent.com/88860081/181812202-10f508e8-f18a-4989-b3dc-7dc9945f3c9c.png)

## Rotas

Segue abaixo como ficou cada rota:

### GET:
![Postman_Dd7uHe3Zy6](https://user-images.githubusercontent.com/88860081/181812365-232beddb-89a6-4736-aea9-64dc609b8420.gif)
_______________________________________________________________________________________________________________________________________
### POST:
![Postman_E4wdUqjK7C](https://user-images.githubusercontent.com/88860081/181812434-26c14233-fac1-4bbe-afa1-3a7c1eaa65df.gif)
_______________________________________________________________________________________________________________________________________
### PUT:
![Postman_zkn6IOi6CP](https://user-images.githubusercontent.com/88860081/181812526-ca150651-c5f1-4083-b737-7234a5d83932.gif)
_______________________________________________________________________________________________________________________________________
### DELETE:
![Postman_wzhODtLlUs](https://user-images.githubusercontent.com/88860081/181812568-5763a888-3a31-42e0-87ca-2d42486e17de.gif)




## 📌 Autora/Contato

| [<img src="https://avatars.githubusercontent.com/u/88860081?s=400&u=62b41e4fc319244c5807bd7da1decd28e1be8d6f&v=4" width=115><br><sub>@CamilaSantos29</sub>](https://github.com/CamilaSantos29) |
| :---: |


- Linkedin  [Camila Santos](https://www.linkedin.com/in/camila-o-santos/ )
- E-mail [kmillaana29@gmail.com]
---

