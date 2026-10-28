import React from "react";

class Form extends React.Component
{
    state =
    {
        lastName: "",
        firstName: "",
        email: ""
    }

    update = (event) =>
    {
        this.setState({[event.target.name]: event.target.value});
    }
    render()
    {
        return(
            <>
                <form>
                    <input value={this.state.lastName} name="lastName" onChange={this.update} />
                    <input value={this.state.firstName} name="firstName" onChange={this.update} />
                    <input value={this.state.email} name="email" onChange={this.update} />
                </form>
                 <p>{this.state.lastName} {this.state.firstName} {this.state.email}</p>
               
            </>

        )
    }
}
export default Form;