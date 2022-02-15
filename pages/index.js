import Link from "next/link";
import Image from "next/image";
import {Flex, Box, Text, Buton} from "@chakra-ui/react";

const Banner = ({purpose}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10" > 
    <Image src={imageUrl} width={500} height={300} alt="banner" />
  </Flex>
)

export default function Home() {
  return (
    <div>
      <h1>Chakra ui</h1>
      <Banner purpose={"For Sale"} />
      <Banner purpose={"For Rent"} />

    </div>
  )
}
