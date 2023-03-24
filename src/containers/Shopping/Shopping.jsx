import React from "react";

import Wrapper from "../../hoc/Wrapper";
import Controls from "../../components/Controls/Controls";

class Shopping extends React.Component {
    state = {
        products: {
            product1: 0,
            product2: 0,
            product3: 0,
            product4: 0,
        },
        totalPrice: 0,
    };
    render() {
        return (
            <Wrapper>
                <Controls />
            </Wrapper>
        );
    }
}
export default Shopping;
