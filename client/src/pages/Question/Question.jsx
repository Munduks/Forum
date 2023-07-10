import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import FormItem from '../../components/FormItem/FormItem';
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

    const fetchAnswers = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/questions/${id}/answers`);
        setAnswers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    setIsLoading(true);
    fetchQuestion();
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
    try {
      await axios.post(`http://localhost:3000/questions/${id}/answers`, { answer: answerText });
      setAnswerText('');
      setAnswers((prevAnswers) => [...prevAnswers, { answer: answerText }]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAnswer = async (answerId) => {
    try {
      await axios.delete(`http://localhost:3000/answers/${answerId}`);
      setAnswers((prevAnswers) => prevAnswers.filter((answer) => answer._id !== answerId));
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
      <div className="question-container">
        <h1 className="question-page__text">{question.questionText}</h1>
        <p className="question-page__date">Date: {question.questionDate}</p>
        {question.updated && <p className="question-page__date">Update: {question.questionUpdateDate}</p>}

        <div className="question-buttons">
          <Button onClick={handleDeleteQuestion} className="question-page__button">
            Delete Q
          </Button>
          <Link to={`/questions/${id}/edit`} className="question-page__button">
            Edit Q
          </Link>
        </div>
      </div>
      <div className="answer-form">
        <form className="form" onSubmit={handleAnswerSubmit}>
          <FormItem
            label=""
            type="text"
            id="answer"
            placeholder="Enter answer"
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
          />
          <Button type="submit">Drop an answer</Button>
        </form>
      </div>
      <div className="question-answers">
        {answers.map((answer) => (
          <div className="answer" key={answer._id ? answer._id : Math.random()}>
            <p>{answer.answer}</p>
            {answer.updated && <p className="answer-date">Update: {answer.answerUpdateDate}</p>}
            <Button onClick={() => handleDeleteAnswer(answer._id)}>Delete Answer</Button>
            <Link to={`/answers/${id}/edit`} className="question-page__button">
            Edit Q
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
