import React, { useReducer } from 'react';
import './style.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'input':
      return { ...state, input: action.payload };
    case 'Change':
      return { ...state, id: { ...state.id, name: state.input } };
  }
};

const intialState = {
  id: {
    name: 'Jaycon',
    LastName: 'Madrid',
  },
  input: '',
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState);
  const handleChange = (e) => {
    dispatch({ type: 'input', payload: e.target.value });
  };
  const changeName = () => {
    dispatch({ type: 'Change' });
    dispatch({ type: 'input', input: '' });
  };
  return (
    <div>
      <input onChange={handleChange} value={state.input || ' '} />
      <button onClick={changeName}>Change name </button>

      <h3> {state.id.name} </h3>
      <h3> {state.id.LastName} </h3>
    </div>
  );
}
