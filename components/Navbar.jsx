import Link from 'next/link';
import {Menu, MenuButton, MenuList, IconButton, MenuItem, Flex, Box, Spacer} from '@chakra-ui/react';
import {FcMenu, FcHome, FcAbout} from 'react-icons/fc';
import {BsSearch} from 'react-icons/bs';
import {FiKey} from 'react-icons/fi';

const Navbar = () => (
    <Flex p="2" borderBottom="1px" borderColor="gray.100" >
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link href="/" paddingLeft="2" > Azeezjim Homes & Suit </Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} varent='Outlined' color="red.400" />
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href='/search/purpose=for-sale' passHref>
                        <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link>
                    <Link href='/search/purpose=for-rent' passHref>
                        <MenuItem icon={<FiKey />}>Rent Propertiy</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
);

export default Navbar;