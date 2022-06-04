import Trophy from './images/trophy.png';
import Target from './images/target.png';
import Checklist from './images/checklist.png';
import Tick from './images/tick.png';
import Html from './images/html-5.png';
import Clipboard from './images/clipboard.png';
import './SkillPage.css';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { LineChart, Line, XAxis ,ReferenceLine} from "recharts";

function SkillPage(props)
{

    function handleUpdate()
    {
        props.update();
    }


    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
  
                datasets: [
                    {
                    label: '# of Votes',
                    data: [15-props.score,props.score],
                    backgroundColor: [
                        '#438AF6',
                        'rgba(54, 162, 235, 0.2)',
                        
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        
                    ],
                    borderWidth: 0,
                    },
                ],
            };
    
            const linedata = [
                {
                  x:0,y:5
                },
                {
                  x:20,y:15
                },
               
                {
                  x:40,y:50
                },
                {
                  x:60,y:30
                },
                {
                  x:80,y:45
                },
                {
                  x:100,y:5
                }
               ];


    return (
        <div className="skill-container">
           <h5>Skill Test</h5>
           <div className="skill-wrapper ">
                <div className="skill-left-block">

                    <div className="inner-block flex-block">
                       <div className='flex-block'>
                            <img className='html-logo icon' src={Html} />
                            <div>
                                <h3>Hypertext Markup Language</h3>
                                <h6>Question: 08 | Duration :15mins | Submitted on 5 June 2021</h6>
                            </div>
                       </div>
                       <button className='update-btn' onClick={handleUpdate}>Update</button>            

                    </div>

                    <div className='inner-block'>
                       <h3 className='inner-block-heading'>Quick Statistics</h3>
                       <div className='flex-block'>
                           <div className='flex-block'>
                                <img className ="skill-round-icon icon" src={Trophy} />
                                <div>
                                    <h3>{props.rank}</h3>
                                    <h6>YOUR RANK</h6>
                                </div>
                           </div>

                           <div className='flex-block' >
                                <img className ="skill-round-icon icon" src={Checklist} />
                                <div>
                                    <h3>{props.percentile}%</h3>
                                    <h6>PERCENTILE</h6>
                                </div>
                           </div>

                           <div className='flex-block' >
                                <img className ="skill-round-icon icon" src={Tick} />
                                <div>
                                    <h3>{props.score}/15</h3>
                                    <h6>CORRECT ANSWERS</h6>
                                </div>
                           </div>
                       </div>
                    </div>

                    <div className='inner-block'>
                        <h3 className='inner-block-heading'>Comparison Graph</h3>
                        <div className='flex-block' style={{marginBottom:"3rem"}}>
                               <h6>You scored 37% percentile which is lower <br></br> than the average
                               percentile 72% of all the engineers who took this assesment
                               </h6>
                              <img className ="skill-round-icon icon" src={Clipboard}/>
                        </div>
                        
                        <LineChart width={600} height={400} data={linedata} className="graph">
                            <Line type="monotone" dataKey="y" stroke="#d0d0d0" strokeWidth={2} />
                            <XAxis type="number" dataKey="x" interval="preserveStartEnd" />
                            <ReferenceLine x={props.percentile} label={props.percentile}  strokeDasharray="5 5" stroke="#438AF6" />
                            <ReferenceLine x={82} label="82" strokeDasharray="5 5" stroke="#FF9142" />
                            
                        </LineChart>
  

                    </div>

                </div>

                <div className='skill-right-block'>
                  <div className='inner-block'>
                        <h3 className='inner-block-heading'>Syllabus Wise Analysis</h3>
                            <div>
                                <div className='bar'>
                                <h6>HTML TOOLS,FORMS,HISTORY</h6>
                                <div className='progress-bar-flex'>
                                    <div style={{backgroundColor:'#b5cef3'}}  className='progress-line'><span style={{width:'80%',backgroundColor: '#438AF6'}}></span></div>
                                    <h6>80%</h6>
                                </div>
                                </div>

                                <div className='bar'>
                                <h6>Tags & References in HTML</h6>
                                <div className='progress-bar-flex'>
                                    <div style={{backgroundColor:'#f7dfce'}} className='progress-line'><span style={{width:'60%', backgroundColor: '#FF9142'}}></span></div>
                                    <h6>60%</h6>
                                </div>
                                </div>

                                <div className='bar'>
                                <h6>Tables & CSS Basics</h6>
                                <div className='progress-bar-flex'>
                                    <div style={{backgroundColor:'#fcdddd'}} className='progress-line'><span style={{width:'24%', backgroundColor: '#FB5E5E'}}></span></div>
                                    <h6>24%</h6>
                                </div>
                                </div>

                                <div className='bar'>
                                <h6>Tables & CSS Basics</h6>
                                <div className='progress-bar-flex'>
                                    <div style={{backgroundColor:'#c9e2d4'}} className='progress-line'><span style={{width:'96%', backgroundColor: '#2EC971'}}></span></div>
                                    <h6>96%</h6>
                                </div>
                                </div>


                            </div>
                            

                  </div>

                  <div className='inner-block'>
                     <div className='flex-block'>
                      <h3 >Question Analysis</h3>
                      <h6 style={{color:"#438AF6"}}>{props.score}/15</h6>
                     </div>
                     <p className='text-para'><strong>You scored {props.score} question correct out of 15</strong>. However it still needs improvement.</p>
                      <Doughnut data={data} className="doughnut-graph" />
                  </div>
                    
                </div>
           </div>

        </div>
    );
}

export default SkillPage;