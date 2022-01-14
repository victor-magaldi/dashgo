import {
    Icon,
    Link as Chakralink,
    Text,
    LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import React, { ElementType } from "react";
import Link from "next/link";

interface NavLinkProps extends ChakraLinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
    return (
        <Link href={href} passHref>
            <Chakralink display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">
                    {children}
                </Text>
            </Chakralink>
        </Link>
    );
}
