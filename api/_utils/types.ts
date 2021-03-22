export type SupportedLanguages = 'rus'|'eng';
export type SupportedCurrencies = 'rur'|'usd';
export type CollectionNames = 'users'|'currencies'|'categories'|'transactions'|'budgets';

/**
 * Database entities
 */
export interface DbEntity {
  id: number,
  createdAt: Date,
}

export interface User extends DbEntity {
  username: string,
  email: string,
  password: string,
  language: SupportedLanguages,
  currencyId: number,
  categoryIds: number[],
}

export interface Currency extends DbEntity {
  slug: SupportedCurrencies,
  label: string,
}

export interface Category extends DbEntity {
  slug: string,
  name: string,
  isVisible: boolean,
}

export interface Transaction extends DbEntity {
  type: 'loss'|'gain',
  isTemplate: boolean,
  date: Date,
  title: string,
  description: string,
  price: number,
  userId: number,
}

export interface Plan {
  categoryId: number,
  planAmount: number,
  description: string,
}

export interface Budget extends DbEntity {
  year: number,
  month: number,
  plans: Plan[],
  userId: number,
}

/**
 * Data returning from backend-endpoints
 */
export interface UserApi extends DbEntity {
  username: string,
  email: string,
  language: SupportedLanguages,
  categories: Category[],
  currency: Currency,
}
