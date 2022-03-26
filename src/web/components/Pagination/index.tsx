/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Box, Stack, Text } from "@chakra-ui/react";

import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
	totalCountOfRegisters: number;
	registersPerPage?: number;
	currentPage?: number;
	onPageChange?: (page: number) => void;
}

const siblingsCount = 1;

const generatePagesArray = (from: number, to: number) => {
	return [...new Array(to - from)]
		.map((_, index) => {
			return from + index + 1;
		})
		.filter((page) => page > 0);
};

export const Pagination: React.FC<PaginationProps> = ({
	totalCountOfRegisters,
	currentPage = 1,
	onPageChange,
	registersPerPage = 10,
}) => {
	const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

	const previousPages =
		currentPage > 1
			? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
			: [];

	const nextPages =
		currentPage < lastPage
			? generatePagesArray(
					currentPage,
					Math.min(currentPage + siblingsCount, lastPage)
			  )
			: [];

	const currentDecimalPage = {
		from: currentPage === 1 ? 0 : (currentPage - 1) * 10,
		to:
			currentPage * 10 < totalCountOfRegisters
				? currentPage * 10
				: totalCountOfRegisters,
	};

	return (
		<Stack
			direction={["column", "row"]}
			spacing="6"
			mt="8"
			justify="space-between"
			align="center"
		>
			<Box whiteSpace="nowrap">
				<strong>{currentDecimalPage.from}</strong> -{" "}
				<strong>{currentDecimalPage.to}</strong> of{" "}
				<strong>{totalCountOfRegisters}</strong>
			</Box>
			<Stack direction="row" spacing="2">
				{currentPage > 1 + siblingsCount && (
					<>
						<PaginationItem onPageChange={onPageChange} number={1} />
						{currentPage > 2 + siblingsCount && (
							<Text color="gray.300" w="8" textAlign="center">
								...
							</Text>
						)}
					</>
				)}

				{previousPages.length > 0 &&
					previousPages.map((page) => {
						return (
							<PaginationItem
								onPageChange={onPageChange}
								number={page}
								key={page}
							/>
						);
					})}

				<PaginationItem
					onPageChange={onPageChange}
					number={currentPage}
					isCurrent
				/>

				{nextPages.length > 0 &&
					nextPages.map((page) => (
						<PaginationItem
							onPageChange={onPageChange}
							number={page}
							key={page}
						/>
					))}

				{currentPage + siblingsCount < lastPage && (
					<>
						{currentPage + 1 + siblingsCount < lastPage && (
							<Text color="gray.300" w="8" textAlign="center">
								...
							</Text>
						)}
						<PaginationItem onPageChange={onPageChange} number={lastPage} />
					</>
				)}
			</Stack>
		</Stack>
	);
};
