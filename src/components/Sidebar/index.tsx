import { Box, Stack } from "@chakra-ui/react";
import {
    RiGitMergeLine,
    RiInputMethodLine,
    RiContactsLine,
    RiDashboardLine,
} from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title="Geral">
                    <NavLink href={"/dashboard"} icon={RiDashboardLine}>
                        Dashboard
                    </NavLink>
                    <NavLink href={"/users"} icon={RiContactsLine}>
                        Usuários
                    </NavLink>
                </NavSection>
                <NavSection title="Automação">
                    <NavLink href={"/forms"} icon={RiInputMethodLine}>
                        Formulários
                    </NavLink>
                    <NavLink href={"/automation"} icon={RiGitMergeLine}>
                        Automação
                    </NavLink>
                </NavSection>
            </Stack>
        </Box>
    );
}
