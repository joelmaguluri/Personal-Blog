import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
`;


ReactDOM.render(<Main/>, document.getElementById('root'));
