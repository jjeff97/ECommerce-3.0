/** @format */

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	position: relative;
`;
const Wrapper = styled.div`
	height: 100%;
    display: flex;
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
	display: flex;
	align-items: center;
`;
const ImgContainer = styled.div`
    height:100%;
	flex: 1;
`;
const Image = styled.img`
    height: 80%;
`;
const InfoContainer = styled.div`
	flex: 1;
    padding: 50px;

`;

const Title = styled.h1`
font-size: 70px;
`;
const Description = styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;
const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;

const Arrow = styled.div`
	width: 50px;
	height: 50px;
	background-color: #fff7f7;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	bottom: 0;
	left: ${(props) => props.direction === "left" && "10px"};
	right: ${(props) => props.direction === "right" && "10px"};
	margin: auto;
	cursor: pointer;
	opacity: 0.5;
`;
const Slider = () => {
	return (
		<Container>
			<Arrow direction="left">
				<ArrowLeftOutlined />
			</Arrow>

			<Wrapper>
				<Slide>
					<ImgContainer>
						<Image src="https://www.cnet.com/a/img/xeP-01S5f7Xof9wUOimtWss3XfU=/940x0/2021/12/27/4f7e1226-436a-4743-a92c-3f729f263148/p1055536.jpg" />
					</ImgContainer>
					<InfoContainer>
						<Title>EVO</Title>
						<Description>4K OLED 97" SMART TELEVSION</Description>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
                <Slide>
					<ImgContainer>
						<Image src="https://www.cnet.com/a/img/xeP-01S5f7Xof9wUOimtWss3XfU=/940x0/2021/12/27/4f7e1226-436a-4743-a92c-3f729f263148/p1055536.jpg" />
					</ImgContainer>
					<InfoContainer>
						<Title>EVO</Title>
						<Description>4K OLED 97" SMART TELEVSION</Description>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</Slide>
			</Wrapper>
			<Arrow direction="right">
				<ArrowRightOutlined />
			</Arrow>
		</Container>
	);
};

export default Slider;
