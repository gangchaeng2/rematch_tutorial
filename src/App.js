import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Count = () => {
  const { sharks, dolphins } = useSelector(state => state);
  const dispatch = useDispatch();

  const { increment: incrementSharks, getData } = dispatch.sharks;
  const { increment: incrementDolphins } = dispatch.dolphins;

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: 120 }}>
          <h3>Sharks</h3>
          <h1>{sharks.count}</h1>
          <button onClick={incrementSharks}>+1</button>
          <button onClick={getData}>todo</button>
        </div>
        <div style={{ width: 120 }}>
          <h3>Dolphins</h3>
          <h1>{dolphins}</h1>
          <button onClick={incrementDolphins}>+1</button>
        </div>

        <p>Using Rematch Models</p>
      </div>

      <div>
        {sharks.todo &&
          sharks.todo.length > 0 &&
          sharks.todo.map((item, key) => (
            <div key={key}>
              <p>
                {item.id}. {item.title}
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Count;
