import { Box, Stack } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
    totalCountRegisters: number;
    registersPerPage?: number;
    currentPage?: number;
    onPageChange: (page: number) => void;
}
const SIBLINGCOUNT = 1;

function generatePageArray(from: number, to: number) {
    return [...new Array(to - from)]
        .map((_, i) => {
            return from + i + 1;
        })
        .filter((page) => page > 0);
}

export function Pagination({
    totalCountRegisters,
    registersPerPage = 10,
    currentPage = 1,
    onPageChange,
}: PaginationProps) {
    const lastPage = Math.ceil(totalCountRegisters / registersPerPage);

    const previousPage =
        currentPage > 1
            ? generatePageArray(currentPage - 1 - SIBLINGCOUNT, currentPage - 1)
            : [];
    const nextPages =
        currentPage < lastPage
            ? generatePageArray(
                  currentPage,
                  Math.min(currentPage + SIBLINGCOUNT, lastPage)
              )
            : [];

    console.log(nextPages, previousPage);
    return (
        <Stack
            direction={["column", "row"]}
            mt="8"
            justify="space-between"
            align="center"
            spacing="6"
        >
            <Box>
                <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
            </Box>
            <Stack direction="row" spacing="2">
                {previousPage.length > 0 &&
                    previousPage.map((page) => {
                        console.log("teste", page);

                        return <PaginationItem key={page} number={page} />;
                    })}

                <PaginationItem isCurrent number={currentPage} />

                {nextPages.length > 0 &&
                    nextPages.map((page) => {
                        console.log("teste", page);
                        return <PaginationItem key={page} number={page} />;
                    })}
            </Stack>
        </Stack>
    );
}
