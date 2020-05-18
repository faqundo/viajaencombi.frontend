import React from "react";
import Carousel from 'react-bootstrap/Carousel';



export default (props) =>
   

        <Carousel >

            <Carousel.Item  >
                <img
                    className="d-block w-100"
                    src={props.slider1}
                    alt="First slide"
                    style={{'borderRadius':'5px'}}
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.slider2}
                    alt="Third slide"
                    style={{'borderRadius':'5px'}}
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.slider3}
                    alt="Third slide"
                    style={{'borderRadius':'5px'}}
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={props.slider4}
                    alt="First slide"
                    style={{'borderRadius':'5px'}}
                />
                <Carousel.Caption>
                    <h3>Four slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    