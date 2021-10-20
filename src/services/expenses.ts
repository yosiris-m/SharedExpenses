type Expense = {
  friend: string;
  amount: number;
  date: string;
  description: string;
};

const expenses: Expense[] = [
  {
    friend: "juan",
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
    date: "2021-10-19T18:46:30.626Z",
    description: "Comida",
  },

  {
    friend: "Pedro",
    amount: 30,
    date: "2021-10-19T18:46:30.626Z",
    description: "Tren",
  },
];

export function getExpenses(): Expense[] {
  return expenses;
}

export function createExpenses(expense: Expense) {
  expenses.push(expense);
}
