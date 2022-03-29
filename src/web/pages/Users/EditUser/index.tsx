/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/comma-dangle */
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
	Icon,
	InputGroup,
	InputRightElement,
	SimpleGrid,
	VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useMutation } from "react-query";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input } from "web/components/Form/Input";
import { HeadTitle } from "web/components/HeadTitle";

import type { FCWithLayout } from "types/interfaces/layout";

import { api } from "../../../../services/api";
import { queryClient } from "../../../../services/queryClient";

interface EditUserDataFormProps {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

const EditUserFormSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().required().email(),
	password: yup.string().required().min(8),
	password_confirmation: yup
		.string()
		.oneOf([null, yup.ref("password")], "password must be the same"),
});

export const EditUser: FCWithLayout = () => {
	const [selectedUser, setSelectedUser] = useState<EditUserDataFormProps>();
	const [showPassword, setShowPassword] = useState(false);

	const handlePasswordVisibility = () => setShowPassword(!showPassword);

	const router = useRouter();
	const UserId = router.query.slug;

	const { register, handleSubmit, formState, setValue } =
		useForm<EditUserDataFormProps>({
			resolver: yupResolver(EditUserFormSchema),
		});

	const { errors } = formState;

	const updateUser = useMutation(
		async (user) => {
			const res = await api.patch(`users/${UserId}`, {
				user: {
					...user,
					updateAt: new Date(),
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

	const handleUpdateUser: SubmitHandler<EditUserDataFormProps> = async (
		values
	) => {
		await updateUser.mutateAsync(values);

		router.push("/users");
	};

	useEffect(() => {
		const getUserInfo = async () => {
			const res = await api.get(`users/${UserId}`);

			setSelectedUser(res.data.user);
		};

		getUserInfo();
	}, [UserId]);

	useEffect(() => {
		if (!selectedUser) return;

		setValue("email", selectedUser.email);
		setValue("name", selectedUser.name);
		setValue("password", selectedUser.password);
		setValue("password_confirmation", selectedUser.password);
	}, [selectedUser, setValue]);

	return (
		<>
			<HeadTitle title="Add user" />

			<Box
				as="form"
				onSubmit={handleSubmit(handleUpdateUser)}
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
							{...register("name", { disabled: !selectedUser?.name })}
							error={errors.name}
						/>
						<Input
							type="email"
							label="E-mail"
							{...register("email", { disabled: !selectedUser?.email })}
							error={errors.email}
						/>
					</SimpleGrid>

					<SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
						<InputGroup position="relative">
							<Input
								type={showPassword ? "text" : "password"}
								label="Password"
								error={errors.password}
								{...register("password", { disabled: !selectedUser?.password })}
							/>
							<InputRightElement position="absolute" top="9" right="2">
								<Button
									variant="unstyled"
									size="sm"
									onClick={handlePasswordVisibility}
									display="flex"
									alignItems="center"
									justifyContent="center"
								>
									{showPassword ? (
										<Icon as={RiEyeLine} fontSize="20" />
									) : (
										<Icon as={RiEyeCloseLine} fontSize="20" />
									)}
								</Button>
							</InputRightElement>
						</InputGroup>
						<InputGroup position="relative">
							<Input
								type={showPassword ? "text" : "password"}
								label="Confirming password"
								error={errors.password_confirmation}
								{...register("password_confirmation", {
									disabled: !selectedUser?.password,
								})}
							/>
							<InputRightElement position="absolute" top="9" right="2">
								<Button
									variant="unstyled"
									size="sm"
									onClick={handlePasswordVisibility}
									display="flex"
									alignItems="center"
									justifyContent="center"
								>
									{showPassword ? (
										<Icon as={RiEyeLine} fontSize="20" />
									) : (
										<Icon as={RiEyeCloseLine} fontSize="20" />
									)}
								</Button>
							</InputRightElement>
						</InputGroup>
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
		</>
	);
};
