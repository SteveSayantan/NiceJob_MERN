import { Outlet } from "react-router-dom";
import Wrapper from '../../assets/wrappers/SharedLayout'
import { BigSidebar, Navbar, SmallSideBar } from "../../components";
const SharedLayout=()=>{
 
    return <Wrapper>
        <main className="dashboard">
           <SmallSideBar/>
           <BigSidebar/>
           <div>
                <Navbar/>
                <div className="dashboard-page">
                    <Outlet/>
                </div>
           </div>
        </main>
    </Wrapper>
}

export default SharedLayout;