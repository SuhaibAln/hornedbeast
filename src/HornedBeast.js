import React from "react";
class HornedBeast extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            votes: 0
        }
    }

    handleClick = () => {
        this.setState({votes: this.state.votes + 1})
      }


    render() {
        return (
            <div>

                <h2 className="Title">{this.props.title}</h2>

                <img className="Img" src={this.props.imgurl} alt={this.props.img} title={this.props.imgTitle} onClick={this.handleClick}/>

                <p> {this.props.description},  ❤{this.state.Counter} Horns: {this.props.horns}</p>

            </div>

        )
    }
}

export default HornedBeast