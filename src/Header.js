import React from 'react'
import './Header.css'
import { Search, ShoppingBasket } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{ basket, user }, dispatch] = useStateValue();
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className="header">
            <Link to='/'>
                <img
                    className="header_logo"
                    src="https://bloximages.chicago2.vip.townnews.com/kenoshanews.com/content/tncms/assets/v3/editorial/0/56/05663cea-77e2-5e21-8a79-53e9a96e9acc/5f1f3d4695a1a.image.jpg" alt="" />
            </Link>
            <div className="header_search">
                <input
                    className="header_searchInput"
                    type="text"
                />
                <Search className="header_searchIcon" />
            </div>
            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div
                        onClick={handleAuthentication}
                        className="header_option">
                        <span className="header_optionLineone">
                            hello {!user ? "Guest" : user?.email}
                        </span>
                        <span className="header_optionLinetwo">
                            {user ? "Sign Out" : "Sign in"}
                        </span>
                    </div>
                </Link>

                <Link to='/orders'>
                    <div className="header_option">
                        <span className="header_optionLineone">
                            return
                    </span>
                        <span className="header_optionLinetwo">
                            &orders
                    </span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionLineone">
                        your
                    </span>
                    <span className="header_optionLinetwo">
                        Prime
                    </span>
                </div>
                <Link to='/checkout'>
                    <div className="header_optionBasket">
                        <ShoppingBasket />
                        <span className="header_optionLinetwo header_basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
            </div>
        </div>


    )
}

export default Header
