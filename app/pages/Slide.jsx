import React from 'react';
import styled from 'styled-components';
import './Slide.css'
const Container = styled.div`
background-color: #fff; /* Add background color here */
  width: 100%;
  display: flex;
  overflow-x: auto;
  gap: 10px;
  padding: 10px;
  box-sizing: border-box;
`;

const Card = styled.div`
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #ffffff; /* Add background color here */
  transition: background-color 0.3s ease; /* Add transition for a smooth effect */

  &:hover {
    background-color: #f0f0f0; /* Change background color on hover */
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const Price = styled.p`
  font-size: 1rem;
`;

const Discount = styled.p`
  color: green;
  font-size: 1rem;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  font-size: 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const ProductCard = ({ image, title, price, discount }) => (
  <Card>
    <Image src={image} alt={title} />
    <Title>{title}</Title>
    <Price>${price}</Price>
    <Discount>{discount}% off</Discount>
    <ButtonsContainer>
      <Button>Add to Cart</Button>
      <Button>Buy Now</Button>
    </ButtonsContainer>
  </Card>
);

const Slide = () => {
  // Assuming productList is an array of product objects with properties like image, title, price, discount.
  const productList = [
    // Sample data
    { id: 1, image: 'https://img.freepik.com/premium-photo/two-women-walking-city-street-with-colorful-outfit-generative-ai-aig21_31965-141043.jpg?size=626&ext=jpg&ga=GA1.1.1552493246.1695719923&semt=sph', title: 'Product 1', price: 50, discount: 10 },
    { id: 2, image: 'https://img.freepik.com/free-photo/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg?size=626&ext=jpg&ga=GA1.1.1552493246.1695719923&semt=sph', title: 'Product 2', price: 80, discount: 15 },
    { id: 3, image: 'https://img.freepik.com/free-photo/front-view-young-female-white-shirt-posing-with-finger-expression-light-pink-wall-model-woman-pose_140725-33449.jpg?size=626&ext=jpg&ga=GA1.1.1552493246.1695719923&semt=sph', title: 'Product 3', price: 120, discount: 20 },
    { id: 3, image: 'https://img.freepik.com/premium-photo/cool-people-posing-together-low-angle_23-2149409768.jpg?size=626&ext=jpg&ga=GA1.1.1552493246.1695719923&semt=sph', title: 'Product 3', price: 120, discount: 20 },
    { id: 3, image: 'https://img.freepik.com/free-photo/brunette-model-posing_23-2148135935.jpg?size=626&ext=jpg&ga=GA1.1.1552493246.1695719923&semt=sph', title: 'Product 3', price: 120, discount: 20 },
  ];

  return (
    <Container>
      {productList.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Container>
  );
};

export default Slide;
