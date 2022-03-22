import Head from "next/head";

import { SITE } from "../../../configs/site";

interface Props {
	title: string;
}

export const HeadTitle: FC<Props> = ({ title }) => (
	<Head>
		<title>
			{title} | {SITE.name}
		</title>
	</Head>
);
