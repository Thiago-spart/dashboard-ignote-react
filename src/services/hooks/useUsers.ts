import { useQuery } from "react-query";
import { api } from "../api";

interface UserProps {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

interface GetUserResponseProps {
  totalCount: number;
  users: UserProps[]
}

export const getUsers = async (page: number): Promise<GetUserResponseProps> => {
  const { data, headers } = await api.get("users", {
    params: {
      page,
    }
  });

  const totalCount = Number(headers["x-total-count"])

  const users = data.users.map((user: UserProps) => {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(user.createdAt).toLocaleDateString("pt-BR", {
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
}

export const useUsers = (page: number) => {
  return useQuery(
    ["users", page],
    () => getUsers(page),
    {
      staleTime: 1000 * 5, //5 seconds
    }
  );
};
