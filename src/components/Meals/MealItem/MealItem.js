import classes from './MealItem.module.css';
import { useContext, useState } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from './../../../store/cart-context';
import Modal from '../../UI/Modal';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);
    const [product, setProduct] = useState({});

    const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        });
    };
    const modalHandler = async (id) => {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        return setShowModal((prev) => !prev);
    };
    return (
        <li className={classes.meal}>
            <div>
                <h3 onClick={() => modalHandler(props.id)}>{props.name}</h3>
                {showModal && (
                    <Modal>
                        <div>
                            <h3>{product.title}</h3>
                            <div>
                                <img width="300" src={product.image} alt={product.title} />
                            </div>
                        </div>
                        <div>
                            {product.title}
                            <button onClick={() => setShowModal(false)}>Close</button>
                        </div>
                    </Modal>
                )}
                <div>
                    <img src={props.image} alt={props.title} width="200" />
                </div>
                {/* <div className={classes.description}>{props.description}</div> */}
                <div className={classes.price}>{price}</div>
            </div>
            <MealItemForm onAddToCart={addToCartHandler} />
        </li>
    );
};

export default MealItem;
