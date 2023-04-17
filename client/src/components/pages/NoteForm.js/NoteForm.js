import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useMutation } from '@apollo/client';

import { ADD_NOTE } from '../../../utils/mutations';
import { GET_ME } from '../../../utils/queries';

import Auth from '../../../utils/auth';

const NoteForm = ({ userId, campgroundId }) => {
  const [noteText, setNoteText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const [addNote, { error }] = useMutation(ADD_NOTE , {
    
        refetchQueries: [{ query: GET_ME, variables: { id: userId } }],
        onCompleted: () => {
          // Reset the form and trigger a re-render
          setNoteText('');
        },  
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(noteText);  
      console.log(campgroundId);
      const { data } = await addNote({
        variables: {
          userId,  
          campgroundId,
          noteText,
          noteAuthor: Auth.getProfile().data.username,
        },
      });
      console.log(data); 
    //   console.log(noteAuthor); 
      setNoteText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'noteText' && value.length <= 280) {
      setNoteText(value);
      setCharacterCount(value.length);
      
    }
  };

  return (
    <div>
      <h4>Add a Note for this campground</h4>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">{error.message}</span>}
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="noteText"
                placeholder="Add your note..."
                value={noteText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button  className="btn btn-primary btn-block py-3" type="submit">
                Add note
              </button>
            </div>
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your thoughts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default NoteForm;