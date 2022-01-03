import {
    Box,
    Divider,
    Flex,
    Heading,
    Input,
    SimpleGrid,
    VStack,
} from "@chakra-ui/react";
import { Header } from "../../components/Header/Header";
import { Sidebar } from "../../components/Sidebar/Sidebar";

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

                    <VStack spacing="8">
                        <SimpleGrid
                            minChildWidth="240px"
                            spacing="8"
                            width="100%"
                        >
                            <Input name="name" label="Nome Completo" />
                            <Input name="email" label="E-mail" />
                        </SimpleGrid>

                        <SimpleGrid
                            minChildWidth="240px"
                            spacing="8"
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
                </Box>
            </Flex>
        </Box>
    );
}
