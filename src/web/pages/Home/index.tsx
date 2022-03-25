import { signIn, useSession } from "next-auth/react";

import { Button, Flex, Heading, Icon } from "@chakra-ui/react";
import { RiGoogleLine, RiGithubLine, RiFacebookBoxLine } from "react-icons/ri";

import { HeadTitle } from "web/components/HeadTitle";

import type { FCWithLayout } from "types/interfaces/layout";

export const SignIn: FCWithLayout = () => {
	const { data } = useSession();
	const loading = data?.status === "loading";

	return (
		<>
			<HeadTitle title="Log-in" />
			<Flex w="100vw" h="100vh" align="center" justify="center" as="main">
				<Flex
					as="section"
					w="100%"
					maxW="360"
					bg="gray.800"
					p="8"
					borderRadius="8"
					flexDir="column"
					gap="6"
					justify="center"
					align="center"
				>
					<Heading as="h2" alignSelf="flex-start">
						Log-in with
					</Heading>

					<Flex align="center" justify="space-evenly" w="100%">
						<Button
							type="button"
							colorScheme="pink"
							isLoading={loading}
							disabled
						>
							<Icon as={RiGithubLine} fontSize="24" />
						</Button>

						<Button
							type="button"
							colorScheme="pink"
							onClick={() => {
								signIn("google");
							}}
							isLoading={loading}
						>
							<Icon as={RiGoogleLine} fontSize="24" />
						</Button>

						<Button
							type="button"
							colorScheme="pink"
							isLoading={loading}
							disabled
						>
							<Icon as={RiFacebookBoxLine} fontSize="24" />
						</Button>
					</Flex>
				</Flex>
			</Flex>
		</>
	);
};
