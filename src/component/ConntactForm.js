
 
import React from 'react'

const ConntactForm = () => {
  const containerStyle = {
    padding: '40px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    width: '100%',
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1>Send a message to us!</h1>
      <form>
        <input style={inputStyle} placeholder="Name" />
        <input style={inputStyle} placeholder="Email" />
        <input style={inputStyle} placeholder="Subject" />
        <textarea style={inputStyle} placeholder="Message" rows="4"></textarea>
        <button style={buttonStyle}>Send Message</button>
      </form>
    </div>
  );
}


export default ConntactForm