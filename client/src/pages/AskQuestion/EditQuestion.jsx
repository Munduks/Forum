import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import FormItem from '../../components/FormItem/FormItem';
import "./Action.scss"

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
        questionText: question.questionText, 
        questionUpdateDate:question.currentDate,
      };
      await axios.put(`http://localhost:3000/questions/${id}`, updatedQuestion);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };
  

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
    <div className="action-page">
      <h1 className='action-title'>Edit Question</h1>
      <form className="form" onSubmit={handleQuestionSubmit}>
        <FormItem
          label=""
          type="text"
          value={question.questionText}
          onChange={handleQuestionChange}
        />
        <Button type="submit" className="action-button">
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditQuestion;
