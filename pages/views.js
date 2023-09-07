
import Home from "./home";
import About from "./about.js";
import Default from "./default";
import Portfolio from "./portfolio";
import Contact from "./contact";
import Testimonials from "./testimonials";
import Services from "./services";

const Views = (props) =>{
    const { data, page} = props;
    if (page === "home") {
        return <Home data={data} {...props} />;
    } else if (page === "about") {
        return <About data={data} {...props} />;
    } else if (page === "services") {
        return <Services data={data} {...props} />;
    } else if (page === "portfolio") {
        return <Portfolio data={data} {...props} />;
    } else if (page === "contact") {
        return <Contact data={data} {...props} />;
    } else if (page === "testimonials") {
        return <Testimonials data={data} {...props} />;
    } else {
        return <Default data={data} {...props} />;
    }
}



export default Views;