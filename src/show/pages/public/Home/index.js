import React, { useEffect, useState } from 'react';
import { Navbar } from '../../../components';
import cong from '../../../../process/firebase/configuration';
import { listAll, getStorage, ref, getDownloadURL } from "firebase/storage";

const Home = () => {
  const [imageUrls, setImageUrls] = useState([]);
  const app = cong();
  const storage = getStorage(app);
  const listRef = ref(storage, '');

  useEffect(() => {
    listAll(listRef)
      .then(async (res) => {
        const urls = await Promise.all(
          res.items.map((itemRef) => getDownloadURL(itemRef))
        ); 
        setImageUrls(urls);
      })
      .catch((error) => {
        console.error("Error fetching image URLs:", error);
      });
  }, []);

  return (
    <div className='h-full bg-gray-300 w-screen'>
      <Navbar />
      <div className="grid grid-cols-3 gap-4 mt-10">
        {imageUrls.map((url, index) => (
          <img
            key={index} src={url} alt={`image-${index}`} className="w-full h-auto mix-blend-darken object-cover	" />
        ))}
      </div>
    </div>
  );
};

export default Home;
