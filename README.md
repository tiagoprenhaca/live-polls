# Live Polls

### About

This project **Live Polls** is an live polls app. This project was taught at the **Rocketseat** event. I took the liberty of adding the front-end part on my own, thus making the app fully functional.

### 🛠 Technologies

<p align="center">
This are the tech stack of this project:

<p align="center">
    <a href="https://react.dev" target="_blank">
      <img alt="Icon React" src="https://github.com/tiagoprenhaca/tiagoprenhaca/blob/main/assets/img/react.png" width="50" />
    </a>
    <a href="https://nodejs.org" target="_blank">
      <img alt="Icon NodeJS" src="https://github.com/tiagoprenhaca/tiagoprenhaca/blob/main/assets/img/nodejs.png" width="50" />
    </a>
    <a href="https://www.docker.com" target="_blank">
      <img alt="Icon Docker" src="https://github.com/tiagoprenhaca/tiagoprenhaca/blob/main/assets/img/docker.png" width="50" />
    </a>
    <a href="https://www.typescriptlang.org" target="_blank">
      <img alt="Icon TypeScript" src="https://github.com/tiagoprenhaca/tiagoprenhaca/blob/main/assets/img/typescript.png" width="50" />
    </a>
    <a href="https://tailwindcss.com" target="_blank">
      <img alt="Icon TailwindCSS" src="https://github.com/tiagoprenhaca/tiagoprenhaca/blob/main/assets/img/tailwindcss.png" width="50" />
    </a>
    <a href="https://git-scm.com" target="_blank">
      <img alt="Icon Git" src="https://github.com/tiagoprenhaca/tiagoprenhaca/blob/main/assets/img/git.png" width="50" />
    </a>
</p>

### 📎 How to use

##### 👉 Requirements:
- Editor:
- [Node.Js](https://nodejs.org/en/);
- [Docker](https://docs.docker.com/get-docker/);

##### 👉 After meeting the requirements:

```bash

#->In the folder you cloned you should install the dependencies for the backend and frontend files
$ npm install

-- Backend files
# Update the .docker-compose.yml file with your own credentials

# Create the container with docker
$ docker compose up -d

# Update the .env file with the credentials you filled in the .docker-compose.yml file
DATABASE_URL="postgresql://[user]:[password]@localhost:5432/[database]?schema=public"

-- General
# You should reach each folder to start the servers, you can start them with this command
$ npm run dev

# Access:
  - the server will start at: http://localhost:3333
  - the front-end will start at: http://localhost:3000
```
