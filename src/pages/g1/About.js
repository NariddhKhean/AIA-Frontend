import { HashLink as Link } from 'react-router-hash-link';

const About = () => {
  return (
    <div>
      <ul>
        <li><Link to="/#groups">back</Link></li>
        <li><Link to="/g1/map">map</Link></li>
      </ul>
    </div>
  )
}

export default About;
