import { Link } from "react-router-dom"

const Landing = () => {
  return (
    <>
    <div className="content">
        <h1>Discover Your Next Adventure</h1>
        <p>Explore the world with personalized itineraries and AI-powered recommendations.</p>
        <Link className=" start-plan" to="/explore"><button className="start-btn">Start Planning</button></Link>
    </div>
    </>
  )
}

export default Landing