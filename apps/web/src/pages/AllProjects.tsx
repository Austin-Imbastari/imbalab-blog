import { useEffect, useState } from 'react';
import ProjectCards from '../components/ProjectCards';

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
      content: {
        root: any;
      };
      createdAt: string;
      hero: Hero;
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
    <>
      <h1>All projects</h1>
      {data?.map((project) => (
        <div key={project.id}>
          <ProjectCards
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
    </>
  );
};

export default AllProjects;
