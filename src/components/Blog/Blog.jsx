import React from 'react'
import './blog.scss'
import blogData from '../../data/blogData'

function Blog() {
  return (
    <div className='blog' id='blog'>
      <header>
  <h1>Cool Articles</h1>
</header>
<div class="band">
    {
      blogData.map((item) => (
        <div key={item.id} className={`item-${item.id}`}>
          <a href={item.link} className="card" target='_blank'>
            <div style={{backgroundImage:`url(${item.imageURL})` }} alt="" className="thumb" />
            <article>
              <h1>{item.title}</h1>
              <span>{item.author}</span>
            </article>
          </a>
        </div>
      ))
    }
</div>
    </div>
  )
}

export default Blog