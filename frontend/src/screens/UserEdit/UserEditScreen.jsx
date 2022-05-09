import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
    Form,
    Button,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message/Message'
import Loader from '../../components/Loader/Loader'
import FormContainer from '../../components/FormContainer/FormContainer'
import { getUserDetails, updateUser } from '../../actions/userActions'
import { USER_UPDATE_RESET } from './../../constants/userConstants'
import Meta from '../../components/Helmet/Meta'

const UserEditScreen = ({ match, history }) => {

    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [cropSelection, setCropSelection] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [motherName, setMotherName] = useState('')
    const [spouseName, setSpouseName] = useState('')
    const [country, setCountry] = useState('')
    const [province, setProvince] = useState('')
    const [address, setAddress] = useState('')
    const [gender, setGender] = useState('')
    const [maritalStatus, setMaritalStatus] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, user, error } = userDetails

    const userUpdate = useSelector(state => state.userUpdate)
    const { loading: loadingUpdate, success: successUpdate, error: errorUpdate } = userUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: USER_UPDATE_RESET })
            history.push('/admin/userList')
        } else {
            if (!user.name || user._id !== userId) {
                dispatch(getUserDetails(userId))
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
                setIsAdmin(user.isAdmin)
            }
        }
    }, [user, userId, dispatch, successUpdate, history])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(updateUser({ _id: userId, name, email, cropSelection, fatherName, motherName, spouseName, maritalStatus, gender, country, province, address, isAdmin }))
    }

    return (
        <>
            <Meta
                title="बारी | Admin User Edit"
            />
            <FormContainer>
                <h1 style={{ marginTop: '120px' }}>Edit User</h1>
                <Link to='/admin/userList' className="btn btn-light my-2">GO BACK</Link>
                {loadingUpdate && <Loader />}
                {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
                {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>
                    : (
                        <Form onSubmit={submitHandler} style={{ marginBottom: '50px' }}>
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
                            <Form.Group controlId='fatherName'>
                                <Form.Label>Father Name (optional)</Form.Label>
                                <Form.Control
                                    type="name"
                                    placeholder="Enter Father Name               "
                                    value={fatherName}
                                    onChange={(e) => setFatherName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='motherName'>
                                <Form.Label>Mother Name (optional)</Form.Label>
                                <Form.Control
                                    type="name"
                                    placeholder="Enter Mother Name               "
                                    value={motherName}
                                    onChange={(e) => setMotherName(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='spouseName'>
                                <Form.Label>Spouse Name (optional)</Form.Label>
                                <Form.Control
                                    type="name"
                                    placeholder="Enter Spouse Name               "
                                    value={spouseName}
                                    onChange={(e) => setSpouseName(e.target.value)}
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
                            <Form.Group controlId='country'>
                                <Form.Label>Country <span style={{ color: 'red' }}>*</span></Form.Label>
                                <Form.Control
                                    type="name"
                                    placeholder="Enter Country Name"
                                    value={country}
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
                            <Form.Group controlId='address'>
                                <Form.Label>Address <span style={{ color: 'red' }}>*</span></Form.Label>
                                <Form.Control
                                    type="name"
                                    placeholder="Enter Address"
                                    value={address}
                                    required
                                    onChange={(e) => setAddress(e.target.value)}
                                ></Form.Control>
                            </Form.Group>
                            <Form.Group controlId='isAdmin'>
                                <Form.Check
                                    type="checkbox"
                                    label="Is Admin"
                                    value={isAdmin}
                                    checked={isAdmin}
                                    onChange={(e) => setIsAdmin(e.target.checked)}
                                ></Form.Check>
                            </Form.Group>
                            <Button type="submit" variant="primary">Update</Button>
                        </Form>
                    )
                }
            </FormContainer>
        </>
    )
}

export default UserEditScreen
