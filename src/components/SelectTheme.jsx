import React from 'react'
import styled from 'styled-components';


const Select = styled.select`
    margin: 2rem 0.5rem;
    padding: 0rem 0.5rem;
    font-family: Roboto;
    font-size: 1rem;
`;

const SelectOp = styled.option`
    font-family: Roboto;
    font-size: 1rem;
`

const SelectTheme = ({handleTheme}) => (
    <div>
        <Select onChange={handleTheme}>
            <SelectOp value="theme_one">Theme one</SelectOp>
            <SelectOp value="theme_two">Theme two</SelectOp>
        </Select>
    </div>
)

export default SelectTheme