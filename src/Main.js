import React from "react";
// import HornedBeast from "./HornedBeast";
import data from "./data.json";
import Cards from "./Cards";

class Main extends React.Component {
    render () {
        return (
            data.map( element => {
                return (
                    <div className="Arr" key={element._id}>


                            <Cards className="indCard" title={element.title} imgLink={element.image_url} imgAlt= {element.title} imgtitle= {element.imgtitle} description={element.description} horns= {element.horns}/>
                    </div>
                )
            })
           
        )
    }
}

export default Main