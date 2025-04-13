// src/components/Input.js
import React from 'react';
import styled from 'styled-components';

const Input = ({ value, onChange, onAdd }) => {
  return (
    <StyledWrapper>
      <div className="input-container">
        <input
          placeholder="Add Item"
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={(e) => e.key === "Enter" && onAdd()}
        />
        <button className="button" onClick={onAdd}>Add</button>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  padding: 0 0.5rem;

  .input-container {
    display: flex;
    background: white;
    border-radius: 1rem;
    background: linear-gradient(45deg, #c5c5c5 0%, #ffffff 100%);
    box-shadow: 20px 20px 20px #d8d8d8, -10px -10px 20px #f8f8f8;
    padding: 0.2rem;
    gap: 0.2rem;
  }

  .input-container input {
    border-radius: 0.8rem 0 0 0.8rem;
    background: #e8e8e8;
    box-shadow: inset 13px 13px 10px #dcdcdc,
                inset -13px -13px 10px #f4f4f4;
    width: 50%;
    flex-basis: 75%;
    padding: 0.8rem;
    border: none;
    border-left: 2px solid #4998FF;
    color: #5e5e5e;
    transition: all 0.2s ease-in-out;
  }

  .input-container input:focus {
    border-left: 2px solid #4998FF;
    outline: none;
    box-shadow: inset 13px 13px 10px #BFF0FA, inset -13px -13px 10px #f4f4f4;
  }

  .input-container button {
    flex-basis: 25%;
    padding: 1rem;
    background: linear-gradient(135deg, #4998FF 0%, #4998FF 100%);
    font-weight: 900;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    color: white;
    border: none;
    width: 100%;
    border-radius: 0 1rem 1rem 0;
    transition: all 0.2s ease-in-out;
  }

  .input-container button:hover {
    background: linear-gradient(135deg, #BFF0FA 0%, #4998ffc4 100%);
  }

  @media (max-width: 500px) {
    .input-container {
      flex-direction: column;
    }

    .input-container input {
      border-radius: 0.8rem;
    }

    .input-container button {
      padding: 1rem;
      border-radius: 0.8rem;
    }
  }
`;

export default Input;
