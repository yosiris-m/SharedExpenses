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

export type DateByUser = {
  date: string;
};

const expenses: Expense[] = [
  {
    friend: "Pablo",
    amount: 15,
    date: new Date().toISOString(),
    description: "Car",
  },

  {
    friend: "Pablo",
    amount: 20,
    date: "2021-10-19T18:46:30.626Z",
    description: "Hotel",
  },

  {
    friend: "Luis",
    amount: 50,
    date: "2021-10-15T18:46:30.626Z",
    description: "Comida",
  },

  {
    friend: "Pedro",
    amount: 30,
    date: "2021-10-01T18:46:30.626Z",
    description: "Tren",
  },
];

export function getExpenses(): Expense[] {
  return expenses.sort((a, b) => {
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
  expenses.push(expense);
}

export function getExpensesByUser(): ExpenseByUser[] {
  const friends = getFriends();

  let total = 0;
  for (let expense of expenses) {
    total += expense.amount;
  }

  const expectedExpenseByFriend = total / friends.length;
  const expensesByUserMap: Record<string, number> = {};

  for (let friend of friends) {
    expensesByUserMap[friend] = 0;
  }

  for (let expense of expenses) {
    expensesByUserMap[expense.friend] += expense.amount;
  }

  const result: ExpenseByUser[] = [];
  for (let friend of Object.keys(expensesByUserMap)) {
    const expense = expensesByUserMap[friend];
    const diff = expense - expectedExpenseByFriend;
    if (diff < 0) {
      console.log(diff / total - 1);
    }

    result.push({ friend, amount: diff });
  }

  return result;
}
