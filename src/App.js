import { useState } from "react";

import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./utils/unsplashApi";

function App() {

  const [images, setImages] = useState([]);

  const handleChange = async(searchText) => {
    const response = await searchImages(searchText);
    if(response && response.results && response.results.length > 0) {
      setImages(response.results);
    }
  }

  return (
    <div className="">
        
        <SearchBar searchImage={handleChange}/>
        <ImageList images={images}/>
    </div>
  );
}

export default App;
