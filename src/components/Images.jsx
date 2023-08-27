import React, { useEffect, useState } from "react";
import imagesData from "../assets/imagesData.json";
import axios from "axios";

const Images = () => {
  const apiKey = "17465133659b4aacb8d1beab584dcc48";
  const query = "mountain";
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const { data } = await axios.get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
        );
      setImages(data.photos.photo);
      console.log(data.photos.photo);
    };
    fetchImages();
  },[]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-4xl mx-auto gap-4 mt-8">
   {
   
    images.map((image) => {

      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <img src={url} key={id} alt={title}/>
    })
    
   }
    </div>
  );
};
export default Images;




