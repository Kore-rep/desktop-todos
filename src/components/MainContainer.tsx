import Header from './Header';
import TodosContainer from './TodoContainer';
import TodoItem from './TodoItem';

export default function MainContainer() {
  return (
    <div className="bg-slate-500 p-1">
      <Header />
      <TodosContainer>
        <TodoItem text="Water the plants" />
        <TodoItem text="Feed the cat" />
      </TodosContainer>
    </div>
  );
}
