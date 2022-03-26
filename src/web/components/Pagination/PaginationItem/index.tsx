import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
	isCurrent?: boolean;
	number: number;
	onPageChange: (page: number) => void;
}

export const PaginationItem: React.FC<PaginationItemProps> = ({
	isCurrent = false,
	number,
	onPageChange,
}) => {
	if (isCurrent) {
		return (
			<Button
				size="sm"
				fontSize="xs"
				w="4"
				colorScheme="pink"
				disabled
				_disabled={{
					bg: "pink.500",
					cursor: "default",
				}}
			>
				{number}
			</Button>
		);
	}

	return (
		<Button
			size="sm"
			fontSize="xs"
			w="4"
			bg="gray.700"
			_hover={{
				bg: "gray.500",
			}}
			onClick={() => onPageChange(number)}
		>
			{number}
		</Button>
	);
};
