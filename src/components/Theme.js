import React from 'react'; 

import styled from "styled-components";

const Select = styled.select`
    margin: 2rem 0.5rem;
    padding 0rem 0.5rem;

    font-family:Roboto;
    font-size:1rem;

    border: 1px solid ${props => props.theme.light};
    box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
    background: ${props => props.theme.light};
    border-radius: 2px;
`;

const SelectOption = styled.option`
    font-family:Roboto;
    font-size:1rem;
`;

const SelectTheme = ({handleTheme}) => (
    <div>
        <Select onChange={handleTheme} >
            <SelectOption value="theme_one" >Theme one</SelectOption>
            <SelectOption value="theme_two" >Theme two</SelectOption>

        </Select>
    </div>
)

export default SelectTheme;






