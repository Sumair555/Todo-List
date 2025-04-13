// src/components/Checkbox.js
import React from 'react';
import styled from 'styled-components';

const Checkbox = ({ checked, onChange }) => {
  return (
    <StyledWrapper>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
        />
        <span className="checkbox" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  label {
    display: block;
    width: 20px;
    height: 20px;
    cursor: pointer;
    position: relative;
  }

  input[type='checkbox'] {
    position: absolute;
    transform: scale(0);
  }

  input[type='checkbox']:checked ~ .checkbox {
    transform: rotate(45deg);
    width: 14px;
    margin-left: 5px;
    border-color: #24c78e;
    border-width: 5px;
    border-top-color: transparent;
    border-left-color: transparent;
    border-radius: 0;
  }

  .checkbox {
    display: block;
    width: inherit;
    height: inherit;
    border: solid 3px #2a2a2ab7;
    border-radius: 6px;
    transition: all 0.375s;
  }
`;

export default Checkbox;
