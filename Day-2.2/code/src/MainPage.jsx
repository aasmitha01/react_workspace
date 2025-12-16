import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
function MainPage(){
    return(
        <div style={{border:"1px solid #ccc",minHeight: "100vh"}}>
            <Navbar />
            <Content />
            <Footer />

        </div>
    );

}
export default MainPage;