import './ButtonMore.css';
import React from 'react';

type PropsType = {
    text: string,
    link: string,
    styleCustom?: object
}


const ButtonMore: React.FC<PropsType> = ({text, link, styleCustom}) => {
    return (
        <div className="btn-conn" style={styleCustom}>
            <a href={link} className="btn">
                <p>{text}</p>
                <img src="https://commercejs-demo-store.netlify.app/icon/arrow-long-right.svg" alt="" />
            </a>
        </div>
    )
}

export default ButtonMore;