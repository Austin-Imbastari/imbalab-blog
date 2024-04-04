import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RichText from '../components/RichText';
import Footer from '../components/Footer';

type Hero = {
  description: string;
  github: string;
  livedemo: string;
  media: string;
  shortDescription: string;
};

type CombinedType = {
  content: any;
  title: string;
  id: string;
  categories: { id: string; title: string; createdAt: string }[];
  limit: number;
  populateBy: string;
  relationTo: string;
  hero: Hero;
};

const BlogPost = () => {
  const { id } = useParams();
  const [data, setData] = useState<CombinedType[]>([]);

  const fetchProjectId = async (projectId: string | undefined) => {
    try {
      const url = `${import.meta.env.VITE_API_URL}/api/projects/${projectId}`;
      const res = await fetch(url);
      const data = await res.json();
      setData([data]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProjectId(id);
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <>
      <div className="container mt-[100px]">
        {data.map((project) => (
          <div key={project.id}>
            <div className="flex items-center">
              <div className="avatar">
                <div className="w-24 rounded-full border-gradient">
                  <img src="/images/imba.png" alt="Avatar" />
                </div>
              </div>
              <div className="ml-6">
                <h2 className="text-xl font-semibold font-poppins">
                  Austin Imbastari
                </h2>
                <h3 className="font-poppins">
                  {project.categories[0].createdAt}
                </h3>
              </div>
            </div>

            <div>
              <h1 className="text-3xl text-white font-semibold font-poppins mt-5">
                {project.title}
              </h1>
              <p className="font-poppins mt-2">{project.hero.description}</p>
            </div>

            <div className="mt-10">
              <div className="relative inline-flex  group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#7a87fb]  to-[#ffd49c] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <a
                  href={project.hero.github}
                  target="_blank"
                  className="font-poppins relative inline-flex items-center justify-center px-8 py-4 text-md font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none"
                >
                  Source Code
                </a>
              </div>
              <div className="relative inline-flex ml-10 group">
                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#7a87fb]  to-[#ffd49c] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <a
                  href={project.hero.livedemo}
                  target="_blank"
                  className="font-poppins relative inline-flex items-center justify-center px-8 py-4 text-md font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none "
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className=" mt-[60px] ">
              <div
                style={{
                  borderTop: '2px solid #3c3b3b',
                  width: '100%',
                }}
              ></div>
            </div>

            <div className="flex justify-center ">
              <div className="mt-10 prose prose-indigo font-poppins sm:prose-sm md:prose-lg lg:prose-xl ">
                <RichText content={project.content} />
              </div>
            </div>
          </div>
        ))}
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
