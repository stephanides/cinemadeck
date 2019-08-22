/* eslint-disable react/no-danger */
import './scss/question.scss';
import React from 'react';
import PropTypes from 'prop-types';


const Question = ({ itemData }) => {
  const { faqid, questionText, questionAnswer } = itemData;
  const renderDangerHtml = () => ({ __html: questionAnswer });
  return (
    <div className="faq">
      <input id={faqid} type="checkbox" />
      <label htmlFor={faqid}>
        <p className="faq-heading">{questionText}</p>
        <div className="faq-arrow" />
        <p className="faq-text" dangerouslySetInnerHTML={renderDangerHtml()} />
      </label>
    </div>
  );
};

Question.propTypes = {
  itemData: PropTypes.shape({
    faqid: PropTypes.string,
    questionText: PropTypes.string,
    questionAnswer: PropTypes.string,
  }).isRequired,
};

export default Question;
