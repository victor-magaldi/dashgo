import { Flex, Button, Stack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

export default function SignIn() {
    const { register, handleSubmit } = useForm();

    function handleSignIn() {}

    return (
        <Flex
            w="100vw"
            h="100vh"
            alignItems={"center"}
            justifyContent={"center"}
        >
            <Flex
                as="form"
                width="100%"
                maxW={360}
                bg="gray.800"
                p="8"
                borderRadius={8}
                flexDir={"column"}
            >
                <Stack spacing="4">
                    <Input
                        name="email"
                        type="email"
                        label="E-mail"
                        {...register("email")}
                    />
                    <Input
                        name="password"
                        type="password"
                        label="Senha"
                        {...register("password")}
                    />
                </Stack>

                <Button type="submit" mt="6" colorScheme="pink" size="lg">
                    Entrar
                </Button>
            </Flex>
        </Flex>
    );
}
