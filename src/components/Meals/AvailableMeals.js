import Loading from '../UI/Loading';
import classes from './AvailableMeals.module.css';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import { useEffect, useState } from 'react';

const AvailableMeals = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getAllProducts = async () => {
        setIsLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        console.log(data);
        setProducts([...data]);
        console.log(products);
        setIsLoading(false);
    };
    useEffect(() => {
        getAllProducts();
    }, []);
    let mealsList;
    if (isLoading) {
        mealsList = <Loading />;
    } else {
        mealsList = products.map((meal) => (
            <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.title}
                description={meal.description}
                price={meal.price}
                image={meal.image}
            />
        ));
    }

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
