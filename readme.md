Create package.json

```markdown
$ npm init -y
```

Install Library

```markdown
$ npm install express
```
```markdown
$ npm i -D nodemon
```
```markdown
$ npm install bcrypt
```
```markdown
$ npm i jsonwebtoken
```

Tambahkan kode pada package.json

```javascript
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
}
```

---

Buat server di app.js

```javascript
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running on port : " + PORT);
});
```

Jalankan kode

```markdown
$ npm start
$ npm run dev
```

---

Install Sequelize

```markdown
Instal Sequelize :
$ npm install --save sequelize

Installing CLI :
$ npm install --save-dev sequelize-cli

Initialisasi CLI :
$ npx sequelize-cli init
```

Lakukan koneksi ke database

```javascript
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  username: "root",
  password: "root",
  database: "todolist_db",
  port: 3006,
});
```

Testing koneksi

```javascript
try {
  await db.authenticate();
  console.log("Connection has been established succesfully.");

  console.log("All models were synchronized succesfully.");
} catch (error) {
  console.error("Unable to connect to the database", error);
}
```

`$ npx sequelize-cli db:migrate`

`$ npx sequelize-cli seed:generate --name user`