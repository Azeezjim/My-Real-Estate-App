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
                {properties.map((property) => <Property key={property} Key={property.id} />)}
            </Flex>    
                {Properties.length === 0 &&(
                    <Flex justifyContent="center" alignItems="center" flexDirection="column" marginTop="5" marginBottom="5">
                        {/* <Image alt="no result" src={noresult} /> */}
                        <Text fontSize="2xl" marginTop="3">No Result Foun</Text>
                    </Flex>
                )} 
        </Box>
    )
}


export default Search;

export async function getStaticProps({query}) {
    const purpose = query.purpose || 'for-sale';
    const rentFrequency = query.rentFrequency || 'yerly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';

    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);


return {
    props: {
    properties: data?.hits,
    }
} 

} 