import { useState } from "react";
import { useRouter } from "next/router";
import { Image } from "next/image";
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter  } from "react-icons/bs";

const Search = () => {
    const [searchFilter, setSearchFliter ] = useState(false);
    const router = useRouter()
    
    return (
        <Box>
            <Flex 
                cursor="pointer"
                bg="gray.100"
            >
                <Text
                    cursor="pointer"
                    bg="gray.100"
                    borderBottom="1px"
                    p="2"
                    fontWeight="black"
                    fontSize="lg"
                    justifyContent="center"
                    alignItems="center"
                >
                    Search Property By Filter</Text>
            </Flex>
        </Box>
    )
}

export default Search;