import { Link } from "react-router-dom"

const DrinkAlert = ({ setShowDrinkAlert }) => {

    return (
        <div className="modal-container">
            <div className="modal-content">
                <div className="exit-button" onClick={() => setShowDrinkAlert(false)}>X</div>
                <h2 className="staff-list-title">Sign in to Save to your List!</h2>
                <div className="modal-btn">
                    <Link to="/signin" className="modal-login-btn">Sign In...</Link>
                </div>
            </div>
        </div>
    )
}

export default DrinkAlert