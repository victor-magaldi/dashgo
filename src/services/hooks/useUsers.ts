import { useQuery } from "react-query";
import { api } from "../api";

type Users = {
    id: string
    name: string
    email: string
    createdAt: string
}
export const getUsers = async (page: number) => {
    const { data, headers } = await api.get("users", {
        params: {
            page
        }
    });

    const totalCount = Number(headers["x-total-count"])

    const users: Users[] = data.user.map((user) => {
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
    return {
        users, totalCount
    };
}

export function useUsers(page: number) {
    return useQuery(
        ["users", page], () => getUsers(page)
        ,
        {
            // o tempo que definiremos que o dado não irá mais mudar
            staleTime: 1000 * 5,
        }
    );
}