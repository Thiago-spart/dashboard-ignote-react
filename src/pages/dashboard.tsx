import { Flex } from "@chakra-ui/react";
import { NextPage } from "next";

import { Header } from "../components/header";
import { Sidebar } from "../components/sidebar";

const DashBoard: NextPage = () => {
  return (
    <Flex as="main" direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxW="1480" px="6">
        <Sidebar />
      </Flex>
    </Flex>
  );
};

export default DashBoard;
