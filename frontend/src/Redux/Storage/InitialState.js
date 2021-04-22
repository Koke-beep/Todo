const initialState = {
  taskStatus: {
    Ondoing: 16,
    Overdue: 8,
    Task: {
      done: 26,
      unfinished: 42,
    },
    Project: {
      done: 9,
      unfinished: 13,
    },
    Reminder: {
      done: 33,
      unfinished: 45,
    },
    Notes: 143,
  },
  categories: [
    ['Healthy', 'green'],
    ['Challenge', 'yellowgreen'],
    ['Sport', 'blue'],
    ['Education', 'orange'],
    ['Work', 'purple'],
  ],
};
export default initialState;
