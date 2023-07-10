const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 8080;
const URI = process.env.DB_CONNECTION_STRING;
const dbName = process.env.DB_NAME;

const app = express();
app.use(cors());
app.use(express.json());

const client = new MongoClient(URI);

// app.get('/register', async (req, res) => {
//   try {
//     const con = await client.connect();
//     const data = await con.db(dbName).collection('users').find().toArray();
//     await con.close();
//     res.send(data);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

//geras

app.post('/register', async (req, res) => {
  try {
    const con = await client.connect();
    const { name, email, password } = req.body;
    const user = {
      name,
      email,
      password,
    };

    const existingUser = await con
      .db(dbName)
      .collection('users')
      .findOne({ email });

    if (existingUser) {
      res.status(400).json({ error: 'Toks vartotojas jau yra.' });
      await con.close();
      return;
    }

    const data = await con.db(dbName).collection('users').insertOne(user);
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

//geras
app.post('/login', async (req, res) => {
  try {
    const con = await client.connect();
    const { name, email, password } = req.body;

    const user = await con.db(dbName).collection('users').findOne({ email });

    if (!user || user.password !== password) {
      res.status(401).json({ message: 'Klaidingai suvesti duomenys.' });
      return;
    }

    res.status(200).json({ message: 'Prisijungta sėkmingai.', user:{name, email} });

    await con.close();
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/users', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db(dbName).collection('users').find().toArray();
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});
//NEREIKIA
// app.get('/users/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const con = await client.connect();
//     const data = await con
//       .db(dbName)
//       .collection('users')
//       .findOne(new ObjectId(id));
//     await con.close();
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

//geras
app.get('/questions', async (req, res) => {
  try {
    const { sortOrder } = req.query;

    if (sortOrder !== 'dsc' && sortOrder !== 'asc') {
      res.status(400).json({ message: 'Invalid sortOrder value' });
      return;
    }
    const con = await client.connect();
    let data = await con.db(dbName).collection('questions').find().toArray();

    
    if (sortOrder === 'asc') {
      data = data.sort((a, b) => new Date(b.questionDate) - new Date(a.questionDate));
      // 
    }  else{
      data = data.sort((a, b) => new Date(a.questionDate) - new Date(b.questionDate));
      // 
    } 
    

    await con.close();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});


app.get('/questions/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('questions')
      .findOne({ _id: new ObjectId(id) });

    // if (!data) {
    //   res.status(404).json({ message: 'Question not found' });
    //   return;
    // }

    await con.close();
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});


// app.post('/questions', async (req, res) => {
//   try {
//     const con = await client.connect();
//     const currentDate = new Date();

//     const question = {
//        questionText: req.body.questionText,
//        questionDate: currentDate,
//        updated:false,
//        questionUpdateDate:currentDate,
//        answers: [{
//         answer:req.body.answerText,
//         questionId: new ObjectId(id),
//         updated: false,
//         created: new Date(),
//     }],
//     };

//     const data = await con.db(dbName).collection('questions').insertOne(question);
//     res.status(200).json(data);
//     await con.close();
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
app.post('/questions', async (req, res) => {
  try {
    const con = await client.connect();
    const currentDate = new Date();

    const question = {
      questionText: req.body.questionText,
      questionDate: currentDate,
      updated: false,
      questionUpdateDate: currentDate,
      answers: [
        {
          answer: req.body.answer,
          answearId: new ObjectId(), // Assuming you have access to generate a new ObjectId
          updated: false,
          created: currentDate,
        },
      ],
    };

    const data = await con.db(dbName).collection('questions').insertOne(question);
    res.status(200).json(data);
    await con.close();
  } catch (error) {
    res.status(500).send(error);
  }
});


app.put('/questions/:id', async (req, res) => {
  try {
    const con = await client.connect();
    const { id } = req.params;
    const currentDate = new Date();

    const data = await con
      .db(dbName)
      .collection('questions')
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { questionText: req.body.questionText, updated: true, questionUpdateDate: currentDate } },
      );
    await con.close();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).send(error);
  }
});





//geras
// app.post('/questions', async (req, res) => {
//   try {
//     const con = await client.connect();
//     const currentDate = new Date();
//     const question = {
//       questionText: req.body.questionText,
//       questionDate: currentDate,
//       updated:false,
//       questionUpdateDate:currentDate,
//     };
//     const data = await con
//       .db(dbName)
//       .collection('questions')
//       .insertOne(question);
//     res.status(200).json(data);
//     await con.close();
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// app.post('/questions', async (req, res) => {
//   try {
//     const con = await client.connect();
//     const { questionText } = req.body;
//     const currentDate = new Date();

//     const question = {
//       questionText,
//       questionDate: currentDate,
//       updated: false,
//       questionUpdateDate:currentDate,
//       answers: [],
//     };

//     const data = await con.db(dbName).collection('questions').insertOne(question);
//     res.status(200).json(data);
//     await con.close();
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// // Serverio route
// app.post('/questions', async (req, res) => {
//   try {
//     const con = await client.connect();
//     const currentDate = new Date();

//     const question = {
//       questionText: req.body.questionText,
//        questionDate: currentDate,
//        updated:false,
//       questionUpdateDate:currentDate,
//       answers: [],
//     };

//     const data = await con.db(dbName).collection('questions').insertOne(question);
//     res.status(200).json(data);
//     await con.close();
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });


