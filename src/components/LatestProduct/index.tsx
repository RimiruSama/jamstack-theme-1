import ButtonMore from '../common/ButtonMore';
import './index.css'

const LatestProduct = () => {
    return (
        <div className="custom-container latest-prod">
            <div className="latest-prod-intro">
                <p className="text-intro">
                    Introducing Our Latest Products
                </p>
                <p className="text-des">
                    Limited reservations on upcoming products and restocks.
                </p>
                <ButtonMore 
                    text='See more products'
                    link='https://commercejs-demo-store.netlify.app/collection'
                />
            </div>
            <div className='latest-prod-list'>
                <div className="latest-prod-item">
                    <a href="https://commercejs-demo-store.netlify.app/product/lip-fantastic">
                        <div 
                            className="prod-img"
                            style={{ 
                                background: 'url(/assets/img/prod/prod1.jpg) center center / cover',
                                paddingBottom: '125%',
                                marginBottom: '1rem'
                            }}
                        ></div>
                        <p className="prod-title">Lip Fantastic</p>
                        <p className="prod-des">A limited-edition, nourishing lip gel to top off your look and feel fantastic.</p>
                        <p className="prod-price">
                            $24.00
                        </p>
                    </a>
                </div>
                <div className="latest-prod-item">
                    <a href="https://commercejs-demo-store.netlify.app/product/lip-fantastic">
                        <div 
                            className="prod-img"
                            style={{ 
                                background: 'url(/assets/img/prod/prod2.jpg) center center / cover',
                                paddingBottom: '125%',
                                marginBottom: '1rem'
                            }}
                        ></div>
                        <p className="prod-title">Lip Fantastic</p>
                        <p className="prod-des">A limited-edition, nourishing lip gel to top off your look and feel fantastic.</p>
                        <p className="prod-price">
                            $24.00
                        </p>
                    </a>
                </div>
                <div className="latest-prod-item">
                    <a href="https://commercejs-demo-store.netlify.app/product/lip-fantastic">
                        <div 
                            className="prod-img"
                            style={{ 
                                background: 'url(/assets/img/prod/prod3.jpg) center center / cover',
                                paddingBottom: '125%',
                                marginBottom: '1rem'
                            }}
                        ></div>
                        <p className="prod-title">Lip Fantastic</p>
                        <p className="prod-des">A limited-edition, nourishing lip gel to top off your look and feel fantastic.</p>
                        <p className="prod-price">
                            $24.00
                        </p>
                    </a>
                </div>
                <div className="latest-prod-item">
                    <a href="https://commercejs-demo-store.netlify.app/product/lip-fantastic">
                        <div 
                            className="prod-img"
                            style={{ 
                                background: 'url(/assets/img/prod/prod4.jpg) center center / cover',
                                paddingBottom: '125%',
                                marginBottom: '1rem'
                            }}
                        ></div>
                        <p className="prod-title">Lip Fantastic</p>
                        <p className="prod-des">A limited-edition, nourishing lip gel to top off your look and feel fantastic.</p>
                        <p className="prod-price">
                            $24.00
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LatestProduct;