import React from 'react';
import styled from 'styled-components';
import './Slide2.css'

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

const ProductCard = ({ image, title, price, discount }) => (
  <Card>
    <Image src={image} alt={title} />
    <Title>{title}</Title>
    <Price>${price}</Price>
    <Discount>{discount}% off</Discount>
    
  </Card>
);

const Slide2 = () => {
  // Assuming productList is an array of product objects with properties like image, title, price, discount.
  const productList = [
    // Sample data
    { id: 1, image: 'https://m.media-amazon.com/images/I/818kmzObgCL._AC_SY200_.jpg', title: 'Product 1', price: 50, discount: 10 },
    { id: 2, image: 'https://m.media-amazon.com/images/I/61eEetcCb9L._AC_SY200_.jpg', title: 'Product 2', price: 80, discount: 15 },
    { id: 3, image: 'https://m.media-amazon.com/images/I/71t9-9MtwkL._AC_SY200_.jpg', title: 'Product 3', price: 120, discount: 20 },
    { id: 3, image: 'https://m.media-amazon.com/images/I/81icg54oMsL._AC_SY200_.jpg', title: 'Product 3', price: 120, discount: 20 },
    { id: 3, image: 'https://m.media-amazon.com/images/I/717wYrO+b0L._AC_SY200_.jpg', title: 'Product 3', price: 120, discount: 20 },
  ];

  return (
    <Container ClassName="uiod" >
      {productList.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </Container>
  );
};

export default Slide2;
