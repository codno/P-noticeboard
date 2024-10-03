'use client'
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';


const Main = () =>{

  const [post,setPosts] =useState([
    {id:'1',title: '첫번째 글'},
    {id:'2',title: '두번째 글'},
    {id:'3',title: '세번째 글'},
  ]);


  return (
    <div>
      <div className='flex justify-end'>
        <Link href="/newpost">
          <button type="button" className="flex items-center w-20 h-8 p-2" style={{backgroundColor:'white', color:'#29367c',}}>
          <FontAwesomeIcon icon={faPen} style={{width:'15px',height:'15px'}} />
          글쓰기
          </button>
        </Link>
      </div>
      <div id="post_wrap" className='w-full p-2 border border-gray-300' style={{height:'500px'}}>
         <ul>
          {post.map(post => (
            <li key={post.id} className="py-2 border-b">
              {post.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
)
}

export default Main;