// app.put('/questions/:id', async (req, res) => {
//   try {
//     const con = await client.connect();
//     const { id } = req.params;
//     const currentDate = new Date();

//     const data = await con
//       .db(dbName)
//       .collection('questions')
//       .updateOne(
//         { _id: new ObjectId(id) },
//         { $set: { questionText: req.body.questionText, updated: true, questionUpdateDate: currentDate } },
//       );
//     await con.close();

//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });





//geras
app.delete('/questions/:id', async (req, res) => {
  try {
    const con = await client.connect();
    const { id } = req.params;
    const data = await con
      .db(dbName)
      .collection('questions')
      .deleteOne({ _id: new ObjectId(id) });
    await con.close();
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.get('/questions/:id/answers', async (req, res) => {
//   try {
//     const con = await client.connect();
//     const { id } = req.params;
//     const data = await con
//       .db(dbName)
//       .collection('answers')
//       .find({
//         questionId: new ObjectId(id),
//       })
//       .toArray();
//     await con.close();
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.get('/questions/:id/answers', async (req, res) => {
//   try {
//     const con = await client.connect();
//     const { id } = req.params;
//     const data = await con
//       .db(dbName)
//       .collection('questions')
//       .findOne({ _id: new ObjectId(id) });

//     if (!data) {
//       res.status(404).json({ message: 'Question not found' });
//       return;
//     }

//     const answers = data.answer;
//     await con.close();
//     res.status(200).json(answers);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });





// app.put('/answers/:id', async (req, res) => {
//   try {
//     const con = await client.connect();
//     const { id } = req.params;
//     const { answer } = req.body;
//     const data = await con
//       .db(dbName)
//       .collection('answers')
//       .updateOne(
//         { _id: new ObjectId(id) },
//         { $set: { answer: answer, updated: true } },
//       );
//     await con.close();

//     if (data.matchedCount === 0) {
//       res.status(404).json({ message: 'Answer not found' });
//       return;
//     }

//     res.status(200).json({ message: 'Answer updated successfully' });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.delete('/answers/:id', async (req, res) => {
//   try {
//     const con = await client.connect();
//     const { id } = req.params;
//     const data = await con
//       .db(dbName)
//       .collection('answers')
//       .deleteOne({ _id: new ObjectId(id) });
//     await con.close();
//     res.status(200).json({ message: 'successfully deleted...' });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// // app.post('/questions/:id/answers', async (req, res) => {
// //   try {
// //     const con = await client.connect();
// //     const { id } = req.params;
// //     const data = await con
// //       .db(dbName)
// //       .collection('questions')
// //       .updateOne({ _id: new ObjectId(id) }, { $push: { answers: req.body } });
// //     await con.close();
// //     res.status(200).json(data);
// //   } catch (err) {
// //     res.status(500).send(err);
// //   }
// // });

// app.post('/questions/:id/answers', async (req, res) => {
//   try {
//     const con = await client.connect();
//     const { id } = req.params;
//     const answer = await con
//       .db(dbName)
//       .collection('answers')
//       .insertOne({
//         answer: req.body.answer,
//         count: 0,
//         updated: false,
//         created: new Date(),
//         questionId: new ObjectId(id),
//       });
//     res.status(200).json(answer);
//     await con.close();
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });
// Gauk atsakymus pagal klausimo ID
app.get('/questions/:id/answers', async (req, res) => {
  try {
    const { id } = req.params;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('answers')
      .find({ questionId: new ObjectId(id) })
      .toArray();

    await con.close();
    res.status(200).json(data);
    console.log(data)
  } catch (err) {
    res.status(500).send(err);
   
  }
});

// app.get('/questions/:id/answers', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const con = await client.connect();
//     const data = await con
//       .db(dbName)
//       .collection('answers')
//       .find({questionId: new ObjectId(id) })
//       .toArray();

//     await con.close();
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });



// Pridėk atsakymą prie klausimo
app.post('/questions/:id/answers', async (req, res) => {
  try {
    const { id } = req.params;
    const { answer } = req.body;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('answers')
      .insertOne({
        answer,
        questionId: new ObjectId(id),
        updated: false,
        created: new Date(),
      });

    await con.close();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// app.post('/questions/:id/answers', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { answer } = req.body;
//     const con = await client.connect();
//     const data = await con
//       .db(dbName)
//       .collection('answers')
//       .insertOne({
//         answer,
//         answerId: new ObjectId(id),
//         updated: false,
//         created: new Date(),
//       });

//     await con.close();
//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// Atnaujink atsakymą
app.patch('/answers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { answer } = req.body;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('answers')
      .updateOne(
        { _id: new ObjectId(id) },
        { $set: { answer, updated: true, updatedDate: new Date() } }
      );

    await con.close();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

// app.put('/answers/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { answer } = req.body;
//     const con = await client.connect();
//     const data = await con
//       .db(dbName)
//       .collection('answers')
//       .updateOne(
//         { _id: new ObjectId(id) },
//         { $set: { answer, updated: true } }
//       );

//     await con.close();

//     if (data.matchedCount === 0) {
//       res.status(404).json({ message: 'Answer not found' });
//       return;
//     }

//     res.status(200).json(data);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// Ištrink atsakymą
app.delete('/answers/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const con = await client.connect();
    const data = await con
      .db(dbName)
      .collection('answers')
      .deleteOne({ _id: new ObjectId(id) });

    await con.close();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send(err);
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
