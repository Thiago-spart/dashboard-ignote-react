import { signIn, useSession } from "next-auth/react";

import { Button, Flex } from "@chakra-ui/react";

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
				>
					<Button
						type="button"
						mt="6"
						colorScheme="pink"
						size="lg"
						onClick={() => {
							signIn("google");
						}}
						isLoading={loading}
					>
						Entrar
					</Button>
				</Flex>
			</Flex>
		</>
	);
};
