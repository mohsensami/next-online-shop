import React from 'react';

import Wrapper from '../../hoc/Wrapper';
import Controls from '../../components/Controls/Controls';
import Modal from '../../components/UI/Modal/Modal';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Loading from '../../components/UI/Loading/Loading';

const prices = {
    product1: 59,
    product2: 89,
    product3: 99,
    product4: 79,
};

class Shopping extends React.Component {
    state = {
        products: {
            product1: 0,
            product2: 0,
            product3: 0,
            product4: 0,
        },
        totalPrice: 0,
        purchased: false,
        loading: false,
    };

    addProductHandler = (type) => {
        const prevCount = this.state.products[type];
        const updatedCount = prevCount + 1;
        const updatedProducts = {
            ...this.state.products,
        };
        updatedProducts[type] = updatedCount;
        const priceAdd = prices[type];
        const prevPrice = this.state.totalPrice;
        const newPrice = prevPrice + priceAdd;
        this.setState({ totalPrice: newPrice, products: updatedProducts });
    };

    removeProductHandler = (type) => {
        const prevCount = this.state.products[type];
        const updatedCount = prevCount - 1;
        const updatedProducts = {
            ...this.state.products,
        };
        updatedProducts[type] = updatedCount;
        const priceSub = prices[type];
        const prevPrice = this.state.totalPrice;
        const newPrice = prevPrice - priceSub;
        this.setState({ totalPrice: newPrice, products: updatedProducts });
    };

    purchasedHandler = () => {
        this.setState({ purchased: true });
    };

    modalCloseHandler = () => {
        this.setState({ purchased: false });
    };

    purchaseContinueHandler = () => {
        this.setState({ loading: true });
        const data = {
            products: this.state.products,
            totalprice: this.state.totalPrice,
            customer: {
                name: 'mohsen',
                email: 'mohsen@gmail.com',
            },
        };
        axios
            .post('/orders.json', data)
            .then((res) => {
                this.setState({ loading: false, purchased: false });
            })
            .catch((err) => {
                this.setState({ loading: false, purchased: false });
            });
    };

    render() {
        let order = <Order products={this.state.products} price={this.state.totalPrice} continue={this.purchaseContinueHandler} cancel={this.modalCloseHandler} />;
        if (this.state.loading) {
            order = <Loading />;
        }
        return (
            <Wrapper>
                <Modal show={this.state.purchased} modalClose={this.modalCloseHandler}>
                    {order}
                </Modal>
                <Controls productAdd={this.addProductHandler} productRemove={this.removeProductHandler} price={this.state.totalPrice} order={this.purchasedHandler} />
            </Wrapper>
        );
    }
}

export default Shopping;
