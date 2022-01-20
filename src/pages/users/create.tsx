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
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { SubmitHandler, useForm } from "react-hook-form";

type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
};
const createUserFormSchema = yup
    .object()
    .shape({
        name: yup.string().required("nome obrigatória"),

        email: yup
            .string()
            .required("e-mail obrigatório")
            .email("email inválido"),
        password: yup
            .string()
            .required("senha obrigatória")
            .min(6, "a senha precisa de 6 caracteres no mínimo"),
        password_confirmation: yup
            .string()
            .required("senha obrigatória")
            .oneOf(
                [null, yup.ref("password")],
                "as Senhas precisam ser iguais"
            ),
    })
    .required();

export default function CreateUser() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(createUserFormSchema),
    });
    const { errors } = formState;

    const handleCreateUser: SubmitHandler<CreateUserFormData> = (
        values,
        evt
    ) => {
        evt.preventDefault();
        console.log("values ", values);
    };
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box
                    as="form"
                    flex="1"
                    borderRadius="8"
                    bgColor="gray.800"
                    p="8"
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading size="lg" fontWeight="normal">
                        Criar usuário
                    </Heading>

                    <Divider my="6" borderColor="gray.700" />

                    <VStack spacing={["6", "8"]}>
                        <SimpleGrid
                            minChildWidth="240px"
                            spacing={["6", "8"]}
                            width="100%"
                        >
                            <Input
                                name="name"
                                label="Nome Completo"
                                error={errors?.name}
                                {...register("name")}
                            />
                            <Input
                                name="email"
                                label="E-mail"
                                error={errors?.email}
                                {...register("email")}
                            />
                        </SimpleGrid>

                        <SimpleGrid
                            minChildWidth="240px"
                            spacing={["6", "8"]}
                            width="100%"
                        >
                            <Input
                                name="password"
                                type="password"
                                label="Senha"
                                error={errors?.password}
                                {...register("password")}
                            />
                            <Input
                                name="password_confirmation"
                                type="password"
                                label="Confirme sua senha"
                                error={errors?.password_confirmation}
                                {...register("password_confirmation")}
                            />
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing={["6", "8"]}>
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">
                                    Cancelar
                                </Button>
                            </Link>

                            <Button
                                colorScheme="pink"
                                type="submit"
                                isLoading={formState?.isSubmitting}
                            >
                                Salvar
                            </Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
