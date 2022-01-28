import { useQuery } from "react-query";
import { api } from "../api";

type Users = {
    id: string
    name: string
    email: string
    createdAt: string
}

export const getUsers = async () => {
    const { data } = await api.get("users");

    const users: Promise<Users[]> = data.users.map((user) => {
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            createdAt: new Date(
                Number(user.createdAt)
            ).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "short",
                year: "numeric",
            }),
        };
    });
    return users;
}

export function useUsers() {
    return useQuery(
        "users",
        getUsers,
        {
            // o tempo que definiremos que o dado não irá mais mudar
            staleTime: 1000 * 5,
        }
    );
}