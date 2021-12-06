/* eslint-disable react/no-children-prop */
import {
  Center,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { FiGithub, FiSearch, FiUser } from "react-icons/fi";

export default function Home() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      as="main"
      bg="gray.800"
      height="100vh"
    >
      <form style={{ width: 400 }}>
        <FormControl id="email">
          <FormLabel color="white">
            <Center gridGap={4} justifyContent="flex-start">
              Search github user <FiGithub />
            </Center>
          </FormLabel>
          <Center gridGap={2} justifyContent="flex-start">
            <InputGroup>
              <InputLeftElement
                color="gray.300"
                pointerEvents="none"
                children={<FiUser />}
              />
              <Input colorScheme="blue" type="tel" placeholder="Username" />
            </InputGroup>
            <IconButton
              colorScheme="blue"
              aria-label="Search"
              icon={<FiSearch />}
            />
          </Center>
        </FormControl>
      </form>
    </Flex>
  );
}
