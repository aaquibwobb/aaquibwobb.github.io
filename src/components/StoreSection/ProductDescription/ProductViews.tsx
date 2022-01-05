import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/styles';
import ProductImageArray from "./ProductImageArray";

const myStyles = makeStyles(() => ({
    imgSize: {
        height: '33vh',
    },
}));

const Carsoul = () => {
    const classes = myStyles();
    return (
        <div className="carouselslide">
            <Carousel className="slidecontainer"  >
                {ProductImageArray.map((imgUrl, index) => {
                    return (
                        <div className={classes.imgSize}>
                            <img src={imgUrl.image} alt="img" height="vh" />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
};
export default Carsoul;
