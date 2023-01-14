import { useState } from "react"

function Article()
{
  let articles = [
    {id:"0", title:"JS", content:"Several information about to study into JS Developer", author:"GitHub Community", date:'2023-01-13'},
    {id:"1", title:"Python", content:"Several information about to study into Python Developer", author:"GitLab Community", date:'2023-01-13'},
    {id:"2", title:"Rust", content:"Several information about to study into Rust Developer", author:"UA Community", date:'2023-01-13'}
  ]

  let [list, setList] = useState([...articles].map(e => {
    return (
      <div className="post" key={e.id}>
        <div className="title">{e.id}.{e.title}</div>
        <div className="content">{e.content}</div>
        <div className="author">{e.author}, {e.date}</div>
      </div>
    )
  }))

  let [title, setTitle ] = useState('')
  let [content, setContent ] = useState('')
  let [author, setAuthor ] = useState('')
  let [date, setDate ] = useState('')

  let [titleDirty, settitleDirty] = useState(false)
  let [contentDirty, setcontentDirty] = useState(false)
  let [authorDirty, setauthorDirty] = useState(false)
  let [dateDirty, setdateDirty] = useState(false)

  let disabled = title?.length >= 6 && content?.length >= 50 && author?.length >= 3 && date?.length >= 3 ? false : true

  function handler(e)
  {
    e.preventDefault()
    articles = articles.concat([{id:list.length,title:title,content:content,author:author,date:date}])
    setList([...articles].map(e => {
    return (
      <div className="post" key={e.id}>
        <div className="title">{e.id}.{e.title}</div>
        <div className="content">{e.content}</div>
        <div className="author">{e.author}, {e.date}</div>
      </div>
    )
    }))
  }

  function BlurHandler(e)
  {
    switch(e.target.name)
    {
      case 'title':
        settitleDirty(true)
        break
      case 'content':
        setcontentDirty(true)
        break
      case 'author':
        setauthorDirty(true)
        break
      case 'date':
        setdateDirty(true)
        break
      default:
        break
    }
  }

  return (
    <article>
      <div className="validator">
        <form onSubmit={(e) => handler(e)}>
          <label>
          { (titleDirty && title.length <= 5) && <span>Title hasn't enough letters</span> }
          { (contentDirty && content.length <= 25) && <span>Content hasn't enough letters</span> }
          { (authorDirty && author.length <= 5) && <span>Author hasn't enough letters</span> }
          { (dateDirty && date.length <= 5) && <span>Date doesn't being.</span> }
          </label>
          <input onBlur={(e) => BlurHandler(e)} onChange={(e) => setTitle(e.target.value)} type="text" name="title" placeholder="Title"/>
          <textarea onBlur={(e) => BlurHandler(e)} onChange={(e) => setContent(e.target.value)} name="content" placeholder="Content" rows="5" cols=""></textarea>
          <input onBlur={(e) => BlurHandler(e)} onChange={(e) => setAuthor(e.target.value)} type="text" name="author" placeholder="Author"/>
          <input onBlur={(e) => BlurHandler(e)} onChange={(e) => setDate(e.target.value)} type="date" name="date" id="date" />
          <input disabled={disabled} type="submit" className="submit" value="Submit" />
        </form>
      </div>
      <h1 className="separate">List of Posts</h1>
      <hr />
      <div className="list">
        {list}
      </div>
    </article>
  )
}

export default Article