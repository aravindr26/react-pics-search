import ImageShow from "./ImageShow";
import './imageList.css';

function ImageList({images}) {

    const renderImages = images && images.length > 0 && images.map((image, index)=> {
        return  <div key={image.id}>
                    <ImageShow image={image}/>
                </div>;
    })
    return (
      <div className="image-list">
            {renderImages}
      </div>
    );
  }
  
  export default ImageList;
  