import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';

class Directory extends Component {


    // renderSelectedCampsite(campsite) {
    //     if (campsite) {
    //         return (
    //             <Card>
    //                 <CardImg top src={campsite.image} alt={campsite.name} />
    //                 <CardBody>
    //                     <CardTitle>{campsite.name}</CardTitle>
    //                     <CardText>{campsite.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     }
    //     return <div />;
    // }
                
    

    render() {
        const directory = this.props.campsites.map(campsite => {
            return (
                <div key={campsite.id} className="col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(campsite.id)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {directory}
                    
                </div>
                
                {/*<div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
        </div>*/}
            </div>

        );
    }
}

export default Directory;
