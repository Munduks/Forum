
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

  const sortQuestions = (a, b) => {
    const dateA = new Date(a.questionDate);
    const dateB = new Date(b.questionDate);

    if (sortOrder === 'asc') {
      return dateA - dateB;
    } else {
      return dateB - dateA;
    }
  };

  return (
    <div className="forum-container">
      <h1>Forum</h1>
      <Button className="sort-button" onClick={handleSortOrderChange}>
        Sort {sortOrder === 'dsc' ? 'Oldest' : 'Newest'} One
      </Button>
      {questions.sort(sortQuestions).map((question) => (
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
