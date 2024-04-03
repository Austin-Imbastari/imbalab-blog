import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CardVariants } from '../utils/animations';
import { Link } from 'react-router-dom';

//this is where we will handle the data projects
type ProjectProp = {
  createdAt: string;
  name: string;
  description: string;
  github: string;
  liveDemo: string;
  category: string;
  mediaId: string;
  blogId: string;
};

const ProjectCards = ({
  createdAt,
  name,
  description,
  github,
  liveDemo,
  category,
  mediaId,
  blogId,
}: ProjectProp) => {
  const [imgId, setImgId] = useState<string>('');
  const fetchImageData = async (mediaId: string) => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/media/${mediaId}`;
      const res = await fetch(url);
      const data = await res.json();
      setImgId(data.url);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchImageData(mediaId);
  }, [mediaId]);
  console.log('imgId', `${import.meta.env.VITE_API_URL}${imgId}`);
  return (
    <motion.div
      variants={CardVariants}
      className="card w-96 bg-base-100 border border-[#818bf64d]  shadow-xl mb-6 flex flex-col overflow-hidden h-full "
    >
      <Link to={'/blog/' + blogId}>
        <figure>
          <div>
            {imgId && (
              <img
                src={`${import.meta.env.VITE_API_URL}${imgId}`}
                alt={name}
                className="h-60 object-fit rounded-lg hover:scale-105 duration-200"
              />
            )}
          </div>
        </figure>
      </Link>
      <div className="card-body flex flex-col justify-between">
        <div>
          <p className="card-normal text-[#818bf6]"> {createdAt}</p>
          <h2 className="card-title">
            {name}
            <div className="badge  border-gradient p-3">{category}</div>
          </h2>
          <p>{description}</p>
        </div>
        <div className="card-actions mt-3 flex justify-end ">
          <div className="badge badge-outline p-4 hover:text-white">
            <a href={github} target="_blank">
              Source Code
            </a>
          </div>
          <div className="badge badge-outline p-4 hover:text-white">
            <a href={liveDemo} target="_blank">
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </motion.div>

    // <motion.div
    //   variants={CardVariants}
    //   className="max-w-sm bg-base-100  border border-[#818bf672] overflow-hidden rounded-lg shadow-xl mb-6"
    // >
    //   <Link to={'/blog/' + blogId}>
    //     <img
    //       src={`${import.meta.env.VITE_API_URL}${imgId}`}
    //       alt={name}
    //       className="h-60 object-fit rounded-lg hover:scale-105 duration-200 "
    //     />
    //   </Link>
    //   <div className="card-body flex flex-col justify-between">
    //     <div>
    //       <p className="card-normal text-[#818bf6]"> {createdAt}</p>
    //       <h2 className="card-title">
    //         {name}
    //         <div className="text-md badge border-gradient p-3">{category}</div>
    //       </h2>
    //       <p>{description}</p>
    //     </div>
    //     <div className="card-actions mt-3 flex justify-end">
    //       <div className="badge badge-outline p-4">
    //         <a href={github} target="_blank">
    //           Source Code
    //         </a>
    //       </div>
    //       <div className="badge badge-outline p-4">
    //         <a href={liveDemo} target="_blank">
    //           Live Demo
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </motion.div>
  );
};

export default ProjectCards;
