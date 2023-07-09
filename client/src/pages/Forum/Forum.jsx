// import React, { useEffect, useState, useCallback } from 'react';
// import axios from 'axios';
// import Button from '../../components/Button/Button';
// import './Forum.scss';
// import { Link } from 'react-router-dom';

// const Forum = () => {
//   const [questions, setQuestions] = useState([]);
//   const [sortOrder, setSortOrder] = useState('asc');

//   const fetchQuestions = useCallback(async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/questions?sortOrder=${sortOrder}`);
//       setQuestions(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }, [sortOrder]);

//   useEffect(() => {
//     fetchQuestions();
//   }, [fetchQuestions]);

//   const handleSortOrderChange = () => {
//     const newSortOrder = sortOrder === 'dsc' ? 'asc' : 'dsc';
//     setSortOrder(newSortOrder);
//   };

//   // const handleAddAnswer = (questionId) => {
//   //   Navigate(`/questions/${questionId}/answers/add`);
//   // };

//   const handleDeleteQuestion = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/questions/${id}`);
//       fetchQuestions();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="forum-container">
//       <h1>Forum</h1>
//       <Button className="sort-button" onClick={handleSortOrderChange}>
//         Sort {sortOrder === 'dsc' ? 'Oldest' : 'Newest'} One
//       </Button>
//       {questions.map((question) => (
//         <div className="question" key={question._id}>
//           <h2 className="question-text">{question.questionText}</h2>
//           <p className="question-date">Date: {question.questionDate}</p>
//           {question.updated && (
//             <p className="question-updated">Update: {question.questionUpdateDate}</p>
//           )}
//           <div className="question-buttons">
//             <Button className="edit-button">
//               <Link to={`/questions/${question._id}/edit`}>Edit</Link>
//             </Button>
//             <Button className="delete-button" onClick={() => handleDeleteQuestion(question._id)}>
//               Delete
//             </Button><Button className="add-button">
//               <Link to={`/questions/${question._id}/answer`}>Add Answer</Link>
//             </Button>
//             {/* <Button
//               className="add-answer-button"
//               onClick={() => handleAddAnswer(question._id)}
//             >
//               Add Answer
//             </Button> */}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Forum;
// import React, { useEffect, useState, useCallback } from 'react';
// import axios from 'axios';
// import Button from '../../components/Button/Button';
// import './Forum.scss';
// import { Link, generatePath } from 'react-router-dom';
// import { QUESTION_ROUTE } from '../../routes/const'; // Pakeiskite į tinkamą maršrutą

// const Forum = () => {
//   const [questions, setQuestions] = useState([]);
//   const [sortOrder, setSortOrder] = useState('asc');

//   const fetchQuestions = useCallback(async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/questions?sortOrder=${sortOrder}`);
//       setQuestions(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }, [sortOrder]);

//   useEffect(() => {
//     fetchQuestions();
//   }, [fetchQuestions]);

//   const handleSortOrderChange = () => {
//     const newSortOrder = sortOrder === 'dsc' ? 'asc' : 'dsc';
//     setSortOrder(newSortOrder);
//   };

//   const handleDeleteQuestion = async (id) => {
//     try {
//       await axios.delete(`http://localhost:3000/questions/${id}`);
//       fetchQuestions();
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="forum-container">
//       <h1>Forum</h1>
//       <Button className="sort-button" onClick={handleSortOrderChange}>
//         Sort {sortOrder === 'dsc' ? 'Oldest' : 'Newest'} One
//       </Button>
//       {questions.map((question) => (
//         <div className="question" key={question._id}>
//           <h2 className="question-text">
//             <Link to={generatePath(QUESTION_ROUTE, { id: question._id })}>{question.questionText}</Link>
//           </h2>
//           <p className="question-date">Date: {question.questionDate}</p>
//           {question.updated && (
//             <p className="question-updated">Update: {question.questionUpdateDate}</p>
//           )}
//           <div className="question-buttons">
//             <Button className="edit-button">
//               <Link to={`/questions/${question._id}/edit`}>Edit</Link>
//             </Button>
//             <Button className="delete-button" onClick={() => handleDeleteQuestion(question._id)}>
//               Delete
//             </Button>
//             <Button className="add-button">
//               <Link to={`/questions/${question._id}/answer`}>Add Answer</Link>
//             </Button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Forum;
// import React, { useEffect, useState, useCallback } from 'react';
// import axios from 'axios';
// import Button from '../../components/Button/Button';
// import './Forum.scss';
// import { Link, generatePath } from 'react-router-dom';
// import { QUESTION_ROUTE } from '../../routes/const';

// const Forum = () => {
//   const [questions, setQuestions] = useState([]);
//   const [sortOrder, setSortOrder] = useState('asc');

//   const fetchQuestions = useCallback(async () => {
//     try {
//       const response = await axios.get(`http://localhost:3000/questions?sortOrder=${sortOrder}`);
//       setQuestions(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }, [sortOrder]);

//   useEffect(() => {
//     fetchQuestions();
//   }, [fetchQuestions]);

//   const handleSortOrderChange = () => {
//     const newSortOrder = sortOrder === 'dsc' ? 'asc' : 'dsc';
//     setSortOrder(newSortOrder);
//   };

//   return (
//     <div className="forum-container">
//       <h1>Forum</h1>
//       <Button className="sort-button" onClick={handleSortOrderChange}>
//         Sort {sortOrder === 'dsc' ? 'Oldest' : 'Newest'} One
//       </Button>
//       {questions.map((question) => (
//         <div className="question" key={question._id}>
//           <h2 className="question-text">
//             <Link to={generatePath(QUESTION_ROUTE, { id: question._id })}>{question.questionText}</Link>
//           </h2>
//           <p className="question-date">Date: {question.questionDate}</p>
//           {question.updated && (
//             <p className="question-updated">Update: {question.questionUpdateDate}</p>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Forum;


// Forum.jsx
import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Button from '../../components/Button/Button';
import './Forum.scss';
import { Link, generatePath } from 'react-router-dom';
import { QUESTION_ROUTE } from '../../routes/const';

const Forum = () => {
  const [questions, setQuestions] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  const fetchQuestions = useCallback(async () => {
    try {
      const response = await axios.get(`http://localhost:3000/questions?sortOrder=${sortOrder}`);
      setQuestions(response.data);
    } catch (error) {
      console.error(error);
    }
  }, [sortOrder]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const handleSortOrderChange = () => {
    const newSortOrder = sortOrder === 'dsc' ? 'asc' : 'dsc';
    setSortOrder(newSortOrder);
  };

  return (
    <div className="forum-container">
      <h1>Forum</h1>
      <Button className="sort-button" onClick={handleSortOrderChange}>
        Sort {sortOrder === 'dsc' ? 'Oldest' : 'Newest'} One
      </Button>
      {questions.map((question) => (
        <div className="question" key={question._id}>
          <h2 className="question-text">
            <Link to={generatePath(QUESTION_ROUTE, { id: question._id })}>{question.questionText}</Link>
          </h2>
          <p className="question-date">Date: {question.questionDate}</p>
          {question.updated && (
            <p className="question-updated">Update: {question.questionUpdateDate}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Forum;
