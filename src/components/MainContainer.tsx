import Header from './Header';
import TodosContainer from './TodoContainer';
import TodoItem from './TodoItem';

export default function MainContainer() {
  return (
    <div className="bg-slate-500 p-1">
      <Header />
      <TodosContainer>
        <TodoItem title="Water the plants" description="thirsty mfers." />
        <TodoItem title="Feed the cat" description="hungry mfers" />
      </TodosContainer>
    </div>
  );
}
