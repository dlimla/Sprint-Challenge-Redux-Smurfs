import React from 'react';

export default class AddSmurf extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            height: "",
            age: ""
        }
    }


    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    addSmurf = e => {
        e.preventDefault();
        const [name,age,height] = [
            this.state.name,
            this.state.age,
            this.state.height
        ]
        this.props.addSmurf({name,age,height});
        this.setState({
            name: "",
            age:"",
            height:""
        })
    }


    render() {
        return (
            <form onSubmit = {this.addSmurf}>
                Name: <input
                    type="text"
                    placeholder="Name"
                    onChange={this.handleChange}
                    name="name"
                    value = {this.state.name}
                /><br/>
                Age: <input
                    type="text"
                    placeholder="Age"
                    onChange={this.handleChange}
                    name="age"
                    value = {this.state.age}
                /><br/>
                Heght: <input
                    type="text"
                    placeholder="Heght"
                    onChange={this.handleChange}
                    name="height"
                    value = {this.state.height}
                /><br/>
                <button>Submit</button>
            </form>
        )
    }
}