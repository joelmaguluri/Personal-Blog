import React from 'react'

function Post({title,date,Comment_No,subtitle}){
  return (
      <div className="post-container">
        <h3 className="title">
          <a href="/">{title}</a>
        </h3>
        <div className="date_comments_container">
          <p className="date">{date}
          <a href="single.html">{tag}</a>{Comment_No} Comment
          </p>
        </div>
         <p className="subtitle">{subtitle}</p>
        <p><a className="readmore" href="#">Read More </a></p>
      </div>

  )
}

export default Post;