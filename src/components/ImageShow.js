function ImageShow({image}) {
    return (
      <div>
        <img className="image-item skelton skelton-image" src={image.urls.small} alt={image.alt_description} />
      </div>
    );
  }
  
  export default ImageShow;