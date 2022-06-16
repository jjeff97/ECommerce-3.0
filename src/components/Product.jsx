/** @format */

import { FavoriteBorderOutlined, SearchOutlined, ShoppingBasketOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    flex:1;
    margin: 100px;
	min-width: 350px;
	height: 300px;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: gray;
	position: relative;

    `;

const Circle = styled.div`
	width: 200px;
	height: 200px;
	border-radius: 50%;
	background-color: white;
	position: absolute;
`;
const Image = styled.img`
	height:75%;
	z-index: 2;
`;
const Info = styled.div`
	width:100%;
	height:100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: gray;
	z-index: 3;


`;
const Icon = styled.div``;


const Product = ({ item }) => {
    return (
			<Container>
				<Circle />
				<Image src={item.img} />
				<Info>
					<Icon>
						<ShoppingBasketOutlined />
					</Icon>
					<Icon>
						<SearchOutlined />
					</Icon>
					<Icon>
						<FavoriteBorderOutlined />
					</Icon>
				</Info>
			</Container>
		);
};

export default Product;
