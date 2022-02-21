import { useEffect, useState } from "react";
import {Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from "next/router";
import { MdCancel } from "react-icons/md"
import Image from "next/image";

import { filterData, getFilterValue } from "../utils/filterData";

const SearchFIlter = () => {
    const [filters, setFilter] = useState(filterData);

    const searchProperties = (filterValue) => {

    }

    return (
        <Box bg="gray.100" p="4" justifyContent="center" flexWrap="wrap" > 
            {filters.map((filter) => (
                <Box key={filter.queryName} > 
                    <Select onChanged={(e) => searchProperties({[filter.queryName]: e.target.value})}
                    w="fit-content"
                    p="2"
                    placeholder={filter.placeholder}
                    ></Select>
                </Box>
            ))}
        </Box>
    ) 
}

export default SearchFIlter;