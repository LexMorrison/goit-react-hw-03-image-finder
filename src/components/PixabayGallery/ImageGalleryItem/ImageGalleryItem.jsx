import React from 'react';

class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };
  render() {
    return (
      <li className="gallery-item">
        <img src={this.props.depiction.webformatURL} alt="depiction" />
      </li>
    );
  }
}

export default ImageGalleryItem;
