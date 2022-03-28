import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            farmerId: "",
            farmerName: "",
            gender: "",
            age: "",
            marital_Status: "",
           name1: "",
           age1: "",
           gender1: "",
           name2: "",
           age2: "",
           gender2: "",
           name3: "",
           age3: "",
           gender3: "",
           totalFamilyMembers: "",
      
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    farmerIdhandler = (event) => {
        this.setState({
            farmerId: event.target.value
        })
    }
    farmerNamehandler = (event) => {
        this.setState({
            farmerName: event.target.value
        })
    }

    genderhandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    }

    agehandler = (event) => {
        this.setState({
            age: event.target.value
        })
    }
    
    marital_Statushandler = (event) => {
        this.setState({
            marital_Status: event.target.value
        })
    }
    name1handler = (event) => {
        this.setState({
            name1: event.target.value
        })
    }

    gender1handler = (event) => {
        this.setState({
            gender1: event.target.value
        })
    }

    age1handler = (event) => {
        this.setState({
            age1: event.target.value
        })
    }
    name2handler = (event) => {
        this.setState({
            name2: event.target.value
        })
    }

    gender2handler = (event) => {
        this.setState({
            gender2: event.target.value
        })
    }

    age2handler = (event) => {
        this.setState({
            age2: event.target.value
        })
    }
    name3handler = (event) => {
        this.setState({
            name3: event.target.value
        })
    }

    gender3handler = (event) => {
        this.setState({
            gender3: event.target.value
        })
    }

    age3handler = (event) => {
        this.setState({
            age3: event.target.value
        })
    }


    handleSubmit = (event) => {
        alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
        console.log(this.state);
        this.setState({
           farmerId: "",
           farmerName: "",
           gender: "",
           age: "",
           marital_Status: "",
           name1: "",
           age1: "",
           gender1: "",
           name2: "",
           age2: "",
           gender2: "",
           name3: "",
           age3: "",
           gender3: "",
           totalFamilyMembers: "",
        })
     event.preventDefault()
        
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h2>Farmer Detail </h2>
                    <label>farmerId :</label> <input type="number" value={this.state.farmerId} onChange={this.farmerIdhandler} placeholder="FarmerID..." /><br />
                    <label>farmerName :</label> <input type="text" value={this.state.farmerName} onChange={this.farmerNamehandler} placeholder="FarmerName..." /><br />
                    <label>LastName :</label> <input type="text" value={this.state.lastName1} onChange={this.last1handler} placeholder="LastName..." /><br />
                    <label>Gender :</label><select onChange={this.gender1handler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <label>age :</label> <input type="number" value={this.state.age} onChange={this.agehandler} placeholder="Age..." /><br />
                    <label>maritalStatus :</label><select onChange={this.marital_Status} defaultValue="Select Status">
                        <option defaultValue>Select marital_Status</option>
                        <option value="married">Married</option>
                        <option value="unmarried">Unmarried</option>
                    </select><br />

                    <h2>FamilyDetails</h2>

                    <h3>husband/wife</h3>

                    <label>fullName :</label> <input type="text" value={this.state.name1} onChange={this.name1handler} placeholder="Name..." /><br />
                    <label>age :</label> <input type="number" value={this.state.age1} onChange={this.age1handler} placeholder="Age..." /><br />
                    <label>Gender :</label><select onChange={this.gender1handler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />

                    <h3>ChildDetail</h3>

                    <label>fullName :</label> <input type="text" value={this.state.name2} onChange={this.name2handler} placeholder="Name..." /><br />
                    <label>age :</label> <input type="number" value={this.state.age2} onChange={this.age2handler} placeholder="Age..." /><br />
                    <label>Gender :</label><select onChange={this.gender2handler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />

                    <label>fullName :</label> <input type="text" value={this.state.name3} onChange={this.name3handler} placeholder="Name..." /><br />
                    <label>age :</label> <input type="number" value={this.state.age3} onChange={this.age3handler} placeholder="Age..." /><br />
                    <label>Gender :</label><select onChange={this.gender3handler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br />
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
