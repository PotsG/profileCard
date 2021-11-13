import * as React from 'react';

import Data from '../data/data.json';
// import  ProfileImage from '../images/profile-image.jpg';
import  ProfileGif from '../images/profile-image.gif';

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

interface CardData {
    name: string;
    link: string;
    icon: Array<string>;
}

const Card = (props: any) => {
    const data: Array<CardData> = Data.data;

    return ( 
        <React.Fragment>
            <div className="profile-card">
                <div className="img-wrap">
                    <img src={ ProfileGif } alt="Main Profile" className="img" />
                </div>
                <h1 className="main-title">Gregory Pots</h1>
                <ul className="icon-list">{ data.map(item => (
                        <li key={ item.name } className="icon-list-item">
                            <a href={ item.link } className="icon-list-link"><FontAwesomeIcon icon={ item.icon as IconProp }/></a>
                        </li>
                )) }
                </ul>
            </div>
        </React.Fragment>      
    );
};
 
export default Card;