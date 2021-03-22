import mongodb from 'mongodb';
import type {
  CollectionNames, User, Currency, Category, Transaction, Budget,
} from './types';

const { MongoClient } = mongodb;

let database: mongodb.Db;

async function initPool () {
  const url = process.env.MONGO_URI || '';
  const client = await MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  database = await client.db('expenses');
}

/* eslint-disable no-redeclare */
/* eslint-disable no-unused-vars */
function getCollection (name: 'users'): Promise<mongodb.Collection<User>>;
function getCollection (name: 'currencies'): Promise<mongodb.Collection<Currency>>;
function getCollection (name: 'categories'): Promise<mongodb.Collection<Category>>;
function getCollection (name: 'transactions'): Promise<mongodb.Collection<Transaction>>;
function getCollection (name: 'budgets'): Promise<mongodb.Collection<Budget>>;
async function getCollection (name: CollectionNames): Promise<mongodb.Collection> {
  if (!database) await initPool();
  return database.collection(name);
}

export default getCollection;
