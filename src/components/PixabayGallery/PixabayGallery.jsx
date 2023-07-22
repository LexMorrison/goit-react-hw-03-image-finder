import React from 'react';
import { getImages } from 'components/API services/ApiService';
import SearchBar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { LoadMoreButton } from './Button/Button';

class PixabayGallery extends React.Component {
  state = {
    search: '',
    page: 1,
    arrayImages: [],
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.fetchImages();
    }
  }

  handleFormSubmit = query => {
    this.setState({ search: query, page: 1, arrayImages: [] });
  };

  imagesNormalize = imagesArray => {
    return imagesArray.map(({ id, webformatURL, largeImageURL }) => {
      return { id, webformatURL, largeImageURL };
    });
  };

  LoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  fetchImages = async () => {
    const { search, page } = this.state;
    try {
      const data = await getImages(search, page);

      const dataValuable = this.imagesNormalize(data.hits);
      this.setState(prevState => ({
        arrayImages: [...prevState.arrayImages, ...dataValuable],
      }));
    } catch {}
  };

  render() {
    return (
      <div>
        <SearchBar onSubmit={this.handleFormSubmit} />
        <ImageGallery images={this.state.arrayImages} />
        <LoadMoreButton onClick={this.LoadMore} />
      </div>
    );
  }
}

export default PixabayGallery;
