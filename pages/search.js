import { useState } from "react";
import { useRouter } from "next/router";
import { Image } from "next/image";
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter  } from "react-icons/bs";
import SearchFIlter from "../components/SearchFilters";

const Search = () => {
    const [searchFilter, setSearchFliter ] = useState(false);
    const router = useRouter()
    
    return ( 
        <Box>
            <Flex 
                cursor="pointer"
                bg="gray.100"
                borderBottom="1px"
                borderColor="gray.200"
                p="2"
                fontWeight="black"
                fontSize="lg"
                justifyContent="center"
                alignItems="center"
                onClick={() => setSearchFliter((prevFilter) => !prevFilter)}
            >
            <Text>Search Property By Filter</Text>
                <Icon pathLength="2" w="7" as={BsFilter} />
            </Flex>
            {searchFilter && <SearchFIlter />}
            <Text fontSize="2xl" p="4" fontWeight="bold">
                properties
                <Flex>

                </Flex>
            </Text>
        </Box>
    )
}

export default Search;