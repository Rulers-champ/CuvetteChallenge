import Person from './images/person.png';
import './Header.css';



function Header()
{
    return (
        <div>
          <header>
            <img src="https://cuvette.tech/app/static/media/logo.74bda650.svg" />
            <ul className='header-list'>
               <li className='header-link'><img className='profile-icon' src={Person} alt="No Image" /></li>
               <li className='header-link'><h5>Siddharth Jain</h5></li> 
            </ul>
          </header>
        </div>
      ); 
}

export default Header;