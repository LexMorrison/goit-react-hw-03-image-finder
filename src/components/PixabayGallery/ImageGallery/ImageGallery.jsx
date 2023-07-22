import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="gallery">
      {images.map(image => {
        return (
          <ImageGalleryItem key={image.id} depiction={image}></ImageGalleryItem>
        );
      })}
    </ul>
  );
};
