import produce from 'immer';

export default {
  state: {
    count: 0,
    todo: [],
  },
  reducers: {
    increment: state => {
      return produce(state, draft => {
        draft.count++;
      });
    },
    todo: (state, data) => {
      return produce(state, draft => {
        draft.todo.push({
          ...data,
        });
      });
    },
  },
  effects: dispatch => ({
    async getData(payload, rootState) {
      const result = await (await fetch(`https://jsonplaceholder.typicode.com/todos/${rootState.sharks.count + 1}`)).json();
      await dispatch.sharks.increment();
      await dispatch.sharks.todo(result);
    },
  }),
};
