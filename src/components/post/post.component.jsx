import React from 'react'
import Image from './image/image.component'
import './post.styles.scss'
function Post(){
  return (
<center>
<div className="card mb-3" style={{maxWidth: '540px'}}>
  <br/>
  <div className="row no-gutters">
    <div className="col-md-4">
      <Image url={require('../../assets/sample.jpg')} alt='NoText'/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">Title</h3>
        <span><a href="single.html">
        <img alt="Notext" src="https://img.icons8.com/wired/32/000000/planner.png"/>
          Date</a></span>
        <span><a href="single.html">
        <img alt='notext'src="https://img.icons8.com/ios/32/000000/tag-window.png"/>
        Tag</a></span>
        <span className='icon-comment2 mr-2'><a href="single.html">
          <img alt='notext' src="https://img.icons8.com/material-outlined/32/000000/comments.png"/>Comment</a></span>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Readmore</small></p>
      </div>
    </div>
  </div>
</div>

</center>

  )
}

export default Post;