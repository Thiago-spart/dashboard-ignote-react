import type { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import { SignIn } from "web/pages/Home";

import { LayoutsEnum } from "types/enums/layouts";

SignIn.layout = LayoutsEnum.NONE;

export default SignIn;

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
	const session = await getSession({ req });

	if (session) {
		return {
			redirect: {
				destination: "/dashboard",
				permanent: false,
			},
		};
	}

	return {
		props: {},
	};
};
