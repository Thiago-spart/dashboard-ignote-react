/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/comma-dangle */
import type { InputProps as ChakraInputProps } from "@chakra-ui/react";
import {
	FormControl,
	FormErrorMessage,
	FormLabel,
	Input as ChakraInput,
} from "@chakra-ui/react";
import type { ForwardRefRenderFunction } from "react";
import { forwardRef } from "react";
import type { FieldError } from "react-hook-form";

interface InputProps extends ChakraInputProps {
	name: string;
	label?: string;
	error?: FieldError;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, label, error = null, ...rest },
	ref
) => {
	return (
		<FormControl isInvalid={Boolean(error)}>
			{Boolean(label) && <FormLabel htmlFor={name}>{label}</FormLabel>}
			<ChakraInput
				name={name}
				id={name}
				focusBorderColor="pink.500"
				bg="gray.900"
				variant="filled"
				_hover={{
					bg: "gray.900",
				}}
				size="lg"
				ref={ref}
				{...rest}
			/>

			{Boolean(error) && <FormErrorMessage>{error?.message}</FormErrorMessage>}
		</FormControl>
	);
};

export const Input = forwardRef(InputBase);
