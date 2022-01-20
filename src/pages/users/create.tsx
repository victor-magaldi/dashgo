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
    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <Box flex="1" borderRadius="8" bgColor="gray.800" p="8">
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
                            <Input name="name" label="Nome Completo" />
                            <Input name="email" label="E-mail" />
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
                            />
                            <Input
                                name="password_confirmation"
                                type="password"
                                label="Confirme sua senha"
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

                            <Button colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
}
