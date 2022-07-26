import { Component } from "react";
import HornedBeast from './HornedBeast'
import Form from 'react-bootstrap/Form';

//https://react-bootstrap.github.io/layout/grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends Component{
    constructor(props){
        super(props);
        //both form components need access to each other's results
        this.state = {currentBeasts: this.props.beasts, searchBeasts: this.props.beasts, hornsBeasts: this.props.beasts};
    }

    //needed to combine both searches into a single setState
    filterBeasts(searchBeasts, hornsBeasts){
        //intersection between searchBeasts & hornsBeasts:
        const newBeasts = searchBeasts.filter(b => hornsBeasts.includes(b))
        this.setState({currentBeasts: newBeasts, searchBeasts: searchBeasts, hornsBeasts: hornsBeasts});
    }

    filterSearch(searchTerm){
        const regEx = new RegExp(searchTerm.replace(/\s*/g,""),  "i");
        return this.props.beasts.filter(b => regEx.test(b.title.replace(/\s*/g,"")) || regEx.test(b.keyword));
    }

    filterHorns(numberOfHorns){
        return this.props.beasts.filter(b => {
            if (numberOfHorns === "any"){
                return true;
            }
            return (b.horns === parseInt(numberOfHorns));
        });
       
    }

    //on search input change, filter on new search input but use prexisting horns list
    handleSearchInput = (e) => {
        const searchBeasts = this.filterSearch(e.target.value);
        this.filterBeasts(searchBeasts, this.state.hornsBeasts);
    }

    //on horns dropdown change, filter on new number of horns but use prexisting search bar list
    handleDropDown = (e) => {
        const hornsBeasts = this.filterHorns(e.target.value);
        this.filterBeasts(this.state.searchBeasts, hornsBeasts);
    }
    
    //I could have returned just a ul here, but thought why not leave it open for adding things in the future
    render(){
        return(
            <Container fluid>
                
              
                <Form style={{display: "flex", alignItems: "center", justifyContent: "center",  marginTop: "0.5rem"}}>
                    <Form.Label style={{fontWeight: "bold", fontSize: "200%"}}>Search: </Form.Label>
                    <Form.Control type="input" onChange={this.handleSearchInput} style={{width: "50%", marginLeft: "0.5rem", border: "solid blue 1px"}}/>
                    <Form.Label style={{fontWeight: "bold", fontSize: "200%", marginLeft: "0.5rem"}}>Horns: </Form.Label>
                    <Form.Select onChange={this.handleDropDown} style={{width: "30%", marginLeft: "0.5rem", border: "solid blue 1px"}}>
                        <option value="any">Any</option>
                        {/*set contains all the possible number of horns (without duplicating them), map to <option>*/}
                        {Array.from(new Set(this.props.beasts.map(b => b.horns))).map(h => {
                            return <option key={h.toString()} value={h}>{h}</option>
                        })}
                    </Form.Select>
                </Form>


                <Row xs={1} sm={2}md={3} lg={4} xl={5}>
                    {this.state.currentBeasts.map(b => 
                        <Col key={b._id.toString()} style = {{marginTop: '1rem'}}>
                            <HornedBeast 
                                handlePicClick={this.props.handlePicClick}
                                title={b.title}
                                image_url={b.image_url}
                                description={b.description}
                            />
                        </Col>
                    )}
                </Row>  
            </Container>
        );
    }
}

export default Main;