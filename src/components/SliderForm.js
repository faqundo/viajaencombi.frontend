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
                    
                </Carousel.Caption>
            </Carousel.Item>
            

        </Carousel>
    