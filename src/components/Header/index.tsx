import './index.css';

const Header = () => {
    return (
        <div className='header'>
            <div className="header-desktop">
                <div className="header-left-dkt">
                    <a href="https://commercejs-demo-store.netlify.app/collection" className="font-color-black">
                        Shop
                    </a>
                    <a href="https://commercejs-demo-store.netlify.app/about" className="font-color-black">
                        About
                    </a>
                </div>
                <div className="header-center-dkt">
                    <a href="/">
                        <img src="https://commercejs-demo-store.netlify.app/images/commerce.svg" className="logo cursor-pointer" alt="Logo" />
                    </a>
                </div>
                <div className="header-right-dkt">
                    <a href="https://commercejs-demo-store.netlify.app/login" className="font-color-black">
                        Login
                    </a>
                    <div className="cart-conn">
                        <div className="cart-icon">
                            <img src="/assets/img/basket-5855.svg" alt="" />
                        </div>
                        <div className="cart-count">0</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;