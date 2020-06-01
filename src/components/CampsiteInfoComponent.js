import React from "react";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CampsiteInfo extends React.Component{
    
    renderCampsite(campsite){
        return(
            <div className="col-md-5 m-1">
                <Card>
                <CardImg top src={campsite.image} alt={campsite.name} />
                <CardBody>
                <CardTitle>{campsite.name}</CardTitle>
                <CardText>{campsite.description}</CardText>
                </CardBody>
                </Card></div>
        )

    }


    renderComments(comments){
        if (comments){
         return(<div className="col-md-5 m-1"><h4>Comments</h4>
         {comments.map(commentItem => {
             return(<div>
                 <p>{commentItem.text}</p>
                 <p>{commentItem.author}
                 {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(commentItem.date)))}</p>
                 </div>)
         }) }
         </div>)
        
    }
    return(<div>Test no comments found</div>)
}


    render(){
        let returnData;

    
        if(this.props.campsite){
            console.log("I found my campsite info");
            returnData= (
                <div className="container">
            <div className="row">
                {this.renderCampsite(this.props.campsite)}
                {this.renderComments(this.props.campsite.comments)}
                </div>
                </div>
            )
           

        } else{
                console.log("No campsite info found");
                returnData= <div><h3>empty</h3></div>;
                }
        
        return returnData;
     }
}

export default CampsiteInfo