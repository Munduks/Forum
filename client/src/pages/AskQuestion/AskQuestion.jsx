// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import FormItem from '../../components/FormItem/FormItem'
// import Button from '../../components/Button/Button';
// import { FORUM_ROUTE } from '../../routes/const';

// const AskQuestion = () => {
//   const [questionText, setQuestionText] = useState('');
//   const navigate = useNavigate();

//   const handleQuestionSubmit = async (e) => {
//     e.preventDefault();

//     if (questionText.trim() === '') {
//       // Handle empty question text
//       return;
//     }

//     try {
//       await axios.post('http://localhost:3000/questions', { questionText });
//       // Handle successful question submission
//       setQuestionText('');
//       navigate(FORUM_ROUTE); // Nukreipiame į puslapį "Forum"
//     } catch (error) {
//       console.error(error);
//       // Handle error in question submission
//     }
//   };

//   return (
//     <div>
//       <h1>Ask a Question</h1>
//       <form className="form" onSubmit={handleQuestionSubmit}>
//         <FormItem
//           label="Question"
//           type="text"
//           placeholder="Ask question"
//           value={questionText}
//           onChange={(e) => setQuestionText(e.target.value)}
//         />
//         <Button type="submit">Drop a question</Button>
//       </form>
//     </div>
//   );
// };

// export default AskQuestion;
// AskQuestion.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormItem from '../../components/FormItem/FormItem';
import Button from '../../components/Button/Button';
import { FORUM_ROUTE } from '../../routes/const';
import "./Action.scss"

const AskQuestion = () => {
  const [questionText, setQuestionText] = useState('');
  const navigate = useNavigate();

  const handleQuestionSubmit = async (e) => {
    e.preventDefault();

    if (questionText.trim() === '') {
      // Handle empty question text
      return;
    }

    try {
      await axios.post('http://localhost:3000/questions', { questionText });
      // Handle successful question submission
      setQuestionText('');
      navigate(FORUM_ROUTE); // Nukreipiame į puslapį "Forum"
    } catch (error) {
      console.error(error);
      // Handle error in question submission
    }
  };

  return (
    <div className="action-page">
      <h1 className='action-title'>Ask a Question</h1>
      <form className="form" onSubmit={handleQuestionSubmit}>
        <FormItem
          label=""
          type="text"
          placeholder="Ask question"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
        <Button type="submit" className="action-button">Drop a question</Button>
      </form>
    </div>
  );
};

export default AskQuestion;

