import React, { useState } from 'react';
import './NoteTaker.css'

const NoteTaker = () => {
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState([]);

  const handleInputChange = (event) => {
    setNoteText(event.target.value);
  };

  const handleAddNote = () => {
    if (noteText.trim() !== '') {
      setNotes([...notes, noteText]);
      setNoteText('');
    }
  };

  const handleDeleteNotes = () => {
    setNotes([]);
  };

  return (
    <div className='text-div'>
      <h2>Anotações</h2>
      <div>
        <input type="text" value={noteText} onChange={handleInputChange} placeholder="Digite sua anotação" />
        <button onClick={handleAddNote}>Adicionar</button>
      </div>
      {notes.length > 0 && (
        <div>
          <h2>Suas anotações:</h2>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
          <button onClick={handleDeleteNotes}>Apagar</button>
        </div>
      )}
    </div>
  );
};

export default NoteTaker;
