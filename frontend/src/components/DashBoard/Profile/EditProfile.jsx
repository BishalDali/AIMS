import React, { useState, useEffect } from 'react'
import {
    Form,
    Button,
    Row,
    Col,
    Container,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from './../../../components/Message/Message'
import Loader from './../../../components/Loader/Loader'
import { getUserDetails, updateUserProfile } from './../../../actions/userActions'
import { listMyOrders } from './../../../actions/orderAction'

const EditProfile = ({ history }) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cropSelection, setCropSelection] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [motherName, setMotherName] = useState('')
    const [spouseName, setSpouseName] = useState('')
    const [country, setCountry] = useState('')
    const [province, setProvince] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, user, error } = userDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile

    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (user.name) {
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
                setCropSelection(user.cropSelection)
                setFatherName(user.fatherName)
                setMotherName(user.motherName)
                setSpouseName(user.spouseName)
                setGender(user.gender)
                setMaritalStatus(user.maritalStatus)
                setCountry(user.country)
                setProvince(user.province)
                setAddress(user.address)
            }
        }
    }, [userInfo, history, user, dispatch])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password, cropSelection, fatherName, motherName,spouseName, gender,maritalStatus, country,province,address }))
        }
    }

    return (
        <Container style={{ marginBottom: '50px', marginTop: '20px' }}>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'>Profile Updated!</Message>}
            {loading && <Loader />}
            <Form onSubmit={submitHandler}>
                <Row>
                    <Col md={5}>
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
                                type="email"
                                placeholder="Enter email or NIC"
                                value={email}
                                
                                onChange={(e) => setEmail(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='cropSelection'>
                            <Form.Label>Crop Selection (optional)</Form.Label>
                            <Form.Control
                                type="cropSelection"
                                placeholder="Enter cropSelection"
                                value={cropSelection}
                                onChange={(e) => setCropSelection(e.target.value)}
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
                        <Form.Group controlId='motherName'>
                            <Form.Label>Mother Name </Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Mother Name"
                                value={motherName}
                            
                                onChange={(e) => setMotherName(e.target.value)}
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
                
        
        
                    <option value="Single" >Single </option>
                    

                    <option value="Married" > Married </option>
                    </select>
                    
                    </div>
                    
                            </Form.Group>
                    </Col>
                    <Col md={5}>
                        <Form.Group controlId='password'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Enter password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group controlId='confirmPassword'>
                            <Form.Label>Confirm password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                        
                        <Form.Group controlId='country'>
                            <Form.Label>Country <span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter your country Name"
                                value={country}
                               
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
                        <Form.Group controlId='address'>
                            <Form.Label>Address Line<span style={{ color: 'red' }}>*</span></Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="Enter your full Address"
                                value={address}
                                
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
                        
                    </Col>
                </Row>
                <Button type="submit" variant="primary">Update</Button>
            </Form>
        </Container>
    )
}

export default EditProfile 
