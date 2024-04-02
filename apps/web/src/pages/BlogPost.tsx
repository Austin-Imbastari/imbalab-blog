import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { id } = useParams();
  console.log(id);

  const fetchProjectId = async (projectId: any) => {
    console.log(projectId);
    const url = `${import.meta.env.VITE_API_URL}/api/projects/${projectId}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  };

  useEffect(() => {
    fetchProjectId(id);
  }, [id]);

  return (
    <>
      <div className="container mt-[200px]">
        <h1>Blog post</h1>
      </div>
    </>
  );
};

export default BlogPost;
