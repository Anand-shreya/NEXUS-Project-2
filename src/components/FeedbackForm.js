// FeedbackForm.js

import React, { useState } from 'react';
import './FeedbackForm.css'; // Import your CSS file for styling

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send feedback to server)
    console.log('Submitted:', { name, email, feedback });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <div className="feedback-form-Maincontainer">
    <div className="feedback-form-container">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Feedback:
          <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} required />
        </label>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
    </div>
  );
};

export default FeedbackForm;
