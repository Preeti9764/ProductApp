import { Container, Flex, HStack ,Text, useColorMode} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React from 'react';
import { Button } from '@chakra-ui/react';
import { MdOutlineAddBox } from "react-icons/md";
import { LuSunMedium } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";

const NavBar= () => {
    const{colorMode,toggleColorMode} = useColorMode()
  return (
    <Container  maxW={"1140px"} px={4}>
      <Flex h={16} justifyContent={'space-between'} alignItems={"center"} >
        <Link to={"/"}>
      <Text
  bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='6xl'
  fontWeight='extrabold'
>Product Store 🛒 </Text>
</Link>
        <HStack alignItems={"center"} spacing={5}>
          <Link to={"/create"}>
          <Button><MdOutlineAddBox fontSize={30}/></Button>
          </Link>
          <Button onClick={toggleColorMode}>{colorMode==="dark"? <LuSunMedium  fontSize={"30px"} />:<IoMoon   fontSize={"25px"}/>}</Button>
        </HStack>
      </Flex>
      </Container>
  );
};

export default NavBar;