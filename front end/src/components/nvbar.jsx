import { Nav, Navbar,Avatar } from "rsuite"
import HomeIcon from '@rsuite/icons/legacy/Home';
import { Link } from "react-router-dom";
// import UserIcon from '@rsuite/icons/legacy/User';
const CustomNavBar=()=>{
    return (
        <Navbar  style={{ backgroundColor:'lightgrey' }}>
    <Nav>
      <Nav.Item icon={<HomeIcon />}><Link to={'/home'} style={{textDecoration:'None'}}>Home</Link></Nav.Item>
      <Nav.Item><Link to='/pay'>My Payment</Link></Nav.Item>
      <Nav.Item><Link to={'/contact'}>My Bookings</Link></Nav.Item>
     
    </Nav>
    <Nav pullRight>
    {/* <Avatar style={{marginTop:10}}>
      <UserIcon />
    </Avatar> */}
      <Nav.Menu title="Profile">
          <Nav.Item eventKey="4"><Link to='/dash'>DashBoard</Link></Nav.Item>
          <Nav.Item eventKey="5">Settings</Nav.Item>
          <Nav.Item eventKey="6"><Link to='/'>Log Out</Link></Nav.Item>
        </Nav.Menu>
    </Nav>
  </Navbar>
    )
}
export default CustomNavBar
