const MainPage = () => {

    return (
        <div className="main-page-container">
            <div className="main-content">
                <div className="category-card">All</div>
                <div className="category-card">
                    <div className="icon-container" id="beer-">
                        <img src="src\assets\images\beer.png" alt="image of beer" className="drink-icon"/>
                    </div>
                </div>
                <div className="category-card">
                    <div className="icon-container">
                        <img src="src\assets\images\brandy.png" alt="image of brandy" className="drink-icon" />
                    </div>
                </div>
                <div className="category-card">
                    <div className="icon-container">
                        <img src="src\assets\images\gin-tonic.png" alt="image of gin" className="drink-icon" id="gin-icon"/>
                    </div>
                </div>
                <div className="category-card">
                    <div className="icon-container">
                        <img src="src\assets\images\rum.png" alt="image of rum" className="drink-icon" />
                    </div>
                </div>
                <div className="category-card">
                    <div className="icon-container">
                        <img src="src\assets\images\tequila.png" alt="image of tequila" className="drink-icon" />
                    </div>
                </div>
                <div className="category-card">
                    <div className="icon-container">
                        <img src="src\assets\images\vodka.png" alt="image of vodka" className="drink-icon" />
                    </div>
                </div>
                <div className="category-card">
                    <div className="icon-container">
                        <img src="src\assets\images\whiskey.png" alt="image of whiskey" className="drink-icon" />
                    </div>
                </div>
                <div className="category-card">
                    <div className="icon-container">
                        <img src="src\assets\images\wine.png" alt="image of wine" className="drink-icon" />
                    </div>
                </div>
                <div className="category-card">
                    <div className="icon-container">
                        <img src="" alt="other" className="drink-icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainPage