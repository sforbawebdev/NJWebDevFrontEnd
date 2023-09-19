import logo from '../public/images/nj_logo_2.png';
import Image from 'next/image';

const Logo = (s)=>{
    return (
        <a href="/" className="logo">
            <Image  src={logo} alt={"Scott Forba Logo"} />
        </a>

    );
}


export default Logo;
