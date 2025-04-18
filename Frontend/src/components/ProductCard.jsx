import React, { useState } from 'react';
import { Box ,Text,Heading,Image, HStack, IconButton,useToast, useDisclosure,VStack,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,Input,Button} from '@chakra-ui/react';
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { useProductStore } from '../store/product';



const ProductCard = ({product}) => {
  const [updatedProduct,setUpdatedProduct]=useState(product);
  const {deleteProduct,updateProduct}= useProductStore();
  const toast = useToast();
  const {isOpen, onOpen, onClose}= useDisclosure();

  const handleDeleteProduct = async (pid)=>{
    const {success,message} = await deleteProduct(pid)
    if(!success){
      toast({
        title: 'Error',
        description :message,
        status :'error',
        duration : 3000,
        isClosable :true,

      })
    }
    else{
      toast({
      title: 'Success',
      description : message,
      status : 'success',
      duration : 3000,
      isClosable : true,
      }
      )
    }
  }

  const handleUpdateProduct = async (pid,updatedProduct)=>{
    const {success,message} = await updateProduct(pid,updatedProduct)
    onClose();
    if(!success){
      toast({
        title: 'Error',
        description :message,
        status :'error',
        duration : 3000,
        isClosable :true,

      })
    }
    else{
      toast({
      title: 'Success',
      description : "Product updated Successfully",
      status : 'success',
      duration : 3000,
      isClosable : true,
      }
      )
    }

  }



  return (
    <Box shadow='lg' 
    rounded='lg'
    overflow = 'hidden'
    transition='all 0.3s'
    _hover={{transform:"translateY{-5px}",shadow:"xl"}} 
     backgroundColor='blue.900' padding={5} w={400} margin={15}>
      <Image src={product.image} alt={product.name} h={48} w='full' objectFit={"cover"}></Image>
      <Box p={4}>
        <Heading as='h3' size='md' mb={2}>{product.name}</Heading>
        <Text fontWeight='box' fontSize='xl' color='white' mb={4}>${product.price}</Text>
        <HStack spacing ={2}>
          <IconButton icon ={<FaEdit  />} onClick={onOpen} colorScheme='blue'></IconButton>
          <IconButton icon ={<MdDeleteOutline />}  
          onClick={()=>handleDeleteProduct(product._id)}colorScheme='blue'></IconButton>

        </HStack>
      </Box>
      <Modal  isOpen ={isOpen} onClose = {onClose}>
        <ModalOverlay>

        </ModalOverlay>
        <ModalContent>
          <ModalHeader>
          <VStack spacing={4}>
            <Text >Update Product</Text>
        <Input 
        placeholder='Name of product'
        name='name'  value={updatedProduct.name}
        onChange={(e)=>setUpdatedProduct({...updatedProduct,name:e.target.value})}></Input>
        <Input 
        placeholder='Price of product'
        name='price'
        type='number' value={updatedProduct.price}
        onChange={(e)=>setUpdatedProduct({...updatedProduct,price:e.target.value})}></Input>
        <Input 
        placeholder='Image URL of product'
        name='image' value={updatedProduct.image}
        onChange={(e)=>setUpdatedProduct({...updatedProduct,image:e.target.value})}></Input>
          </VStack>
          </ModalHeader>
          <ModalFooter>
            <Button colorScheme='blue' mr={3}
            onClick ={()=>handleUpdateProduct(product._id,updatedProduct)}>Update</Button>
            <Button variant='ghost' onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default ProductCard;