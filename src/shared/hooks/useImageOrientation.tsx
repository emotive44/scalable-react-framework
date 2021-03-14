import React, { useEffect, useState } from 'react';


const useImageOrientation = (imgsData: string[], classes: any) => {
  const [imgOrientationClasses, setImgOrientationClasses] = useState<string[]>([]);

  // return image width and height, after image loaded
  const getImgSizes = (src: string) => {
    const img = new Image();
    img.src = src;
  
    return new Promise<number[]>((resolve) => {
      img.onload = () => {
        resolve([img.width, img.height]);
      }
    });
  }
  
  // waited for image to be loaded and depends of width and height
  // return css module class (orientation)
  const imageOrientation = async (src: string, classes: any) => {
    const [width, height] = await getImgSizes(src);
   
    if(width > height && width > 1560) {
      return classes.panorama;
    } else if(width > height) { 
      return classes.landscape; 
    } else if(height > width) {
      return classes.portrait;
    } else if(height === width && width > 700) {
      return classes['big-square'];
    } else if(height === width) {
      return classes.square;
    }
  }
  

  useEffect(() => {
    // array with promises, which result is image class
    const data: Promise<string>[] = imgsData.map(async(img) => {
      return await imageOrientation(img, classes);
    });

    (async() => {
      for(let i = 0; i < data.length; i++) {
        const imageClass = await data[i];
        setImgOrientationClasses((prev) => [...prev, imageClass]);
      }
    })();
  }, []); 

  return {
    imgOrientationClasses,
  };
}

export default useImageOrientation;
