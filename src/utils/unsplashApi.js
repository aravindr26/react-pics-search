
const searchImages = async (searchText) => {
    const response =  await fetch('https://api.unsplash.com/search/photos?query=' + searchText, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "unsplash API key"
        }
    });

    return await response.json();
}

export default searchImages;