// import { Link } from "@material-ui/core";
import {
  MailOutline,
  Phone,
  
  Room,
  
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
  background-color: #F1E1A6;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;



const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

// const Payment = styled.img`
//     width: 50%;
// `;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AIMS.</Logo>
        <Desc>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        </Desc>
        
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem><Link to="/">Home</Link></ListItem>
          <ListItem><Link to="/addcrop">Add Crops</Link></ListItem>
          <ListItem><Link to="/products">View Crops</Link></ListItem>
          <ListItem><Link to="/login">Login</Link></ListItem>
          <ListItem><Link to="/register">Register</Link></ListItem>
          <ListItem><Link to="/home">My Account</Link></ListItem>
          <ListItem><Link to="/home">Comming Soon..</Link></ListItem>
          
        </List>
      </Center>
      <Right>
        <Title>Contact Us</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> Naxal , Kathmandu
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +977 9812345678
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@aims.org
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
