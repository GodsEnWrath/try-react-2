import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props){
        super(props)

        this.initialState = {
            name:'',
            job:''
        }
        this.state = this.initialState
    }
    handleChange = event => {
        const {name, value} = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        const {name, job}= this.state
        return (
            <div>

                <form>
                <label>Name</label>    
                <input type="text" name="name" value={name} onChange={this.handleChange} ></input>
                <label>Job</label>
                <input type="text" name="job" value={job} onChange={this.handleChange}></input>
                </form> 
            </div>
        )
    }
}
