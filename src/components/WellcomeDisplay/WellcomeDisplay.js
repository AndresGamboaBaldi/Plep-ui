import React from 'react';
import {Card} from 'react-bootstrap';
import './WellcomeDisplay.css';

export default function WellcomeDisplay(){
    return(
        <Card className="text-center cardDisplay">
            <Card.Header className="headerDisplay">Plep</Card.Header>
            <Card.Img src={process.env.PUBLIC_URL + '/play-icon.png'} className="imageDisplay"/>
            <Card.Body className="bodyDisplay">Disfruta de todo nuestro contenido directo en tus manos</Card.Body>
        </Card>
    );
}