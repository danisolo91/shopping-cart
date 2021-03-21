const Home = () => {
    return (
        <>
            <h1>Welcome to our page!</h1>
            <div className="home-description">
                <h2>Brand new products</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel ipsa dolorem totam neque repellendus placeat eveniet, quisquam commodi veritatis aspernatur ea optio, reprehenderit eos ipsum quas pariatur dolor itaque.</p>
            </div>
            <div className="features">
                <div className="feature">
                    <i className="bi bi-arrow-left-right"></i>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                </div>
                <div className="feature">
                    <i className="bi bi-speedometer"></i>
                    <span>Veniam vel ipsa dolorem totam neque repellendus placeat eveniet.</span>
                </div>
                <div className="feature">
                    <i className="bi bi-bar-chart-line"></i>
                    <span>Reprehenderit eos ipsum quas pariatur dolor itaque.</span>
                </div>
            </div>
        </>
    );
};

export default Home;