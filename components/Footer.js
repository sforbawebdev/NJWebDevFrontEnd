import SocialList from '../components/SocialList';
import Reveal from "../widgets/Reveal";
// import "../../styles/components/_footer.scss";


const Footer = (props) => {
    return (
        <footer className="footer">
            <SocialList />
            <Reveal  preset={"fadeUp"} delay={25}>
                <div className="footer__copy">
                    Built in Brooklyn, NY
                </div>
            </Reveal>
            <Reveal  preset={"fadeUp"} delay={50}>
            <div className="footer__credits">
                By: Scott Forba
            </div>
            </Reveal>
        </footer>
    );
}

  export default Footer;
