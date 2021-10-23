import { getFriends } from "./friends";

export type Expense = {
  friend: string;
  amount: number;
  date: string;
  description: string;
};

export type ExpenseByUser = {
  amount: number;
  friend: string;
};

export function getExpenses(): Expense[] {
  return getExpensesFromLocalStorage().sort((a, b) => {
    if (a.date > b.date) {
      return -1;
    }
    if (a.date < b.date) {
      return 1;
    }
    return 0;
  });
}

export function createExpenses(expense: Expense) {
  const expenses = getExpensesFromLocalStorage();
  expenses.push(expense);
  saveExpensesInLocalStorage(expenses);
}

export function getExpensesTotal() {
  let total = 0;
  for (let expense of getExpensesFromLocalStorage()) {
    total += expense.amount;
  }
  return total;
}

export function getExpensesByUser(): ExpenseByUser[] {
  const friends = getFriends();

  const expectedExpenseByFriend = getExpensesTotal() / friends.length;
  const expensesByUserMap: Record<string, number> = {};

  for (let friend of friends) {
    expensesByUserMap[friend] = 0;
  }

  for (let expense of getExpensesFromLocalStorage()) {
    expensesByUserMap[expense.friend] += expense.amount;
  }

  const result: ExpenseByUser[] = [];
  for (let friend of Object.keys(expensesByUserMap)) {
    const expense = expensesByUserMap[friend];
    const diff = expense - expectedExpenseByFriend;

    result.push({ friend, amount: diff });
  }

  return result;
}

function getExpensesFromLocalStorage(): Expense[] {
  const expensesJson = localStorage.getItem("expenses");
  if (expensesJson === null) {
    return [];
  }
  return JSON.parse(expensesJson);
}

function saveExpensesInLocalStorage(expenses: Expense[]): void {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}
