import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({
        flexDirection: "column"
    })}
`
const Left = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`

const Logo = styled.h1``
const Description = styled.p`
    margin: 20px 0px;
`
const SocialContainer = styled.div`
    display: flex;
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`
const Center = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({
        display: "none"
    })}

`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`
const Right = styled.div`
    flex:1;
    padding: 20px;
    ${mobile({
        backgroundColor: "#fff8f8"
    })}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`

const Payment = styled.img`
    width: 100%;
`
const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>LAMA</Logo>
                <Description>There are many variations of passengers of lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slighly believable</Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>HOME</ListItem>
                    <ListItem>CART</ListItem>
                    <ListItem>MAN FASHION</ListItem>
                    <ListItem>WOMAN FASHION</ListItem>
                    <ListItem>ACCESSORIES</ListItem>
                    <ListItem>MY ACCOUNT</ListItem>
                    <ListItem>ORDER TRACKING</ListItem>
                    <ListItem>WHISHLIST</ListItem>
                    <ListItem>TERMS</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> 622 Divine Path, South Tobinchester 95743
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +1 546 54 67
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}}/> contact@lama.dev
                </ContactItem>
                <Payment src="data:image/jpeg;base64,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" />
            </Right>
        </Container>
    );
}

export default Footer;
