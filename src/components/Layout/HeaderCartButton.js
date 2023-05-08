import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [btnIsHightlited, setBtnIsHightlited] = useState(false);
    const { items } = cartCtx;

    const numberOfCartItems = items.reduce((cartNumber, item) => {
        return cartNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} $ ${btnIsHightlited ? classes.bump : ""}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnIsHightlited(true);
        const timer = setTimeout(() => {
            setBtnIsHightlited(false);
        }, 300);
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
};

export default HeaderCartButton;
