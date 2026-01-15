
export type TransactionType = 'INCOME' | 'EXPENSE';
export type ExpenseCategory = 'SALARY' | 'SUPPLY' | 'UTILITY' | 'TAX' | 'OTHER';

export interface Customer {
  id: string;
  name: string;
  document: string;
  phone: string;
  email: string;
  lastVisit?: string;
}

export interface Supplier {
  id: string;
  name: string;
  cnpj: string;
  phone: string;
  category: string;
}

export interface Invoice {
  id: string;
  customerId: string;
  customerName: string;
  date: string;
  amount: number;
  status: 'PENDING' | 'ISSUED' | 'CANCELLED';
  nfeNumber?: string;
  serviceDescription: string;
}
