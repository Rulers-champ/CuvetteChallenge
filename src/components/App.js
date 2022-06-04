import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import SkillPage from './SkillPage';
import Html from './images/html-5.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function App() {

  const [showupdate,setshowupdate]=useState(false);
  const [obj,setobj]=useState({rank:"12000",percentile:"37",score:"07"});
  const [tempobj,settempobj]=useState({rank:"",percentile:"",score:""});

  console.log(obj);

  function update()
  {
    setshowupdate(!showupdate);
  }


  function handleChange(event)
  {
     const name=event.target.name;
     const val=event.target.value;

     settempobj(prev=>{return {...prev,[name]:val}});
  }
  
  function handleSave()
  {
    setobj(tempobj);
    settempobj({rank:"",percentile:"",score:""});
    update()
  }


  return (
    <div className="main-body">

      <div className='content'>
        <Header />
        <div className='yoyo'>
          <Sidebar />
          <SkillPage update={update} rank={obj.rank} percentile={obj.percentile} score={obj.score}  />
        </div>
      </div>
      
      <div className={'update-section ' + (showupdate?'':'hide') }>
      </div>

      <div className={'update-container ' + (showupdate?'':'hide')}>
            <div className='update-header'>
              <h2>Update Scores</h2>
              <img className='html-logo' src={Html} />
            </div>
            

            <div className='update-row'>
                <div>
                  <button className='list-no'>1</button>
                  <span>Update Your Rank</span>
                </div>
                <input type="text" name="rank" onChange={handleChange} value={tempobj.rank}/>
            </div>

            <div className='update-row'>
                <div>
                  <button className='list-no'>2</button>
                  <span>Update Your Percentile</span>
                </div>
                <input type="text" name="percentile" onChange={handleChange} value={tempobj.percentile}/>
            </div>

            <div className='update-row'>
                <div>
                  <button className='list-no'>3</button>
                  <span>Update Your Current Score (out of 15) </span>
                </div>
                <input type="text" name="score" onChange={handleChange} value={tempobj.score}/>
            </div>

            <div className='update-footer'>
                <button className='cancel-btn' onClick={update}  >Cancel</button>
                <button className='save-btn' onClick={handleSave}>Save</button>
            </div>
          </div>
      
    </div>
    
  );
}

export default App;
