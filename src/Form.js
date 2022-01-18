import React from 'react';

export default class Form extends React.Component {
    state = {
        firstName: '',
        lastName:'',
        gender:''
    }

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            firstName: '',
            lastName:'',
            gender:''
        })
    };

    render(){
        return(
            <div className="create">
            <form>
                <label>First Name : </label>
                <input name="firstName" placeholder='firstName' value={this.state.firstName} onChange={e => this.change(e)}></input> <br/>
                <label>Last Name: </label>
                <input name="lastName" placeholder='lastName' value={this.state.lastName} onChange={e => this.change(e)}></input> <br/>
                <label>Gender: </label>
                <input name="gender" placeholder='gender' value={this.state.gender} onChange={e => this.change(e)}></input> <br/>
                <button onClick={e=> this.onSubmit(e)}>Submit</button>
            </form>
        </div>
        );
    }
}