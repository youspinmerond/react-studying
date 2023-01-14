import Header from '../components/Header'
function Home()
{
  return (
    <div>
      <Header/>
      <a href="/reg">Register</a>
      <span>and</span>
      <a href="/articles">Articles</a>
    </div>
  )
}

export default Home