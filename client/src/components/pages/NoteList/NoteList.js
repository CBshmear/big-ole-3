import React from 'react';

const NoteList = ({ notes = [] }) => {
  if (!notes.length) {
    return <h3>No Notes Yet</h3>;
  }

  return (
    <>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Notes
      </h3>
      <div className="flex-row my-4">
        {notes &&
          notes.map((note) => (
            <div key={note._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <h5 className="card-header">
                  {note.noteAuthor} commented{' '}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {note.createdAt}
                  </span>
                </h5>
                <p className="card-body">{note.noteText}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default NoteList;