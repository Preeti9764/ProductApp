import {Center, Container,SimpleGrid,Text, VStack } from '@chakra-ui/react';
import {Link } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useProductStore } from '../src/store/product';
import ProductCard from '../src/components/ProductCard';

const HomePage = () => {
  const {fetchProducts,products}=useProductStore();

  useEffect(()=>{ fetchProducts() },[fetchProducts]);
  console.log("products",products);
  
  return ( 
   <Container marginTop={100} marginLeft={200}>
   
    <VStack >
      <Text 
      
      bgGradient='linear(to-l, #7928CA, #FF0080)'
      bgClip='text'
      fontSize='4xl'
      fontWeight='extrabold'>
       Current Products 🚀
      </Text>
      <SimpleGrid 
      columns={{base:1,md:1,lg:3}} spacingY={100} w={500} spacingX={500}>
        {products.map((product)=>(<ProductCard key={product.id} product={product}></ProductCard>))}
        
      </SimpleGrid>
      {products.length === 0 && (
      <Text fontSize={20}>
         No products found  😥 {"   "}
        <Text as='span' _hover={{textDecoration:"underline"}} color='blue.500' spacing={30}>
      <Link to="/create">Create Product</Link>
      </Text>
        </Text>
      )}
      
    </VStack>

   </Container>
  );
};

export default HomePage
;