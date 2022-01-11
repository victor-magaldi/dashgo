import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}
export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Victor Magaldi</Text>
                    <Text color="gray.300" fontSize="small">
                        victmagaldi@hotmail.com
                    </Text>
                </Box>
            )}

            <Avatar
                size="md"
                name="Victor de Souza Magaldi"
                src="https://github.com/victor-magaldi.png"
            />
        </Flex>
    );
}
