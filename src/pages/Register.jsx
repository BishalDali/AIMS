import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://cdn.pixabay.com/photo/2020/07/13/08/15/cereals-5399962_960_720.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Option = styled.option``;

const FilterText = styled.span`
  // font-size: 20px;
  // font-weight: 600;
  // margin-right: 20px;
  flex: -1;
  min-width: 10%;
  margin: 20px 10px 0px 0px;
  padding: 1px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 80px;
  margin-top: 15px;
  ${mobile({ margin: "10px 0px" })}
`;





const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Age" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password"/>
          {/* <Input placeholder="Confirm Password" type="password"/> */}
         
          <Input placeholder="Father's Name" />
          <Input placeholder="Mother's Name" />
          <Input placeholder="Spouse's Name" />
          <FilterText>Gender:</FilterText>
          <Select name="Marital Status">
            <Option>Male</Option>
            <Option>Female</Option>
          </Select>
          <FilterText>Marital Status:</FilterText>
          <Select name="Marital Status">
            <Option>Single</Option>
            <Option>Married</Option>
            <Option>Widowed</Option>
            <Option>Divorced</Option>
          </Select>
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
