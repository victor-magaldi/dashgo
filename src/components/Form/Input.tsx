import {
    FormControl,
    FormLabel,
    Input as ChakraInput,
    InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef } from "react";

interface InputProps extends ChakraInputProps {
    name: string;
    label?: string;
}
const InputBase = ({ name, label, ...rest }: InputProps) => {
    return (
        <FormControl>
            {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

            <ChakraInput
                id={name}
                name={name}
                type={name}
                focusBorderColor="pink.500"
                bg="gray.900"
                variant="filled"
                _hover={{
                    bgColor: "gray.900",
                }}
                size="lg"
                {...rest}
            />
        </FormControl>
    );
};
export const Input = forwardRef(InputBase);
