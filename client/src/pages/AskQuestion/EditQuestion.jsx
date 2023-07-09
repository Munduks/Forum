// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';
// import QuestionForm from '../components/QuestionForm/QuestionForm';

// const EditQuestion = () => {
//   const { id } = useParams();
//   const [question, setQuestion] = useState(null);

//   useEffect(() => {
//     const fetchQuestion = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/questions/${id}`);
//         setQuestion(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchQuestion();
//   }, [id]);

//   const handleQuestionSubmit = async () => {
//     try {
//       await axios.put(`http://localhost:3000/questions/${id}`);
//       // Handle successful question update
//     } catch (error) {
//       console.error(error);
//       // Handle error in question update
//     }
//   };

//   if (!question) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Edit Question</h1>
//       <QuestionForm
//         initialQuestion={question}
//         onSubmit={handleQuestionSubmit}
//       />
//     </div>
//   );
// };

// export default EditQuestion;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const EditQuestion = () => {
//   const { id } = useParams();
//   const [question, setQuestion] = useState(null);
//   const [updatedQuestion, setUpdatedQuestion] = useState('');

//   useEffect(() => {
//     const fetchQuestion = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/questions/${id}`);
//         setQuestion(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchQuestion();
//   }, [id]);

//   const handleQuestionUpdate = async () => {
//     try {
//       await axios.put(`http://localhost:3000/questions/${id}`, { questionText: updatedQuestion });
//       // Handle successful question update
//     } catch (error) {
//       console.error(error);
//       // Handle error in question update
//     }
//   };

//   if (!question) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Edit Question</h1>
//       <textarea
//         value={updatedQuestion}
//         onChange={(e) => setUpdatedQuestion(e.target.value)}
//       />
//       <button onClick={handleQuestionUpdate}>Update Question</button>
//     </div>
//   );
// };

// export default EditQuestion;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// import FormItem from '../../components/FormItem/FormItem';

// const EditQuestion = () => {
//   const { id } = useParams();
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

//   const handleQuestionSubmit = async () => {
//     try {
//       await axios.put(`http://localhost:3000/questions/${id}`, { questionText: question.questionText });
//       // Handle successful question update
//     } catch (error) {
//       console.error(error);
//       // Handle error in question update
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!question) {
//     return <div>Question not found</div>;
//   }

//   return (
//     <div>
//       <h1>Edit Question</h1>
//       <FormItem
//   type="text"
//   placeholder="Enter question"
//   value={question.questionText}
//   onChange={(e) => setQuestion({ ...question, questionText: e.target.value })}
//   onSubmit={handleQuestionSubmit}
// />
        
//     </div>
//   );
// };

// export default EditQuestion;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import Button from '../../components/Button/Button';
// import FormItem from '../../components/FormItem/FormItem';
// import { FORUM_ROUTE } from '../../routes/const';

// const EditQuestion = () => {
//   const { id } = useParams();
//   const [questionText, setQuestionText] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     setIsLoading(true);
//     getQuestion(id)
//       .then((response) => {
//         setQuestionText(response);
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

//   const handleQuestionSubmit = async () => {
//     try {
//       await axios.put(`http://localhost:3000/questions/${id}`, { questionText: questionText });

//       // Handle successful question update
//       navigate(FORUM_ROUTE);
//     } catch (error) {
//       console.error(error);
//       // Handle error in question update
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!questionText) {
//     return <div>Question not found</div>;
//   }

//   return (
//     <div>
//       <h1>Edit Question</h1>
//       <form className="form" onSubmit={handleQuestionSubmit}>
//         <FormItem
//           label="Question"
//           type="text"
//           placeholder="Enter question"
//           value={questionText}
//           onChange={(e) => setQuestionText(e.target.value)}
//         />
//         <Button type="submit" className="forum-button">
//           Save
//         </Button>
//       </form>
//     </div>
//   );
// };

// console.log(EditQuestion);

// export default EditQuestion;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import FormItem from '../../components/FormItem/FormItem';

const EditQuestion = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
  const updateQuestion = async () => {
    try {
      const updatedQuestion = {
        ...question,
        questionText: question.questionText, // Atnaujinti questionText
        questionUpdateDate:question.currentDate // Nustatyti naują atnaujinimo datą
      };
      await axios.put(`http://localhost:3000/questions/${id}`, updatedQuestion);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  
//   const updateQuestion = async () => {
//     try {
//       await axios.put(`http://localhost:3000/questions/${id}`, question);
//       navigate('/');
//     } catch (error) {
//       console.error(error);
//     }
//   };

  const handleQuestionSubmit = (e) => {
    e.preventDefault();
    updateQuestion();
  };

  const handleQuestionChange = (e) => {
    setQuestion({ ...question, questionText: e.target.value });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!question) {
    return <div>Question not found</div>;
  }

  return (
    <div>
      <h1>Edit Question</h1>
      <form className="form" onSubmit={handleQuestionSubmit}>
        <FormItem
          label="Question"
          type="text"
          placeholder="Enter question"
          value={question.questionText}
          onChange={handleQuestionChange}
        />
        <Button type="submit" className="forum-button">
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditQuestion;
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useParams, useNavigate } from 'react-router-dom';
// import Button from '../../components/Button/Button';
// import FormItem from '../../components/FormItem/FormItem';

// const EditQuestion = () => {
//   const { id } = useParams();
//   const [question, setQuestion] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

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

//   const updateQuestion = async () => {
//     try {
//       const updatedQuestion = {
//         ...question,
//         questionText: question.questionText,
//         questionUpdateDate: question.questionUpdateDate, // Nustatyti naują atnaujinimo datą
//       };
//       await axios.put(`http://localhost:3000/questions/${id}`, updatedQuestion);
//       navigate(`/questions/${id}`); // Nukreipimas į klausimo puslapį
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleQuestionSubmit = (e) => {
//     e.preventDefault();
//     updateQuestion();
//   };

//   const handleQuestionChange = (e) => {
//     setQuestion({ ...question, questionText: e.target.value });
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (!question) {
//     return <div>Question not found</div>;
//   }

//   return (
//     <div>
//       <h1>Edit Question</h1>
//       <form className="form" onSubmit={handleQuestionSubmit}>
//         <FormItem
//           label="Question"
//           type="text"
//           placeholder="Enter question"
//           value={question.questionText}
//           onChange={handleQuestionChange}
//         />
//         <Button type="submit" className="forum-button">
//           Save
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default EditQuestion;

