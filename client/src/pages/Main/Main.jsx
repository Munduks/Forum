// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Button from "../../components/Button/Button";
// import "./Main.scss";

// const Forum = () => {
//   const [questions, setQuestions] = useState([]);
//   const [sortOrder, setSortOrder] = useState("asc");

//   const handleSortOrderChange = () => {
//     const newSortOrder = sortOrder === "asc" ? "desc" : "asc";
//     setSortOrder(newSortOrder);
//   };

//   useEffect(() => {
//     const fetchQuestions = async () => {
//       try {
//         const response = await axios.get("http://localhost:3000/questions");
//         setQuestions(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchQuestions();
//   }, []);

//   const sortedQuestions = [...questions].sort((a, b) => {
//     if (sortOrder === "asc") {
//       return new Date(a.questionDate) - new Date(b.questionDate);
//     } else {
//       return new Date(b.questionDate) - new Date(a.questionDate);
//     }
//   });

//   return (
//     <div className="forum-container">
//       <h1>Forum</h1>
//       <Button onClick={handleSortOrderChange}>
//         Rikiuoti {sortOrder === "asc" ? "didėjimo" : "mažėjimo"} tvarka
//       </Button>
//       {sortedQuestions.map((question) => (
//         <div className="forum-question" key={question._id}>
//           <h2>{question.questionText}</h2>
//           <p className="author">Date: {question.questionDate}</p>
//           <p className="author">Update: {question.updated}</p>
//         </div>
//       ))}
//       {setQuestions.map((question) => (
//         <div className="forum-question" key={question._id}>
//           <h2>{question.questionText}</h2>
//           <p className="author">Date: {question.questionDate}</p>
//           <p className="author">Update: {question.updated}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Forum;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../components/Button/Button';
import './Main.scss';

const Forum = () => {
  const [questions, setQuestions] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/questions?sortOrder=${sortOrder}`);
        setQuestions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuestions();
  }, [sortOrder]);

  const handleSortOrderChange = () => {
    const newSortOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newSortOrder);
  };

  return (
    <div className="forum-container">
      <h1>Forum</h1>
      <Button className="sort-button" onClick={handleSortOrderChange}>
        Sort {sortOrder === 'asc' ? 'Oldest' : 'Newest'} One
      </Button>
      {questions.map((question) => (
        <div className="question" key={question._id}>
          <h2 className="question-text">{question.questionText}</h2>
          <p className="question-date">Date: {question.questionDate}</p>
          <p className="question-updated">Update: {question.updated}</p>
        </div>
      ))}
    </div>
  );
};

export default Forum;

