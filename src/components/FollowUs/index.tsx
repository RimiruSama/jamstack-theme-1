import { url } from "inspector";
import ButtonMore from "../common/ButtonMore";
import './index.css';

const FollowUs = () => {
    return (
        <div className="follow-us">
            <div className="custom-container follow-us-conn">
                <div className="follow-us--header">
                    <div className="follow-us--title">
                        <p className="text">
                            Follow us on Instagram for more updates
                        </p>
                        <ButtonMore
                            link='https://commercejs-demo-store.netlify.app/about'
                            text="Follow us"
                            styleCustom={{ justifyContent: 'flex-start' }}
                        />
                    </div>

                </div>
                <div className="follow-us--image">
                    <div className="follow-us-img--item">
                        <div 
                            className="follow-us-item--img"
                            style={{ 
                                background: 'url(https://commercejs-demo-store.netlify.app/images/insta/1.png) center center / cover',
                                paddingBottom: '100%',
                                transform: 'translateY(-55.3392px)'
                            }}
                        ></div>
                    </div>
                    <div className="follow-us-img--item">
                        <div 
                            className="follow-us-item--img"
                            style={{ 
                                background: 'url(https://commercejs-demo-store.netlify.app/images/insta/1.png) center center / cover',
                                paddingBottom: '100%',
                                transform: 'translateY(200.2035px)'
                            }}
                        ></div>
                    </div>
                    <div className="follow-us-img--item">
                        <div 
                            className="follow-us-item--img"
                            style={{ 
                                background: 'url(https://commercejs-demo-store.netlify.app/images/insta/1.png) center center / cover',
                                paddingBottom: '100%',
                                transform: 'translateY(0px)'
                            }}
                        ></div>
                    </div>
                    <div className="follow-us-img--item">
                        <div 
                            className="follow-us-item--img"
                            style={{ 
                                background: 'url(https://commercejs-demo-store.netlify.app/images/insta/1.png) center center / cover',
                                paddingBottom: '100%',
                                transform: 'translateY(170.8643px)'
                            }}
                        ></div>
                    </div>
                    <div className="follow-us-img--item">
                        <div 
                            className="follow-us-item--img"
                            style={{ 
                                background: 'url(https://commercejs-demo-store.netlify.app/images/insta/1.png) center center / cover',
                                paddingBottom: '100%',
                                transform: 'translateY(-88.5427px)'
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowUs;