import PersonalProfile from '../components/Profile/profile';
import Donut from '../components/chart';
import CustomNavBar from '../components/nvbar';
import Sidebar from '../components/sidebar';
import CustomTable from '../components/table';

const dashboard = () => {
    return (
        <div>
            <div>
                <CustomNavBar/>
            </div>
            <div style={{display:'flex',flexDirection:'row'}}>
                
                <Sidebar/>
                
                    {/* <div>
                    <PersonalProfile/>
                    </div> */}
           
            </div>
        </div>
    );
};

export default dashboard;