import Selbadge from './images/select-badge.png';
import uSelbadge from './images/unselect-badge.png';
import './Sidebar.css';


function Sidebar()
{
    return (
        <div className='sidebar-container'>
            <ul>
                <li className='sidebar-link'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                    </svg>
                    <h5>Dashboard </h5>              
                </li>
                
                <li className='sidebar-link active-link' >
                    <img className="badge-icon" src={uSelbadge} />
                    <h5>Skills</h5>
                </li>

                <li className='sidebar-link'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                    </svg>
                    <h5>Internship</h5>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;