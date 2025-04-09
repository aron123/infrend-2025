import { AppDataSource } from "../data-source";
import { BankTransfer } from "../entity/BankTransfer";
import { User } from "../entity/User";
import { Controller } from "./base.controller";

export class TransactionController extends Controller {
    repository = AppDataSource.getRepository(BankTransfer);
    userRepository = AppDataSource.getRepository(User);

    create = async (req, res) => {
        try {
            const transactionToCreate = this.repository.create(req.body) as Partial<BankTransfer>;
            delete transactionToCreate.id;

            if (transactionToCreate.amount <= 0) {
                this.handleError(res, null, 400, 'Amount should be greater than 0.');
                return;
            }

            const sender = await this.userRepository.findOneBy({
                id: transactionToCreate.sender?.id
            });

            const receiver = await this.userRepository.findOneBy({
                id: transactionToCreate.receiver?.id
            }); 

            if (!sender || !receiver) {
                this.handleError(res, null, 404, 'Sender or receiver does not exist.');
                return;
            }

            if (sender.id === receiver.id) {
                this.handleError(res, null, 400, 'Sender and receiver should not be the same.');
                return;
            }

            if (sender.balance < transactionToCreate.amount) {
                this.handleError(res, null, 400, 'Sender has too low balance.');
                return;
            }

            sender.balance -= transactionToCreate.amount;
            receiver.balance += transactionToCreate.amount;

            await this.userRepository.save([ sender, receiver ]);

            const transactionCreated = await this.repository.save(transactionToCreate);
            res.json(transactionCreated);
        } catch (err) {
            this.handleError(res, err);
        }
    };

    getAllTransactionsOfUser = async (req, res) => {
        // TODO
        res.send();
    };
}