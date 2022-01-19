import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components/Form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type SignInFormData = {
    email: string;
    password: string;
};
const sigInSchema = yup
    .object()
    .shape({
        email: yup
            .string()
            .required("e-mail obrigatório")
            .email("email inválido"),
        password: yup.string().required("senha obrigatória"),
    })
    .required();

export default function SignIn() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(sigInSchema),
    });
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
                        {...register("email")}
                    />
                    <Input
                        name="password"
                        type="password"
                        label="Senha"
                        error={errors?.password}
                        {...register("password")}
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
