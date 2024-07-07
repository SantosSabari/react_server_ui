import React, { useEffect, useState } from 'react'
import { Blog } from '../interface/blog-interface'
import BlogDrawer from '../components/blog-drawer';
import { CircularProgress } from '@mui/material';
import { Blob } from 'buffer';

function Blogs() {
 const [blogs, setBlogs] = useState<[Blog]>()
 const [selectBlogID, setSelectBlogID] = useState(Number);
 const [isOpen, setOpen] = useState<boolean>(false);
 const [isLoader, setLoader] = useState<boolean>(false)
 const [selectedBlog, setSelectBlog] = useState<Blog>()
 const [isUpdate, setUpdate] = useState<boolean>(false);

 const getBlogs = () =>{
    fetch('https://dummyapi.online/api/blogposts')
        .then((response) => response.json())
        .then((res) => 
           setBlogs(res)
    );
 }

 const selectBlog =(blog:Blog) =>{
    console.log(blog)
    setSelectBlogID(blog.id)
 }

 const deleteBlog = (blog:Blog) =>{
    console.log(blog)
    getBlogs()
 }

 const updateBlog = (blog:Blog) =>{
   setSelectBlog(blog)
   setOpen(true)
   setUpdate(true)
 }

 const closeDrawer =() =>{
   setOpen((prestae) =>!prestae);
   setUpdate((prestae) =>!prestae)
 }

 const saveBlogEmit =(value:any) =>{
   setLoader(true)
   console.log('emit method')
   console.log(value)
   setTimeout(() => {
      setLoader(false);
   }, 3000);
 }

 useEffect(()=>{
    console.log('useeffect -calling')
    getBlogs();
 },[])

  return (
    <>
    <div className="container">
       { isLoader && <CircularProgress color="secondary" /> }
      <button className="btn create-btn" onClick={() => setOpen(true)}>Create New Blog</button>
      <div className="blog-list">
      { 
           blogs ? blogs.map((blog:Blog) => (
                <div className={`blog-item ${selectBlogID === blog.id ? 'active' : ''}`} key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>{blog.content}</p>
                    <div className="btn-group">
                        <button className="btn read-btn"  onClick={() =>selectBlog(blog)}>View</button>
                        <button className="btn update-btn" onClick={() => updateBlog(blog)}>Update</button>
                        <button className="btn delete-btn" onClick={() =>deleteBlog(blog)}>Delete</button>
                    </div>
                </div>
            )) :
            <div className=''>No Data Found</div>
        }
      </div>
    </div>

    {isOpen && <BlogDrawer 
                  isOpen={isOpen} 
                  closeDrawer={closeDrawer} 
                  saveBlogEmit={saveBlogEmit}
                  updateBlog={selectedBlog}
                  isUpdate ={isUpdate}
               />
   }

   
    </>
  )
}

export default Blogs