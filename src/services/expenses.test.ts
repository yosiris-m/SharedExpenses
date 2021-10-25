import { createExpenses, getExpenses, getExpensesTotal } from "./expenses";

beforeEach(() => {
  localStorage.clear();
});

test("get total when there are not expenses", () => {
  const total = getExpensesTotal();
  expect(total).toEqual(0);
});

test("get total of all expenses", () => {
  createExpenses({
    friend: "John",
    amount: 10,
    date: "2021-10-25T17:29:24.958Z",
    description: "Restaurant",
  });
  createExpenses({
    friend: "Lucy",
    amount: 15,
    date: "2021-10-24T17:29:24.958Z",
    description: "Train",
  });
  const total = getExpensesTotal();
  expect(total).toEqual(25);
});

test("get expenses order by date", () => {
  const expense1 = {
    friend: "John",
    amount: 10,
    date: "2021-10-25T17:29:24.958Z",
    description: "Restaurant",
  };
  const expense2 = {
    friend: "Lucy",
    amount: 15,
    date: "2021-10-12T17:29:24.958Z",
    description: "Train",
  };
  const expense3 = {
    friend: "John",
    amount: 10,
    date: "2021-10-01T17:29:24.958Z",
    description: "Restaurant",
  };

  const expense4 = {
    friend: "Lucy",
    amount: 15,
    date: "2021-09-20T17:29:24.958Z",
    description: "Train",
  };

  createExpenses(expense1);
  createExpenses(expense4);
  createExpenses(expense3);
  createExpenses(expense2);
  const expenses = getExpenses();
  expect(expenses[0]).toEqual(expense1);
  expect(expenses[1]).toEqual(expense2);
  expect(expenses[2]).toEqual(expense3);
  expect(expenses[3]).toEqual(expense4);
});
