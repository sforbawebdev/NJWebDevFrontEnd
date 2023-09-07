import React from 'react'
import {AppContext} from '../providers/AppProvider';
// import "../../styles/components/_navigation.scss";

const Navigation = (props) => {
    const {pages} = props;
    const context = React.useContext(AppContext);
    const active = context.activeNav;
    return (
        <nav className="navigation">
            <ul className="navigation-list">
            {
                pages && pages.map((item, index)=>{
                    const page_title = item.title.toLowerCase(),
                            hash_link =`#${page_title}`;
                    return(
                        <li key={index} 
                        className={`navigation-list-item`}>
                           <a href={hash_link} 
                                className={`navigation-item  ${active === page_title ? "active" : ""}`}>
                            {item.title}
                           </a>
                        </li>           
                    )
                })
            }
            </ul>

        </nav>
    );
}

  export default Navigation;
