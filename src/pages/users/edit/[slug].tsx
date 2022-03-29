import { EditUser } from "web/pages/Users/EditUser";

import { LayoutsEnum } from "types/enums/layouts";

EditUser.layout = LayoutsEnum.DEFAULT;

export default EditUser;

/*
 * export const getServerSideProps: GetServerSideProps = async (ctx) => {
 * 	const { slug } = ctx.params;
 */

// 	const { data } = await api.get("/users/1");

// 	console.log(slug);

/*
 * 	return { props: {} };
 * };
 */
