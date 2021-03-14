import React, { FC } from 'react';
import classes from './ImageGallery.module.scss';
import useImageOrientation from '../../hooks/useImageOrientation';


interface ImageGalleryProps {
  imgsData: string[],
}

const ImageGallery:FC<ImageGalleryProps> = ({ imgsData }) => {
  // get array with image orientation classes depend by imgData
  const { imgOrientationClasses } = useImageOrientation(imgsData, classes);

  return (
    <div className={classes.gallery}>
      {imgsData.map((img, i) => {
        return (
          <img  
            alt       = ""
            key       = {i}
            src       = {img}
            className = {imgOrientationClasses[i]}
          />
        );
      })}
    </div>
  );
}

export default ImageGallery;