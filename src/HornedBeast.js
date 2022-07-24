import React from "react";
import Main from "./Main";
class hornedbeast extends React.Component{
render(){
return(

  <div className="hornedbest" title={this.props=title}>
      <>

        
<h2>{this.props.title}</h2>
<img alt={this.props.keyword} src={this.props.image_url} title={this.props.title}></img>
            <p>{this.props.description}</p>



      </>
  </div>
)
  

}

}


export default hornedbeast;