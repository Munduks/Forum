/* eslint-disable consistent-return */
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 8080;
const URI = process.env.DB_CONNECTION_STRING;
const dbName = process.env.DB_NAME;

// console.log(port, URI, dbName);

const app = express();
app.use(cors());
app.use(express.json()); // aplikacija moka apdoroti JSON formatu ateinancius requestu

const client = new MongoClient(URI);

app.post('/register', async (req, res) => {
  try {
    const con = await client.connect();
    const { email } = req.body;

    // Patikriname, ar vartotojas jau yra duomenų bazėje
    const existingUser = await con
      .db(dbName)
      .collection('users')
      .findOne({ email });

    if (existingUser) {
      // Jei vartotojas jau yra, grąžiname klaidos pranešimą
      res.status(400).json({ message: 'Toks vartotojas jau yra.' });
      return;
    }

    // Jei vartotojo nėra, registruojame naują vartotoją
    const user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    };
    const data = await con.db(dbName).collection('users').insertOne(user);
    res.status(200).json(data);
    await con.close();
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/register', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db(dbName).collection('users').find().toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post('/login', async (req, res) => {
  try {
    const con = await client.connect();
    const { email, password } = req.body;

    // Patikriname, ar vartotojas su nurodytu el. paštu yra duomenų bazėje
    const user = await con.db(dbName).collection('users').findOne({ email });

    if (!user || user.password !== password) {
      // Jei vartotojas nerastas arba nesutampa slaptažodis, grąžiname klaidos pranešimą
      res.status(401).json({ message: 'Klaidingai suvesti duomenys.' });
      return;
    }

    // Jei vartotojas rastas ir slaptaž teisingas, perduodame informac apie prisijungusį vartotoją
    res.status(200).json({ message: 'Prisijungta sėkmingai.', user });

    await con.close();
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.get('/ownersWithPets', async (req, res) => {
//   try {
//     const con = await client.connect();
//     const data = await con
//       .db(dbName)
//       .collection('owners')
//       .aggregate([
//         {
//           $lookup: {
//             from: 'pets',
//             localField: '_id',
//             foreignField: 'ownerId',
//             as: 'pets',
//           },
//         },
//       ])
//       .toArray();
//     await con.close();
//     res.send(data);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// // query params
// app.get('/owners', async (req, res) => {
//   try {
//     const { sort } = req.query;
//     const sortType = sort === 'asc' ? 1 : -1;

//     const con = await client.connect();
//     const data = await con
//       .db(dbName)
//       .collection('owners')
//       .find()
//       .sort({ income: sortType }) // 1 dideja -1 mazeja
//       .toArray();
//     await con.close();
//     res.send(data);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

app.listen(port, () => {
  console.log(`server is running on the ${port} port`);
});
