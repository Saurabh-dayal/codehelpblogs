import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div>
      <NavLink to={`/blog/${post.id}`}>
      <span className='font-bold text-lg'>{post.title}</span>
       </NavLink>
       <p className='text-sm mt-[4px]'>
        By <span className='italic'>{post.author}</span>
        on {" "}
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className='underline font-bold'>{post.category}</span>
        </NavLink>
       </p>
       <p className='text-sm mt-[4  px]'>Poster on {post.date}</p>
       <p className='text-md mt-[14px]'>{post.content}</p>
       <div className='flex gap-x-2'>
        {
            post.tags.map((tag, index) => (
                <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
                    <span className='text-blue-700 underline text-bold text-xs mt-[5px]'>{`#${tag}`}</span>
                </NavLink>
            ))
        }
       </div>
    </div>
  )
}

export default BlogDetails
