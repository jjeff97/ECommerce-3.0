
import styled from 'styled-components';
import { popularProducts } from '../data';

const Container = styled.div``;

const Product = () => {
    return (
    <Container>
            {popularProducts.map(item => (
                <Product item={item}/>
    ))}
    
        </Container>
    )
};

export default Product;
