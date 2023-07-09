import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormItem from '../../components/FormItem/FormItem';
import Button from '../../components/Button/Button';
import { QUESTION_ROUTE } from '../../routes/const';

const AddAnswer = ({ questionId }) => {
  const [answerText, setAnswerText] = useState('');
  const navigate = useNavigate();

  const handleAnswerSubmit = async (e) => {
    e.preventDefault();

    if (answerText.trim() === '') {
      // Handle empty answer text
      return;
    }

    try {
      await axios.post(`http://localhost:3000/questions/${questionId}/answers`, { answer: answerText });
      // Handle successful answer submission
      setAnswerText('');
      navigate(QUESTION_ROUTE
        (':id', questionId)); // Nukreipiame atgal į klausimo puslapį su teisingu klausimo ID
    } catch (error) {
      console.error(error);
      // Handle error in answer submission
    }
  };

  const handleEditAnswer = () => {
    // Handle edit answer functionality
  };

  const handleDeleteAnswer = () => {
    // Handle delete answer functionality
  };

  return (
    <div>
      <h1>Add an Answer</h1>
      <div className="answer-buttons">
        <Button onClick={handleEditAnswer}>Edit Answer</Button>
        <Button onClick={handleDeleteAnswer}>Delete Answer</Button>
      </div>
      <form className="form" onSubmit={handleAnswerSubmit}>
        <FormItem
          label="Answer"
          type="text"
          placeholder="Enter answer"
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
        />
        <Button type="submit">Add Answer</Button>
      </form>
    </div>
  );
};

export default AddAnswer;
