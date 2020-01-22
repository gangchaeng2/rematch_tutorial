export default {
  state: {
    count: 0,
    todo: [],
  },
  reducers: {
    increment: state => ({
      ...state,
      count: state.count + 1,
    }),
    todo: (state, data) => {
      return {
        ...state,
        todo: [...state.todo, ...data],
      };
    },
  },
  effects: dispatch => ({
    async getData(payload, rootState) {
      const result = await (await fetch(`https://jsonplaceholder.typicode.com/todos/${rootState.sharks.count + 1}`)).json();
      await dispatch.sharks.increment();
      await dispatch.sharks.todo([result]);
    },
  }),
};
