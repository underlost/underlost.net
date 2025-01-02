import React, { useState } from 'react';

interface NavigationProps {
  title?: string;
  description?: string;
}

export const NewsletterForm = ({
  title = "Newsletter",
  description = "Want to keep up with my latest updates?",
}: NavigationProps) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Reset messages
    setMessage('');
    setError(false);

    // Validate email
    if (!email) {
      setError(true);
      setMessage('Please enter an email address.');
      return;
    }

    // Set loading state
    setLoading(true);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(result.message || "You've successfully subscribed!");
        setEmail(''); // Clear the input
      } else {
        setError(true);
        setMessage(result.message || 'Something went wrong.');
      }
    } catch (err) {
      setError(true);
      setMessage('Failed to subscribe. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h2 className="h6 text-center">{title}</h2>
      <p className="text-center text-lg">{description}</p>
      <form className="form-group-stacked my-5 mx-auto max-w-lg" onSubmit={handleSubmit}>
        <input
          type="email"
          className="text-field text-center"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="btn btn-lg" type="submit" disabled={loading}>
          {loading ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <p className={`text-center mt-2 font-bold ${error ? 'text-white' : 'text-green-500'}`}>
          {message}
        </p>
      )}
    </>
  );
};
