/* eslint-disable @typescript-eslint/naming-convention */
import { useQuery } from "react-query";

import { api } from "../api";

interface UserProps {
	id: string;
	name: string;
	email: string;
	created_at: string;
	createdAt: string;
	updateAt?: string;
}

interface GetUserResponseProps {
	totalCount: number;
	users: Array<UserProps>;
}

const TEN_MINUTES = 5000;

export const getUsers = async (page: number): Promise<GetUserResponseProps> => {
	const { data, headers } = await api.get("users", {
		params: {
			page,
		},
	});

	const totalCount = Number(headers["x-total-count"]);

	const users = data.users.map((user: UserProps) => {
		return {
			id: user.id,
			name: user.name,
			email: user.email,
			createdAt: new Date(user.created_at).toLocaleDateString("en", {
				day: "2-digit",
				month: "long",
				year: "numeric",
			}),
		};
	});

	return {
		users,
		totalCount,
	};
};

export const useUsers = (page: number) => {
	return useQuery(["users", page], () => getUsers(page), {
		staleTime: TEN_MINUTES,
	});
};
