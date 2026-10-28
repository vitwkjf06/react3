import React from "react"

class Hello extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            text:"Hello",
            button:"Перевести"
        }
    }
    translate = () =>
    {
        this.setState({text: this.state.text == "Привет" ? "Hello": "Привет"});
        this.setState({button: this.state.text == "Перевести" ? "Translate": "Перевести"});
    }
    render()
    {
        return(
            <>
                <h2>{this.state.text}</h2>
                <button onclick ={this.translate}>{this.state.button}</button>    
            </>  
        )
    }
}
export default Hello;