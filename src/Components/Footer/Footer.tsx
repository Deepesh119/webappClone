import React,{useEffect,useState} from "react";
import "./Footer.scss";
import { detailsRender, earnRender, HelpRender, jebelzRender, policiesRender } from "../../Backend/Footer";
import { FaEnvelope } from "react-icons/fa";

const Footer = (): JSX.Element => {

  const [help,setHelp] = useState([]);
  const [jeb,setJeb] = useState([]);
  const [earn,setEarn] = useState([]);
  const [policy,setPolicy] = useState([]);
  const [contact,setContact] = useState([]);

  useEffect(()=>{
     let data = HelpRender();
     let jebelz = jebelzRender();
     let earning = earnRender();
     let policies = policiesRender();
     let contacting = detailsRender();
     setHelp(data);
     setJeb(jebelz);
     setEarn(earning);
     setPolicy(policies);
     setContact(contacting)
    },[])

  console.log(help,'help');
  
  return (
    <div className="footer">
      <div className="One">
        <h3 className="heading">Help</h3>
        <ul>
          {
            help?.map((val,index)=>{
              return(
                <li key={index}> {val}</li>
              )
            })
          }
        </ul>
      </div>
      <div className="One">
      <h3 className="heading">Jebelz</h3>
        <ul>
          {
            jeb?.map((val,index)=>{
              return(
                <li key={index}> {val}</li>
              )
            })
          }
        </ul>
      </div>
      <div className="One">
      <h3 className="heading"> Earn With Us</h3>
        <ul>
          {
            earn?.map((val,index)=>{
              return(
                <li key={index}> {val}</li>
              )
            })
          }
        </ul>
      </div>
      <div className="One">
      <h3 className="heading">Policies</h3>
        <ul>
          {
            policy?.map((val,index)=>{
              return(
                <li key={index}> {val}</li>
              )
            })
          }
        </ul>
      </div>
      <div className="One">
      <h3 className="heading">Newsletter Signup</h3>
        <div className="input-div"> <input type='text' placeholder="Enter Your Email Address"  className='input-styles'/> <FaEnvelope className='react-icon-color' /></div> 
        <ul>
          {
            contact?.map((val,index)=>{
              return(
                <li key={index}> {val}</li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default Footer;
