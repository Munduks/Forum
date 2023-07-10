import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import FormItem from '../../components/FormItem/FormItem';
import './Action.scss';

const EditAnswer = () => {
  const { id } = useParams();
  const [answer, setAnswer] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getAnswer(id)
      .then((response) => {
        setAnswer(response);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  const getAnswer = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/answers/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const updateAnswer = async () => {
    try {
      const updatedAnswer = {
        ...answer,
        answerText: answer.answerText,
        answerUpdateDate: new Date(),
      };
      await axios.put(`http://localhost:3000/answers/${id}`, updatedAnswer);
      navigate("/questions/:id/edit");
    } catch (error) {
      console.error(error);
    }
  };

  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    updateAnswer();
  };

  const handleAnswerChange = (e) => {
    setAnswer({ ...answer, answerText: e.target.value });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!answer) {
    return <div>Answer not found</div>;
  }

  return (
    <div className="action-page">
      <h1 className="action-title">Edit Answer</h1>
      <form className="form" onSubmit={handleAnswerSubmit}>
        <FormItem
          label=""
          type="text"
          value={answer.answerText}
          onChange={handleAnswerChange}
        />
        <Button type="submit" className="action-button">
          Save
        </Button>
      </form>
    </div>
  );
};

export default EditAnswer;
