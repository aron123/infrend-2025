import express from 'express';
import { UserController } from './controller/user.controller';
import { TransactionController } from './controller/transaction.controller';

export const router = express.Router();

const userController = new UserController();

router.get('/user', userController.getAll);
router.get('/user/:id', userController.getOne);
router.post('/user', userController.create);
router.put('/user', userController.update);
router.delete('/user/:id', userController.delete);

const transactionController = new TransactionController();

router.post('/transaction', transactionController.create);
router.get('/transaction/all-of/:userId', transactionController.getAllTransactionsOfUser);