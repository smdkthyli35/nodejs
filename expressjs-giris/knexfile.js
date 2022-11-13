module.exports = {
    development: {
        client: "pg",
        connection: {
            database: "aktorler",
            user: "postgres",
            password: "12345"
        },
        migrations: {
            directory: "./data/migrations"
        },
        seeds: {
            directory: "./data/seeds"
        }
    }
}