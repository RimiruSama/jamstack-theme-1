import './style.css';

const TopBar = () => {
    return (
        <div className="top-nav">
            <div className="container">
                <div className="logo">
                    <a href="/" title="Jamstack Themes">Jamstack Themes</a>
                </div>
                <div className="heading">
                    <h1 className="heading-title">Commerce.js Next.js Demo Store</h1>
                    <div className="theme-tags">
                        <a href="https://jamstackthemes.dev/ssg/next/" className="icon" title="Next">
                            <img src="/assets/img/next.png" alt="Next" />
                        </a>
                        <a href="https://jamstackthemes.dev/css/scss/" className="icon" title="SCSS">
                            <img src="/assets/img/scss.png" alt="Next" />
                        </a>
                    </div>
                </div>
                <div className="action-buttons">
                    <a href="https://jamstackthemes.dev/theme/commercejs-nextjs-demo-store/" className="action-button">
                        Theme Info
                    </a>
                    <a href="https://github.com/chec/commercejs-nextjs-demo-store" className="action-button" target="_blank">
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TopBar;