import { Component } from "react";

//https://react-bootstrap.github.io/components/cards/
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends Component{
    constructor(){
        super();
        this.state = {favorited: 0};
    }

    handleClick = (e) => {
        this.setState({favorited: this.state.favorited + 1});
    }

    handlePicClick = (e) => {
        this.props.handlePicClick(this);
    }

    render(){
        return(
            //wrapping in an anchor to make whole card clickable: https://stackoverflow.com/questions/53973644/making-whole-card-clickable-in-reactstrap
            <Card className="horned-beast" style={{height: '100%'}}>
                {/*Changed to <img> dom element instead of Card.Image so can use onClick without generating warning*/}
                <img src={this.props.image_url} alt={this.props.title} onClick={this.handlePicClick}></img>
                <Card.Body>
                    
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}                           
                    </Card.Text>
                    <Card.Text>
                    ❤: {this.state.favorited}                         
                    </Card.Text>
                    
                    <Button 
                        variant="primary" 
                        size="lg" 
                        style={{width: "100%"}}
                        onClick= {this.handleClick}
                        >
                            Vote Favorite
                    </Button>
                </Card.Body>
            </Card>
            
            
        );
    }
}

export default HornedBeast;