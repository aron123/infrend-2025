import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { BankTransfer } from "./entity/BankTransfer"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: undefined,
    database: "infrend2025_bank",
    synchronize: true,
    logging: true,
    entities: [User, BankTransfer],
    migrations: [],
    subscribers: [],
})
