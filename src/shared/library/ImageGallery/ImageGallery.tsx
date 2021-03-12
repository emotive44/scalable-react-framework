import React, { FC } from 'react';
import classes from './ImageGallery.module.scss';


interface ImageGalleryProps {
  imgData: string[],
}


const ImageGallery:FC<ImageGalleryProps> = ({ imgData }) => {
  const imageOrientation = (src: string) => {
    const img = new Image();
    img.src = src;

    const width = img.width;
    const height = img.height;

    if(width > height && width > 1560) {
      return classes.panorama;
    }
    
    if(width > height) { 
      return classes.landscape; 
    } 

    if(height > width) {
      return classes.portrait;
    }
    
    if(height === width && width > 700) {
      return classes['big-square'];
    }

    if(height === width) {
      return classes.square;
    }

  }

  return (
    <div className={classes.gallery}>
      {imgData.map((img, i) => {
        return (
          <img  
            alt       = ""
            key       = {i}
            src       = {img}
            className = {imageOrientation(img)}
          />
        )
      })}
    </div>
  );
}

export default ImageGallery;