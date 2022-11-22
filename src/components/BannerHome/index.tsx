import './index.css';

const BannerHome = () => {
    return (
        <div className="banner-home">
            <div className="banner-container">
                <div className="banner-item">
                    <p className="banner-header">The care you've always needed</p>
                    <p className="banner-subheader">A range of products for you</p>
                    <a href="https://commercejs-demo-store.netlify.app/collection" className="banner-btn">
                        Shop now
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BannerHome;