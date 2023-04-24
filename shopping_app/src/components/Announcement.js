import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    height: 30px;
    background-color: teal;
    color: white;
    ${mobile({
    width: "100% !important",
})}
`
const Announcement = () => {
    return (
        <Container>Super Deal! free Shipping on Orders Over $50</Container>
    );
}

export default Announcement;
