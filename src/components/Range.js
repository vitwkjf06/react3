import React from "react";

class Range extends React.Component
{
    state =
        {
            value: "32"
        }

    range = (event) => {
        this.setState({ vlaue:event.target.value });
    }
    render()
    {
        return (
            <>
                <input type="range" value={this.state.value}  onChange={ this.range } />
                <div>{this.state.value } </div>

            </>
        )
    }

}
export default Range;
