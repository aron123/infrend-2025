import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { BankTransferDTO, UserDTO } from "../../../models";
import { User } from "./User";

@Entity()
export class BankTransfer implements BankTransferDTO {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    amount: number;

    @ManyToOne(() => User, (user) => user.outgoingTransactions, { eager: true })
    sender: User;

    @ManyToOne(() => User, (user) => user.incomingTransactions, { eager: true })
    receiver: User;
}