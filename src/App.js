import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
//As required in Feature 1 of Lab: Class 03, JSON import has been moved to App
import beastJSON from './data.json';
import { Component } from "react";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {currentPic: null, currentTitle: null, modalShowing: false};
  }

  handlePicClick = (aBeast) => {
    this.setState({currentPic: aBeast.props.image_url, currentTitle: aBeast.props.title, modalShowing: true})

  }

  closeModal = () => {
    this.setState({modalShowing: false});
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Main beasts={beastJSON} handlePicClick={this.handlePicClick}/>
        <SelectedBeast picURL = {this.state.currentPic} title={this.state.currentTitle} closeModal = {this.closeModal} showing={this.state.modalShowing}/>
        <Footer />
      </div>
    );
  }
}

export default App;