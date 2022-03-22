/* eslint-disable @typescript-eslint/comma-dangle */
/* eslint-disable multiline-ternary */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import NextLink from "next/link";

import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Icon,
	Spinner,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
	useBreakpointValue,
	Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Pagination } from "web/components/Pagination";

import { useUsers } from "../../../services/hooks/useUsers";

import type { FCWithLayout } from "types/interfaces/layout";

import { api } from "../../../services/api";
import { queryClient } from "../../../services/queryClient";

const TEN_MINUTES_IN_MILLISECONDS = 1000 * 60 * 10; //10 minutes;

export const UserList: FCWithLayout = () => {
	const [page, setPage] = useState(1);
	const { data, isLoading, error, isFetching } = useUsers(page);

	const isWideVersion = useBreakpointValue({
		base: false,
		lg: true,
	});

	const handlePrefetchUser = async (userId: string) => {
		await queryClient.prefetchQuery(
			["user", { userId }],
			async () => {
				const res = await api.get(`users/${userId}`);

				return res.data;
			},
			{
				staleTime: TEN_MINUTES_IN_MILLISECONDS,
				// eslint-disable-next-line prettier/prettier
			}
		);
	};

	return (
		<Box flex="1" borderRadius="8" bg="gray.800" p="8">
			<Flex mb="8" justify="space-between" align="center">
				<Heading size="lg" fontWeight="normal">
					Users
					{!isLoading && isFetching && (
						<Spinner size="sm" color="gray.500" ml="4" />
					)}
				</Heading>

				<NextLink href="/users/create" passHref>
					<Button
						as="a"
						size="sm"
						fontSize="sm"
						colorScheme="pink"
						leftIcon={<Icon as={RiAddLine} fontSize="20" />}
					>
						Add new
					</Button>
				</NextLink>
			</Flex>

			{isLoading ? (
				<Flex align="center" justify="center">
					<Spinner />
				</Flex>
			) : error ? (
				<Flex align="center" justify="center">
					Data error
				</Flex>
			) : (
				<>
					<Table colorScheme="whiteAlpha">
						<Thead>
							<Tr>
								<Th px={["4", "4", "6"]} color="gray.300" w="32">
									<Checkbox colorScheme="pink" />
								</Th>
								<Th>Users</Th>
								{isWideVersion && <Th>Registration Date</Th>}
								{isWideVersion && <Th w="8"></Th>}
							</Tr>
						</Thead>
						<Tbody>
							{data?.users.map(({ createdAt, email, id, name }) => (
								<Tr key={id}>
									<Td px={["4", "4", "6"]}>
										<Checkbox colorScheme="pink" />
									</Td>
									<Td>
										<Box>
											<Text fontWeight="bold">
												<Link
													color="purple.400"
													onMouseEnter={() => handlePrefetchUser(id)}
												>
													{name}
												</Link>
											</Text>
											<Text fontSize="sm" color="gray.300">
												{email}
											</Text>
										</Box>
									</Td>
									{isWideVersion && <Td>{createdAt}</Td>}
									{isWideVersion && (
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
									)}
								</Tr>
							))}
						</Tbody>
					</Table>
					<Pagination
						totalCountOfRegisters={Number(data?.totalCount)}
						currentPage={page}
						onPageChange={setPage}
					/>
				</>
			)}
		</Box>
	);
};