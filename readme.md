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

Pada package.json bagian script tambahkan:

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

Membuat server pada file app.js, tulis kode berikut

```javascript
const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running on port : " + PORT);
});
```

Untuk memulai menjalankan kode, gunakan

```markdown
$ npm start
$ npm run dev
```

Server berhasil dibuat.

---

Installation Sequelize dan drive database.

```markdown
Instal Sequelize :
$ npm install --save sequelize

Installing CLI :
$ npm install --save-dev sequelize-cli

Initialisasi CLI :
$ npx sequelize-cli init

Installing drive database :
$ npm isntall --save mysql
```

Setting untuk melakukan koneksi pada database.

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

Melakukan testing terhadap koneksi.

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