import { useEffect, useState } from 'react';
import ProjectCards from '../components/ProjectCards';
import star from '/images/star.svg';

type Hero = {
  description: string;
  github: string;
  livedemo: string;
  media: string;
  shortDescription: string;
};

type CombinedType = {
  blockName: string;
  blockType: string;
  categories: { id: string; title: string; createdAt: string }[]; // Update categories type
  id: string;
  limit: number;
  populateBy: string;
  relationTo: string;
  selectedDocs: {
    relationTo: string;
    value: {
      categories: string[];
      // content: {
      //   root: any;
      // };
      createdAt: string;
      hero: Hero;
      id: string;
    };
  }[];
};

const AllProjects = () => {
  const [data, setIsData] = useState<CombinedType[]>([]);
  const handleFetchProjects = async () => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/pages/660a13136beadca7a4a8614c?locale=undefined&draft=true&depth=1`;
      const res = await fetch(url);
      const data = await res.json();
      const { layout } = data;
      setIsData(layout);
    } catch (e) {
      console.log(e, 'There was an error fetching the projects data!');
    }
  };
  useEffect(() => {
    handleFetchProjects();
  }, []);

  return (
    <div className="container">
      <div className="flex justify-center mt-[200px] gap-6">
        <div className="badge badge-outline border-gradient p-4 font-poppins">
          <a href={''}>3D</a>
        </div>
        <div className="badge badge-outline border-gradient p-4 font-poppins">
          <a href={''}>Fullstack</a>
        </div>
      </div>
      <div className="flex mt-[50px]">
        <h1 className="text-white text-4xl lg:text-6xl font-poppins">
          All Projects
        </h1>{' '}
        <img className="ml-4" src={star} alt="star svg" />
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 md:gap-4 grid-cols-1 gap-2  ">
        {data?.map((project) => (
          <div
            key={project.id}
            className="mt-[50px] mb-[50px] flex justify-center"
          >
            <ProjectCards
              blogId={project.selectedDocs[0].value.id}
              name={project.blockName}
              category={project.categories[0].title}
              createdAt={project.categories[0].createdAt}
              description={project.selectedDocs[0].value.hero.description}
              github={project.selectedDocs[0].value.hero.github}
              liveDemo={project.selectedDocs[0].value.hero.livedemo}
              mediaId={project.selectedDocs[0].value.hero.media}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProjects;
