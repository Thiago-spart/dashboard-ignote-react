/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	Button,
	Icon,
	useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { RiCloseLine } from "react-icons/ri";
import type {
	QueryObserverResult,
	RefetchOptions,
	RefetchQueryFilters,
} from "react-query";

import { api } from "services/api";

interface ConfirmDeleteDialogProps {
	userId: string;
	refetch: <TPageData>(
		options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
	) => Promise<QueryObserverResult<any>>;
}

export const ConfirmDeleteDialog: React.FC<ConfirmDeleteDialogProps> = ({
	userId,
	refetch,
}) => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef(null);

	const deleteUser = async (id: string) => {
		try {
			const res = await api.delete(`users/${id}`);

			refetch();

			return res;
		} catch (err: unknown) {
			return err;
		} finally {
			onClose();
		}
	};

	return (
		<>
			<Button
				as="a"
				size="sm"
				fontSize="sm"
				cursor="pointer"
				colorScheme="red"
				aria-label="Delete user"
				onClick={onOpen}
			>
				<Icon as={RiCloseLine} fontSize="16" />
			</Button>

			<AlertDialog
				isOpen={isOpen}
				leastDestructiveRef={cancelRef}
				onClose={onClose}
				isCentered
			>
				<AlertDialogOverlay>
					<AlertDialogContent bgColor="gray.800">
						<AlertDialogHeader fontSize="lg" fontWeight="bold">
							Delete User
						</AlertDialogHeader>

						<AlertDialogBody>
							Are you sure? You can&apos;t undo this action afterwards.
						</AlertDialogBody>

						<AlertDialogFooter>
							<Button
								ref={cancelRef}
								onClick={onClose}
								colorScheme="whiteAlpha"
							>
								Cancel
							</Button>
							<Button
								colorScheme="red"
								onClick={() => deleteUser(userId)}
								ml={3}
							>
								Delete
							</Button>
						</AlertDialogFooter>
					</AlertDialogContent>
				</AlertDialogOverlay>
			</AlertDialog>
		</>
	);
};
