const initialState = {
  taskStatus: {
    Ondoing: 1,
    Overdue: 0,
    Task: {
      done: 0,
      unfinished: 1,
    },
    Project: {
      done: 0,
      unfinished: 0,
    },
    Reminder: {
      done: 0,
      unfinished: 1,
    },
    Notes: 0,
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
