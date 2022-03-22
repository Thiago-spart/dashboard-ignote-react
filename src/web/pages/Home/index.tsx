import { Button, Flex, Stack } from "@chakra-ui/react";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "web/components/Form/Input";

import type { FCWithLayout } from "types/interfaces/layout";

/*
 * interface SignInDataFormProps {
 *   email: string;
 *   password: string;
 * }
 */

const signInFormSchema = yup.object().shape({
	email: yup.string().required().email(),
	password: yup.string().required(),
});

export const SignIn: FCWithLayout = () => {
	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(signInFormSchema),
	});

	const { errors } = formState;

	const handleSignIn: SubmitHandler<FieldValues> = async ({
		email,
		password,
	}) => {
		await new Promise((resolve) => setTimeout(resolve, 2000));

		console.log(email, password);
	};

	return (
		<Flex w="100vw" h="100vh" align="center" justify="center" as="main">
			<Flex
				as="form"
				w="100%"
				maxW="360"
				bg="gray.800"
				p="8"
				borderRadius="8"
				flexDir="column"
				onSubmit={handleSubmit(handleSignIn)}
			>
				<Stack spacing="4">
					<Input
						label="E-mail"
						type="email"
						error={errors.email}
						{...register("email")}
					/>
					<Input
						label="Password"
						type="password"
						error={errors.password}
						{...register("password")}
					/>
				</Stack>
				<Button
					type="submit"
					mt="6"
					colorScheme="pink"
					size="lg"
					isLoading={formState.isSubmitting}
				>
					Entrar
				</Button>
			</Flex>
		</Flex>
	);
};
