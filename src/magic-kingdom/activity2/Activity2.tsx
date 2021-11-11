import React from 'react';
import styled from "styled-components";

const Styles = styled.div`
  color: blue;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
  }
`;

function Activity2() {
  return (
    <Styles>
      <div className="container">
        Hello from Activity 2 Magic Kingdom
      </div>
    </Styles>
  )
}

export default Activity2