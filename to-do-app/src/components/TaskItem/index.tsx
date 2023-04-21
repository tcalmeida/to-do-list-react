import { Item, Task, CheckBox, Span } from './styles';

interface TaskItemProps {
  id: string;
  title: string;
  done: boolean;
  deleteTask: () => void;
  handleCheck: () => void;
}

function TaskItem(props: TaskItemProps) {
  return (
    <Item key={props.id}>
      <CheckBox
        type="checkbox"
        checked={props.done}
        onChange={props.handleCheck}
      />
      <Task done={props.done} onDoubleClick={props.handleCheck}>
        {props.title}
      </Task>
      <Span onClick={props.deleteTask}> ❌ </Span>
    </Item>
  );
}

export default TaskItem;
