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
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
// import Button from '../../components/Button/Button';
import './Question.scss';

const Question = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getQuestion(id)
      .then((response) => {
        setQuestion(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const getQuestion = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/questions/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleDeleteQuestion = async () => {
    try {
      await axios.delete(`http://localhost:3000/questions/${id}`);
      navigate('/');
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
      {question.updated && <p>Update: {question.questionUpdateDate}</p>}
      </div>
      <div className="question-buttons">
        <Link to={`/questions/${id}/edit`} className="question-page__button">
          Edit
        </Link>
        <button onClick={handleDeleteQuestion} className="question-page__button">
          Delete
        </button>
        <Link to={`/questions/${id}/answers`} className="answer-section__button">
          Add Answer
        </Link>
      </div>
    </div>
  );
};

export default Question;

