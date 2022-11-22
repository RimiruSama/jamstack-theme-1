import './index.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="custom-container footer1">
                <div className="row">
                    <div className="left col">
                        <p className="heading">
                            Commerce.js
                        </p>
                        <div className="content">
                            <a href="https://commercejs.com/docs/" className="content-item">Documentation</a>
                            <a href="https://commercejs.com/features" className="content-item">Features</a>
                            <a href="https://commercejs.com/about" className="content-item">About</a>
                            <a href="http://slack.commercejs.com/" className="content-item">Community</a>
                        </div>
                    </div>
                    <div className="center col">
                        <p className="heading">
                            Follow us
                        </p>
                        <div className="content">
                            <a href="https://commercejs.com/docs/" className="content-item">Twitter</a>
                            <a href="https://commercejs.com/features" className="content-item">Angel</a>
                            <a href="https://commercejs.com/about" className="content-item">Instagram</a>
                            <a href="http://slack.commercejs.com/" className="content-item">LinkedIn</a>
                        </div>
                    </div>
                    <div className="right col">
                        <p className="heading">
                            Newsletter
                        </p>
                        <div className="content">
                            <input type="text" placeholder='Email Address' />
                            <button>
                                <img src="https://commercejs-demo-store.netlify.app/icon/arrow-long-right.svg" alt="Arrow icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer2">
                <div className="footer2-conn">
                    <div className="custom-container">
                        <div className="footer2-left">
                            <a href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store" target="_blank">
                                Deploy to Netlify
                            </a>
                            <a href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store" target="_blank">
                                Clone in GitHub
                            </a>
                            <a href="https://app.netlify.com/start/deploy?repository=https://github.com/chec/commercejs-nextjs-demo-store" target="_blank">
                                Contribute
                            </a>
                        </div>
                        <div className="footer2-right">
                            <a href="https://commercejs.com/" target="_blank">@ 2022 CHEC/COMMERCE.JS.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;