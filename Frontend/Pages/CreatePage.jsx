import React, { useState } from 'react';
import {Box, Heading, VStack,Input,Button, Center, Flex, useToast} from "@chakra-ui/react"
import { useProductStore } from '../src/store/product';

const CreatePage
 = () => {
  const [newProduct,setNewProduct]  = useState(
   {
      name:"",
      price:"",
      image:"",
    }
  );
  const toast= useToast();
   const {createProduct} = useProductStore();

    const handleAddProduct=async()=>{
      const {success,message}=await createProduct(newProduct);
      if(!success){
        toast({
          title:"Error",
          description: message,
          status : "error",
          isClosable: true,
        }
        )
      }
      else{

        toast({
          title:"Success",
          description: message,
          status : "success",
          isClosable: true,
        }
        )
      }
     setNewProduct({ name: "", price: "", image: "" });
    };

  return (
    <Flex
    height="100vh"
    // alignItems="center"
    justifyContent="center"
  >
   <Box maxH={450}backgroundColor={'blue.900'}  margin={40} padding={30} borderRadius={20} >
    <VStack spacing={10}>
      <Heading fontSize={50}>Create New Product</Heading>
      <VStack width={500} spacing={10}>
        <Input 
        placeholder='Name of product'
        name='name'
        value={newProduct.name}
        onChange={(e)=>setNewProduct({...newProduct,name:e.target.value})}></Input>
        <Input 
        placeholder='Price of product'
        name='price'
        type='number'
        value={newProduct.price}
        onChange={(e)=>setNewProduct({...newProduct,price:e.target.value})}></Input>
        <Input 
        placeholder='Image URL of product'
        name='image'
        value={newProduct.image}
        onChange={(e)=>setNewProduct({...newProduct,image:e.target.value})}></Input>
        <Button onClick={handleAddProduct}
        width={200} height={50} fontSize={25} padding={5} backgroundColor={'grey.500'}>Add Product</Button>
      </VStack>
    </VStack>
   </Box>
   </Flex>
  );
};

export default CreatePage
;