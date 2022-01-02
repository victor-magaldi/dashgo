import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";

// Removendo SSR da lib que necessita do window (client)
const ReactApexCharts = dynamic(
    () => {
        return import("react-apexcharts");
    },
    {
        ssr: false,
    }
);

const options = {};
const series = [{ name: "series 01", data: [3, 101, 25, 30, 28, 15, 109] }];

export default function Dashboard() {
    return (
        <Flex direction="column" h="100vh">
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
                <Sidebar />

                <SimpleGrid
                    flex="1"
                    gap="4"
                    minChildWidth="320px"
                    align="flex-start"
                >
                    <Box p="8" bgColor="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4">
                            Inscritos da Semana
                        </Text>
                        <ReactApexCharts
                            type="area"
                            height="160"
                            options={options}
                            series={series}
                        />
                    </Box>
                    <Box p="8" bgColor="gray.800" borderRadius={8}>
                        <Text fontSize="lg" mb="4">
                            Taxa de Abertura
                        </Text>
                    </Box>
                </SimpleGrid>
            </Flex>
        </Flex>
    );
}
