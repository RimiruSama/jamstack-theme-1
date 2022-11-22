import './index.css';
import ButtonMore from '../common/ButtonMore';

const ExploreProd = () => {
    return (
        <div className="explore-prod">
            <div className="explore-prod-body custom-container">
                <div className="explore-prod-right">
                    <div className="explore-banner--image"></div>
                </div>
                <div className="custom-container exlore-prod-left">
                    <div className="row py-5">
                        <div className="left-container">
                            <p className="title">
                                A new shopping experience
                            </p>
                            <ButtonMore 
                                text='Explore products'
                                link='https://commercejs-demo-store.netlify.app/collection'
                                styleCustom={{ justifyContent: 'flex-start' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreProd;