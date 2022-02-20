import { useState } from "react";
import { useRouter } from "next/router";
import { Image } from "next/image";
import { Flex, Box, Text, Icon } from '@chakra-ui/react'
import { BsFilter  } from "react-icons/bs";

import Property from "../components/Property";
import SearchFIlter from "../components/SearchFilters";
import noresult from '../assets/images/noresult.svg';

const Search = ({ Properties }) => {
    const [searchFilter, setSearchFliter ] = useState(false);
    const router = useRouter();
    
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
                Properties {router.query.purpose}
            </Text>
            <Flex flexWrap="wrap">
                {[].map((property) => <Property key={property} Key={property.id} />)}
            </Flex>    
                {[].length === 0 &&(
                    <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
                        {/* <Image alt="no result" src={noresult} /> */}
                        <Text fontSize="2xl" marginTop="3">No Result Foun</Text>
                    </Flex>
                )} 
        </Box>
    )
}

export default Search;