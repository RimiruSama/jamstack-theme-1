import './index.css';

const Categories = () => {
    return (
        <div className="categories">
            <div className="custom-container">
                <p className="cate-title">Categories</p>
                <div className="category-collection">
                    <div className="category-item">
                        <a href="https://commercejs-demo-store.netlify.app/collection#facial-products">
                            <div
                                className="collection-item-img"
                                style={{
                                    background: 'url(https://commercejs-demo-store.netlify.app/images/collection/1.png) center center / cover'
                                }}
                            >
                                {/* <img src="https://commercejs-demo-store.netlify.app/images/collection/1.png" alt="" /> */}
                            </div>
                            <p className="collection-item-title">
                                Facial Products
                            </p>
                        </a>
                    </div>
                    <div className="category-item">
                        <a href="https://commercejs-demo-store.netlify.app/collection#facial-products">
                            <div
                                className="collection-item-img"
                                style={{
                                    background: 'url(https://commercejs-demo-store.netlify.app/images/collection/2.png) center center / cover'
                                }}
                            >
                                {/* <img src="https://commercejs-demo-store.netlify.app/images/collection/2.png" alt="" /> */}
                            </div>
                            <p className="collection-item-title">
                                Hair Products
                            </p>
                        </a>
                    </div>
                    <div className="category-item">
                        <a href="https://commercejs-demo-store.netlify.app/collection#facial-products">
                            <div
                                className="collection-item-img"
                                style={{
                                    background: 'url(https://commercejs-demo-store.netlify.app/images/collection/3.png) center center / cover'
                                }}
                            >
                                {/* <img src="https://commercejs-demo-store.netlify.app/images/collection/3.png" alt="" /> */}
                            </div>
                            <p className="collection-item-title">
                                Body Products
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories;