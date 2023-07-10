// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import './Question.scss';

// const Question = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [question, setQuestion] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [answerText, setAnswerText] = useState('');

//   useEffect(() => {
//     setIsLoading(true);
//     getQuestion(id)
//       .then((response) => {
//         setQuestion(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [id]);

//   const getQuestion = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/questions/${id}`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const handleDeleteQuestion = async () => {
//     try {
//       await axios.delete(`http://localhost:3000/questions/${id}`);
//       navigate('/');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleAddAnswer = async () => {
//     try {
//       // Siųskite POST užklausą su nauju atsakymo tekstu į serverį
//       // Pavyzdžiui:
//       // await axios.post(`http://localhost:3000/questions/${id}/answers`, { answerText });
//       // Po sėkmingo atsakymo pridėjimo galite atnaujinti klausimo duomenis
//       // ir išvalyti atsakymo laukelį.
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!question) {
//     return <div>Question not found</div>;
//   }

//   return (
//     <div className="question-page">
//       <h1>Question Page</h1>
//       <h2 className="question-page__text">{question.questionText}</h2>
//       <p className="question-page__date">Date: {question.questionDate}</p>
//       {question.updated && <p>Update: {question.questionUpdateDate}</p>}
//       <Link to={`/questions/${id}/edit`} className="question-page__button">
//         Edit
//       </Link>
//       <button onClick={handleDeleteQuestion} className="question-page__button">
//         Delete
//       </button>
//       <div>
//         <input
//           type="text"
//           value={answerText}
//           onChange={(e) => setAnswerText(e.target.value)}
//           placeholder="Enter your answer"
//         />
//         <button onClick={handleAddAnswer}>Add Answer</button>
//       </div>
//     </div>
//   );
// };

// export default Question;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import './Question.scss';

// const Question = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [question, setQuestion] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [answerText, setAnswerText] = useState('');
//   const [showAnswerForm, setShowAnswerForm] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     getQuestion(id)
//       .then((response) => {
//         setQuestion(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [id]);

//   const getQuestion = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/questions/${id}`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const handleDeleteQuestion = async () => {
//     try {
//       await axios.delete(`http://localhost:3000/questions/${id}`);
//       navigate('/');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleAddAnswer = async () => {
//     try {
//       await axios.post(`http://localhost:3000/questions/${id}/answers`, { answer: answerText });
//       setAnswerText('');
//       // Atnaujinti klausimo duomenis, jei reikia
//       // ...
//       setShowAnswerForm(false);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!question) {
//     return <div>Question not found</div>;
//   }

//   return (
//     <div className="question-page">
//       <h1>Question Page</h1>
//       <h2 className="question-page__text">{question.questionText}</h2>
//       <p className="question-page__date">Date: {question.questionDate}</p>
//       {question.updated && <p>Update: {question.questionUpdateDate}</p>}
//       <Link to={`/questions/${id}/edit`} className="question-page__button">
//         Edit
//       </Link>
//       <button onClick={handleDeleteQuestion} className="question-page__button">
//         Delete
//       </button>

//       {showAnswerForm ? (
//         <div className="answer-section">
//           <h2>Add Answer</h2>
//           <textarea
//             className="answer-section__textarea"
//             placeholder="Enter your answer"
//             value={answerText}
//             onChange={(e) => setAnswerText(e.target.value)}
//           ></textarea>
//           <button onClick={handleAddAnswer} className="answer-section__button">
//             Add Answer
//           </button>
//         </div>
//       ) : (
//         <button onClick={() => setShowAnswerForm(true)} className="question-page__button">
//           Add Answer
//         </button>
//       )}
//     </div>
//   );
// };

// export default Question;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import Button from '../../components/Button/Button';
// import './Question.scss';

// const Question = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [question, setQuestion] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [answerText, setAnswerText] = useState('');

//   useEffect(() => {
//     setIsLoading(true);
//     getQuestion(id)
//       .then((response) => {
//         setQuestion(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [id]);

//   const getQuestion = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/questions/${id}`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const handleDeleteQuestion = async () => {
//     try {
//       await axios.delete(`http://localhost:3000/questions/${id}`);
//       navigate('/');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleAddAnswer = async () => {
//     try {
//       await axios.post(`http://localhost:3000/questions/${id}/answers`, { answer: answerText });
//       setAnswerText('');
//       // Atnaujinti klausimo duomenis, jei reikia
//       // ...
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!question) {
//     return <div>Question not found</div>;
//   }

//   return (
//     <div className="question-page">
//       <div className="question-buttons">
//         <Link to={`/questions/${id}/edit`} className="question-page__button">
//           Edit
//         </Link>
//         <button onClick={handleDeleteQuestion} className="question-page__button">
//           Delete
//         </button>
//       </div>
//       <h1 className="question-page__text">{question.questionText}</h1>
//       <p className="question-page__date">Date: {question.questionDate}</p>
//       {question.updated && <p>Update: {question.questionUpdateDate}</p>}

//       <div className="answer-section">
//         <textarea
//           className="answer-section__textarea"
//           placeholder="Enter your answer"
//           value={answerText}
//           onChange={(e) => setAnswerText(e.target.value)}
//         ></textarea>
//         <Button onClick={handleAddAnswer} className="answer-section__button">
//           Add Answer
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Question;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import Button from '../../components/Button/Button';
// import './Question.scss';

// const Question = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [question, setQuestion] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [answerText, setAnswerText] = useState('');

//   useEffect(() => {
//     setIsLoading(true);
//     getQuestion(id)
//       .then((response) => {
//         setQuestion(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [id]);

//   const getQuestion = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/questions/${id}`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const handleDeleteQuestion = async () => {
//     try {
//       await axios.delete(`http://localhost:3000/questions/${id}`);
//       navigate('/');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleAddAnswer = async () => {
//     try {
//       await axios.post(`http://localhost:3000/questions/${id}/answers`, { answer: answerText });
//       setAnswerText('');
//       navigate(`/questions/${id}/answers`); // Nukreipimas į atsakymų puslapį
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!question) {
//     return <div>Question not found</div>;
//   }

//   return (
//     <div className="question-page">
//       <div className="question-buttons">
//         <Link to={`/questions/${id}/edit`} className="question-page__button">
//           Edit
//         </Link>
//         <button onClick={handleDeleteQuestion} className="question-page__button">
//           Delete
//         </button>
//         <Button onClick={handleAddAnswer} className="answer-section__button">
//           Add Answer
//         </Button>
//       </div>
//       <h1 className="question-page__text">{question.questionText}</h1>
//       <p className="question-page__date">Date: {question.questionDate}</p>
//       {question.updated && <p>Update: {question.questionUpdateDate}</p>}
//     </div>
//   );
// };

// export default Question;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import Button from '../../components/Button/Button';
// import './Question.scss';

// const Question = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [question, setQuestion] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     getQuestion(id)
//       .then((response) => {
//         setQuestion(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [id]);
// // gaunamas klausimas pagal klausimo id
//   const getQuestion = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/questions/${id}`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };
// // istrinamas klausimas ir vartotojas grazinamas i forum page(pagrindini)
//   const handleDeleteQuestion = async () => {
//     try {
//       await axios.delete(`http://localhost:3000/questions/${id}`);
//       navigate('/');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!question) {
//     return <div>Question not found</div>;
//   }

//   return (
//     <div className="question-page">
//       <div>
//       <h1 className="question-page__text">{question.questionText}</h1>
//       <p className="question-page__date">Date: {question.questionDate}</p>
//       {question.updated && <p className="question-page__date">Update: {question.questionUpdateDate}</p>}
//       </div>
//       <div className="question-buttons">
//        <Link to={`/questions/${id}/edit`} className="question-page__button" >
//           Edit
//         </Link>
//         <Button onClick={handleDeleteQuestion} className="question-page__button">
//           Delete
//         </Button>
//         <Link to={`/questions/${id}/answers`} className="question-page__button">
//           Add Answer
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Question;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import Button from '../../components/Button/Button';
// import './Question.scss';



// const Question = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [question, setQuestion] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     setIsLoading(true);
//     getQuestion(id)
//       .then((response) => {
//         setQuestion(response);
//       })
//       .catch((error) => {
//         console.error(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, [id]);

//   const getQuestion = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:3000/questions/${id}`);
//       return response.data;
//     } catch (error) {
//       throw error;
//     }
//   };

//   const handleDeleteQuestion = async () => {
//     try {
//       await axios.delete(`http://localhost:3000/questions/${id}`);
//       navigate('/');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!question) {
//     return <div>Question not found</div>;
//   }

//   return (
//     <div className="question-page">
//       <div>
//         <h1 className="question-page__text">{question.questionText}</h1>
//         <p className="question-page__date">Date: {question.questionDate}</p>
//         {question.updated && <p className="question-page__date">Update: {question.questionUpdateDate}</p>}
//       </div>
//       <div className="question-buttons">
//         <Link to={`/questions/${id}/edit`} className="question-page__button">
//           Edit
//         </Link>
//         <Button onClick={handleDeleteQuestion} className="question-page__button">
//           Delete
//         </Button>
//         <Link to={`/questions/${id}/answers`} className="question-page__button">
//           Add Answer
//         </Link>
//       </div>
//       {question.answer && (
//         <div className="answer">
//           <p className="answer-text">{question.answer}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Question;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import Button from '../../components/Button/Button';
// import './Question.scss';

// const Question = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [question, setQuestion] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [answers, setAnswers] = useState([]);

//   useEffect(() => {
//     const fetchQuestion = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/questions/${id}`);
//         setQuestion(response.data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     const fetchAnswers = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/questions/${id}/answers`);
//         setAnswers(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     setIsLoading(true);
//     fetchQuestion();
//     fetchAnswers();
//   }, [id]);

//   const handleDeleteQuestion = async () => {
//     try {
//       await axios.delete(`http://localhost:3000/questions/${id}`);
//       navigate('/');
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!question) {
//     return <div>Question not found</div>;
//   }

//   return (
//     <div className="question-page">
//       <div>
//         <h1 className="question-page__text">{question.questionText}</h1>
//         <p className="question-page__date">Date: {question.questionDate}</p>
//         {question.updated && <p className="question-page__date">Update: {question.questionUpdateDate}</p>}
//       </div>

//       <div className="question-answers">
//   {answers.map((answer) => (
//     <div className="answer" key={answer.id}>
//       <p>{answer.answerText}</p>
//       <p className="answer-date">Answer Date: {answer.answerDate}</p>
//       {answer.updated && <p className="answer-date">Update: {answer.answerUpdateDate}</p>}
//     </div>
//   ))}
// </div>

//       <div className="question-buttons">
//         <Button onClick={handleDeleteQuestion} className="question-page__button">
//           Delete
//         </Button>
//       </div>

//       <div className="add-answer-form">
      
//       <form className="form" onSubmit={handleAnswerSubmit}>
//         <FormItem
//           label="Answer"
//           type="text"
//           placeholder="Enter answer"
//           value={answerText}
//           onChange={(e) => setAnswerText(e.target.value)}
//         />
//         <Button type="submit">Drop an answer</Button>
//       </form>
//       </div>
//     </div>
//   );
// };

// export default Question;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './Question.scss';

const Question = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [answerText, setAnswerText] = useState('');

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/questions/${id}`);
       
        setQuestion(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    fetchQuestion();

    const fetchAnswers = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/questions/${id}/answers`);
        setAnswers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAnswers();
  }, [id]);

  const handleDeleteQuestion = async () => {
    try {
      await axios.delete(`http://localhost:3000/questions/${id}`);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();
    console.log(answerText)
    try {
      await axios.post(`http://localhost:3000/questions/${id}/answers`, { answer: answerText });
      
      setAnswerText('');
      setAnswers();
      //fetchAnswers(); // Fetch answers again to update the list
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div className="question-page">
      <div>
        <h1 className="question-page__text">{question.questionText}</h1>
        <p className="question-page__date">Date: {question.questionDate}</p>
        {question.updated && <p className="question-page__date">Update: {question.questionUpdateDate}</p>}
      </div>

      <div className="question-answers">
        {answers.map((answer) => (
          <div className="answer" key={answer._id}>
            <p>{answer.answer}</p>
            <p className="answer-date">Answer Date: {answer.created}</p>
            {answer.updated && <p className="answer-date">Update: {answer.answerUpdateDate}</p>}
          </div>
        ))}
      </div>

      <div className="question-buttons">
        <Button onClick={handleDeleteQuestion} className="question-page__button">
          Delete
        </Button>
      </div>

      <div className="add-answer-form">
        <form className="form" onSubmit={handleAnswerSubmit}>
          <label htmlFor="answer">Answer</label>
          <input
            type="text"
            id="answer"
            placeholder="Enter answer"
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
          />
          <Button type="submit">Drop an answer</Button>
        </form>
      </div>
    </div>
  );
};

export default Question;
