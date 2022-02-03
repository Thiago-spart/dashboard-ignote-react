import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react"
import { RiAddLine, RiPencilLine } from "react-icons/ri"
import { Header } from "../../components/header"
import { Pagination } from "../../components/pagination"
import { Sidebar } from "../../components/sidebar"

const UserList = () => {
	return (
		<Box>
			<Header />
			<Flex w="100%" my="6" maxW="1480" mx="auto" px="6">
				<Sidebar />
				<Box flex="1" borderRadius="8" bg="gray.800" p="8">
					<Flex mb="8" justify="space-between" align="center">
						<Heading size="lg" fontWeight="normal">Users</Heading>

						<Button as="a" size="sm" fontSize="sm" colorScheme="pink" leftIcon={<Icon as={RiAddLine} fontSize="20" />}>Add new</Button>
					</Flex>

					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th px="6" color="gray.300" w="32">
									<Checkbox colorScheme="pink" />
								</Th>
								<Th>Users</Th>
								<Th>Registration Date</Th>
								<Th w="8"></Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td px="6">
									<Checkbox colorScheme="pink" />
								</Td>
								<Td>
									<Box>
										<Text fontWeight="bold">Thiago Moraes</Text>
										<Text fontSize="sm" color="gray.300">user000.000resu@gmail.com</Text>
									</Box>
								</Td>
								<Td>
									02 February, 2021
								</Td>
								<Td>
									<Button
										as="a"
										size="sm"
										fontSize="sm"
										colorScheme="purple"
										leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
									>
										Edit
									</Button>
								</Td>
							</Tr>
						</Tbody>
					</Table>
						<Pagination />
				</Box>
			</Flex>
		</Box>
	)
}

export default UserList