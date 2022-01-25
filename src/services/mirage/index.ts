import { createServer, Factory, Model } from "miragejs";

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
            server.createList("user", 20)
        },
        routes() {
            this.namespace = "api";
            this.timing = 750;

            this.get("/users");
            this.post("/users");

            this.namespace = "";
            this.passthrough();
        },
    });
    return server;
}
