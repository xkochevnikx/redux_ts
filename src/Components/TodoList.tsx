import React, { useEffect } from "react";
import { UseActions } from "../hooks/UseActions";
import { UseTypedSelector } from "../hooks/UseTypedSelector";

const TodoList: React.FC = () => {
  const { page, error, limit, loading, todos } = UseTypedSelector(
    state => state.todo
  );

  const pages = [1, 2, 3, 4, 5];

  const { fetchTodos, setTodoPage } = UseActions();

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идёт загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <>
      {todos.map(todo => (
        <div key={todo.id}>
          {todo.id}. - {todo.title}
        </div>
      ))}
      {pages.map(p => (
        <span
          onClick={() => setTodoPage(p)}
          key={p}
          style={{
            margin: 5,
            border: p === page ? "2px solid orange " : "1px solid green",
          }}>
          {p}
        </span>
      ))}
    </>
  );
};

export default TodoList;
