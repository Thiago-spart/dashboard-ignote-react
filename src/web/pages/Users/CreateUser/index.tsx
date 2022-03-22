/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable arrow-parens */
/* eslint-disable prettier/prettier */
import Link from "next/link";
import { useRouter } from "next/router";

import {
	Box,
	Button,
	Divider,
	Flex,
	Heading,
	HStack,
	SimpleGrid,
	VStack,
} from "@chakra-ui/react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "web/components/Form/Input";

import type { FCWithLayout } from "types/interfaces/layout";

import { api } from "../../../../services/api";
import { queryClient } from "../../../../services/queryClient";

interface CreateUserDataFormProps {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

const CreateUserFormSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref("password")], "password must be the same"),
});

export const CreateUser: FCWithLayout = () => {
	const router = useRouter();

	const createUser = useMutation(
		async (user: CreateUserDataFormProps) => {
			const res = await api.post("users", {
				user: {
					...user,
					createdAt: new Date(),
				},
			});

			return res.data.user;
		},
		{
			onSuccess: () => {
				queryClient.invalidateQueries("users");
			},
		}
	);

	const { register, handleSubmit, formState } = useForm({
		resolver: yupResolver(CreateUserFormSchema),
	});
	const { errors } = formState;

	const handleCreateUser: SubmitHandler<CreateUserDataFormProps> = async (
		values
	) => {
		await createUser.mutateAsync(values);

		router.push("/users");
	};

	return (
		<Box
			as="form"
			onSubmit={handleSubmit(handleCreateUser)}
			flex="1"
			borderRadius="8"
			bg="gray.800"
			p={["6", "8"]}
		>
			<Heading size="lg" fontWeight="normal">
				Create User
			</Heading>

			<Divider my="6" borderColor="gray.700" />

			<VStack spacing="8">
				<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
					<Input
						label="Complete Name"
						{...register("name")}
						error={errors.name}
					/>
					<Input
						type="email"
						label="E-mail"
						{...register("email")}
						error={errors.email}
					/>
				</SimpleGrid>

				<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
					<Input
						type="password"
						label="Password"
						error={errors.password}
						{...register("password")}
					/>
					<Input
						type="password"
						label="Confirming password"
						error={errors.password_confirmation}
						{...register("password_confirmation")}
					/>
				</SimpleGrid>
			</VStack>

			<Flex mt="8" justify="flex-end">
				<HStack spacing="4">
					<Link href="/users" passHref>
						<Button as="a" colorScheme="whiteAlpha">
							Cancel
						</Button>
					</Link>
					<Button
						colorScheme="pink"
						type="submit"
						isLoading={formState.isSubmitting}
					>
						Save
					</Button>
				</HStack>
			</Flex>
		</Box>
	);
};
