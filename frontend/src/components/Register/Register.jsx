import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Form,
    Button,
    Row,
    Col
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Message/Message'
import Loader from '../Loader/Loader'
import FormContainer from '../FormContainer/FormContainer'
import { register } from '../../actions/userActions'
import Meta from '../Helmet/Meta'

const Register = ({ location, history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cropSelection, setCropSelection] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [motherName, setMotherName] = useState('')
    const [spouseName, setSpouseName] = useState('')
    const [country, setCountry] = useState('Nepal')
    const [province, setProvince] = useState('Province 1')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('Male')
    const [maritalStatus, setMaritalStatus] = useState('Single')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userRegister = useSelector(state => state.userRegister)
    const { loading, userInfo, error } = userRegister
    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if (userInfo) {
            history.push(redirect)
        }
    }, [userInfo, history, redirect])

    const submitHandler = (e) => {

  
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password, cropSelection, fatherName, motherName, spouseName, gender, maritalStatus, country, address, province))
        }
    }

    return (

        <FormContainer>
            <Meta
                title="Bari | Register"
            />
            <h1 style={{ marginTop: '120px' }}>Sign Up</h1>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col md={6}>
                        <Form.Group controlId='name'>
                            <Form.Label>Name <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter name"
                                value={name}
                                required
                                onChange={(e) => setName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='email'>
                            <Form.Label>Email Address / NIC <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="nic"
                                placeholder="Enter email or NIC"
                                value={email}
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='cropSelection'>
                            <Form.Label>Crop Selection (optional)</Form.Label>
                            <Form.Control
                                type="cropSelection"
                                placeholder="Enter crop               "
                                value={cropSelection}
                                onChange={(e) => setCropSelection(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        
                        <Form.Group controlId='motherName'>
                            <Form.Label>Mother Name </Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Mother Name"
                                value={motherName}
                                
                                onChange={(e) => setMotherName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='country'>
                            <Form.Label>Country <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Nepal"
                                value={"Nepal"}
                                required

                                onChange={(e) => setCountry(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label >Select Province</Form.Label>

                        <div className='container  p-1'>
                <select Classname="custom select" 
                required
                onChange={(e) => {
                    const selectedProvince = e.target.value;
                    setProvince(selectedProvince)
                }}
                
                >
                
    
                <option value="Province 1" >Province 1</option>
                    <option value="Bagmati" > Bagmati </option>
                    <option value="Madesh" > Madesh </option>
                    <option value="Gandaki" > Gandaki </option>
                    <option value="Lumbini" > Lumbini </option>
                    <option value="Karnali" > Karnali </option>
                    <option value="Sudarpashchim" > Sudarpaschim </option>
                    </select>
                
                    </div>
                    </Form.Group>
                        <Form.Group>
                        <Form.Label >Select Your Marital Status</Form.Label>

                        <div className='container  p-1'>
                <select Classname="custom select" 
                 required
                onChange={(e) => {
                    const selectedMaritalStatus = e.target.value;
                    setMaritalStatus(selectedMaritalStatus)
                }}
                
                >
                
        
        
                    <option value="Single" >Single</option>

                    <option value="Married" > Married </option>
                    </select>
                    
                    </div>
                    </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group controlId='password'>
                            <Form.Label>Password <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>Confirm password <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                required
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='fatherName'>
                            <Form.Label>Father Name </Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Father Name"
                                value={fatherName}
                                
                                onChange={(e) => setFatherName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        
                        <Form.Group controlId='spouseName'>
                            <Form.Label>Spouse Name </Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Spouse Name"
                                value={spouseName}
                                
                                onChange={(e) => setSpouseName(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='address'>
                            <Form.Label>Address Line<span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter your full Address"
                                value={address}
                                required
                                onChange={(e) => setAddress(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group>
                        <Form.Label >Select Gender</Form.Label>

                        <div className='container  p-1'>
                <select Classname="custom select" 
                 required
                onChange={(e) => {
                    const selectedGender = e.target.value;
                    setGender(selectedGender)
                }}
                
                >
                
        
        
                    <option value="Male" >Male</option>
                    
                    <option value="Female" > Female </option>
                    </select>
                    
                    </div>
                    </Form.Group>
                        
                        <Button type="submit" variant="primary">Register</Button>
                    </Col>
                </Row>
            </Form>
            
            <Row className='py-3'>
                <Col style={{ marginBottom: '30px' }}>
                    Have an Account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default Register
