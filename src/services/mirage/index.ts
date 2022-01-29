import { createServer, Factory, Model, Response } from "miragejs";

type User = {
    name: string;
    email: string;
    created_at: string
};

export function makeServer() {
    const server = createServer({
        models: {
            user: Model.extend<Partial<User>>({}),
        },
        factories: {
            user: Factory.extend({
                name(i: number) {
                    return `NAME ${i + 1}`;
                },
                email(i) {
                    return `email${i + 1}@teste${i + 1}.com`;
                },
                createdAt() {
                    return String(new Date().getTime());
                },
            }),
        },

        seeds(server) {
            server.createList("user", 200)
        },
        routes() {
            this.namespace = "api";
            this.timing = 750;

            this.get("/users", function (schema, request) {
                const { page = 1, per_page = 10 } = request.queryParams

                const total = schema.all("user").length

                const pageStart = (Number(page)) - 1 * Number(per_page)
                const pageEnd = pageStart + Number(per_page)

                const user = this.serialize(schema.all("user")).users.slice(pageStart, pageEnd)
                console.log("totaasasl", user)

                return new Response(200, { "x-total-count": String(total) }, { user })
            });
            this.post("/users");

            this.namespace = "";
            this.passthrough();
        },
    });
    return server;
}
