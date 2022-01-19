import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";

type SignInFormData = {
    email: string;
    password: string;
};

export default function SignIn() {
    const { register, handleSubmit, formState } = useForm();
    const { errors } = formState;

    const handleSignIn: SubmitHandler<SignInFormData> = async (data, event) => {
        event.preventDefault();
        console.log("DATA", data);
    };

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
                onSubmit={handleSubmit(handleSignIn)}
            >
                <Stack spacing="4">
                    <Input
                        name="email"
                        type="email"
                        label="E-mail"
                        error={errors?.email}
                        {...register("email", {
                            required: "e-mail necessário",
                        })}
                    />
                    <Input
                        name="password"
                        type="password"
                        label="Senha"
                        error={errors?.password}
                        {...register("password", {
                            required: "senha necessária",
                        })}
                    />
                </Stack>

                <Button
                    type="submit"
                    mt="6"
                    colorScheme="pink"
                    size="lg"
                    isLoading={formState?.isSubmitting}
                >
                    Entrar
                </Button>
            </Flex>
        </Flex>
    );
}
