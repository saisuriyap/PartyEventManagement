import React from 'react';
import { Carousel } from 'rsuite';
import {Panel} from 'rsuite';
import { Link } from 'react-router-dom';
import CustomNavBar from '../components/nvbar';
const footerStyle = {
  backgroundColor: 'lightgrey',
  color: '#fff',
  padding: '2rem 0',
  textAlign: 'center',
}
const Home = () => {
  return (
    <div>
      <CustomNavBar/>
      {/* <Sidebar/> */}
    <div style={{}}>
    
    <Carousel autoplay >
      <img src="https://i.pinimg.com/originals/26/fc/47/26fc47f2b4b05e8c0f1fbb2a49709181.png" height="250"  />
      <img src="https://img.freepik.com/free-photo/crowded-nightclub-with-people-holding-beer-glasses-large-number-people-holding-drinks_1340-32851.jpg?t=st=1706511521~exp=1706515121~hmac=7e84e188f2e2f8964e88d8cb9d5a803d69ceaa43d34b9cec2dd16e78ea4e9b95&w=996" height="250"  />
      <img src="https://img.freepik.com/free-photo/vibrant-christmas-lights-glow-multi-colored-shiny-generated-by-ai_188544-10897.jpg?t=st=1706511924~exp=1706515524~hmac=5c0d8bc197b2a7e72e732600fe112e7ac10fc2399baec2f4e56632378b96e100&w=1060" height="250"  />
      <img src="https://img.freepik.com/free-photo/group-enjoying-drinks-celebration-indoors-generated-by-ai_188544-25948.jpg?t=st=1706511617~exp=1706515217~hmac=938d409c8d5524c85df7e976df6b3e3b2669acd9fde2c9056c32d6ceae8c7d82&w=1060" height="250" />
    </Carousel>
    </div>
    <div style={{justifyContent:'space-around',display:'flex'}}>
      
     <Panel shaded bordered bodyFill style={{ display: 'inline-block',width: 240,marginRight:20, padding:'10px' }}>
     <img src="https://www.thegreekclub.com.au/wp-content/uploads/bb-plugin/cache/c90b671b71f9d09fc531fb3b98577e95-landscape-779518e70f378993ead23e068e7700c0-k146rfcu0o9z.jpg" height="240" />
     <Panel header="BIRTHDAY PARTY">
       <p>
         <small>
         "Birthdays are nature's way of telling us to eat more cake and celebrate the wonderful gift of life."
         </small>
         
       </p>
     <button style={{marginTop:20,marginLeft:20}}><Link to='/about'>View</Link></button>
     </Panel>
   </Panel>
  
   <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240 ,padding:'10px'}}>
     <img src="https://media.weddingz.in/images/20200210175119/party-venue-in-goa.jpg" height="240" />
     <Panel header="BATCHELOR PARTY">
       <p>
         <small>
         "Cheers to the last night of freedom, where memories are made and the adventure begins – let the bachelor party festivities commence!"
         </small>
       </p>
       <button style={{marginTop:20,marginLeft:20}}><Link to='/about'>View</Link></button>
     </Panel>
   </Panel>
   <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240,padding:'10px' }}>
     <img src="https://cdn.cherishx.com/uploads/1654600587_original.jpg" height="240" />
     <Panel header="FAREWELL PARTY">
       <p>
         <small>
         "Saying goodbye is hard, but let's make it a night to remember as we bid farewell to the moments we've shared and embrace new beginnings."
         </small>
       </p>
       <button style={{marginTop:20,marginLeft:20}}><Link to='/about'>View</Link></button>
     </Panel>
   </Panel>

   <Panel shaded bordered bodyFill style={{ display: 'inline-block', width: 240,padding:'10px' }}>
     <img src="https://media.istockphoto.com/id/1191995504/photo/colleagues-eating-cake-at-the-office-birthday-party.jpg?s=612x612&w=0&k=20&c=9sLDnjrlso7U3QLk0wjSra6KIQA71te5yxKXzx0wnZ4=" height="240" />
     <Panel header="COOPERATE PARTY">
       <p>
         <small>
          
"Unite in celebration, where colleagues become comrades, and success is toasted in the spirit of collaboration at our corporate party."
         </small>
       </p>
       <button style={{marginTop:20,marginLeft:20}}><Link to='/about'>View</Link></button>
     </Panel>
   </Panel>
   
   </div>
   <br/><br/><br/>
   <footer style={footerStyle}>
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Us</h4>
          <p>Your Company is dedicated to providing innovative solutions...</p>
        </div>
        <div className="footer-section">
      
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>Email: info@example.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
   </div>
   
  );
};

export default Home;