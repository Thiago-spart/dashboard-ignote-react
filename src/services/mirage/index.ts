/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable @typescript-eslint/no-magic-numbers */
import faker from "faker";
import {
	ActiveModelSerializer,
	createServer,
	Factory,
	Model,
	Response,
} from "miragejs";

interface UserProps {
	name: string;
	email: string;
	created_at: string;
	password: string;
}

export const makeServer = () => {
	const server = createServer({
		serializers: {
			application: ActiveModelSerializer,
		},
		models: {
			user: Model.extend<Partial<UserProps>>({}),
		},
		factories: {
			user: Factory.extend({
				name: () => {
					return faker.name.findName();
				},
				email: () => {
					return faker.internet.email().toLowerCase();
				},
				password: () => {
					return faker.internet.password();
				},
				createdAt: () => {
					return faker.date.recent(10);
				},
			}),
		},
		seeds: serverSeeds => {
			serverSeeds.createList("user", 200);
		},
		routes() {
			this.namespace = "api";
			this.timing = 750;

			this.get("/users", function (schema, request) {
				const { page = 1, per_page = 10 } = request.queryParams;

				const pageAsNumber = Number(page);
				const perPageAsNumber = Number(per_page);

				const total = schema.all("user").length;

				const pageStart = (pageAsNumber - 1) * perPageAsNumber;
				const pageEnd = pageStart + perPageAsNumber;

				const users = this.serialize(schema.all("user")).users.slice(
					pageStart,
					pageEnd,
				);

				return new Response(200, { "x-total-count": String(total) }, { users });
			});

			this.del("/users/:id");
			this.patch("/users/:id");

			this.get("/users/:id");
			this.post("/users");

			this.namespace = "";
			this.passthrough();
		},
	});

	return server;
};
