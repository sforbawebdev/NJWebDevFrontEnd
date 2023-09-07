import Button from '../widgets/Button';
import Logo from '../widgets/Logo';
import Reveal from "../widgets/Reveal";
// import "../../styles/components/_header.scss";

const Header = () => {
    const handleButtonClick = () =>{
        const element = document.getElementById("contact");
        element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"}); 
    }
    return (
        <header className="header">
           <div className="header-wrapper">
                <Reveal preset={"fadeUp"} delay={500}>
                    <Logo />
                </Reveal>
                <Reveal preset={"fadeUp"} delay={500}>
                    <Button text={"Contact Me"} onClick={handleButtonClick}/>
               </Reveal>
           </div>
        </header>
    );
}

export default Header;
