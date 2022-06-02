import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">back</Link></li>
        <li><Link to="/g5/map">map</Link></li>
      </ul>
    </div>
  )
}

export default About;
