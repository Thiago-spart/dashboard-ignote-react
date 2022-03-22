/* eslint-disable @typescript-eslint/no-magic-numbers */
import dynamic from "next/dynamic";

import { Box, SimpleGrid, Text, theme } from "@chakra-ui/react";

import type { ApexOptions } from "apexcharts";

import { HeadTitle } from "../../components/HeadTitle";

import type { FCWithLayout } from "types/interfaces/layout";

const Chart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

const options: ApexOptions = {
	chart: {
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
		foreColor: theme.colors.gray[500],
	},
	grid: {
		show: false,
	},
	dataLabels: {
		enabled: false,
	},
	tooltip: {
		enabled: false,
	},
	xaxis: {
		type: "datetime",
		axisBorder: {
			color: theme.colors.gray[600],
		},
		axisTicks: {
			color: theme.colors.gray[600],
		},
		categories: [
			"2021-03-21T00:00:00.000Z",
			"2021-03-22T00:00:00.000Z",
			"2021-03-23T00:00:00.000Z",
			"2021-03-24T00:00:00.000Z",
			"2021-03-25T00:00:00.000Z",
			"2021-03-26T00:00:00.000Z",
			"2021-03-27T00:00:00.000Z",
		],
	},
	fill: {
		opacity: 0.3,
		type: "gradient",
		gradient: {
			shade: "dark",
			opacityFrom: 0.7,
			opacityTo: 0.3,
		},
	},
} as const;

const series = [
	{
		name: "series1",
		data: [31, 120, 10, 28, 61, 18, 109],
	},
];

export const DashBoard: FCWithLayout = () => {
	return (
		<>
			<HeadTitle title="Dashboard" />

			<SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
				<Box p={["6", "8"]} bg="gray.800" borderRadius="8" pb="4">
					<Text fontSize="lg" mb="4">
						Week subscribers
					</Text>
					<Chart type="area" height="160" series={series} options={options} />
				</Box>

				<Box p={["6", "8"]} bg="gray.800" borderRadius="8" pb="4">
					<Text fontSize="lg" mb="4">
						Opening tax
					</Text>
					<Chart type="area" height="160" series={series} options={options} />
				</Box>
			</SimpleGrid>
		</>
	);
};
