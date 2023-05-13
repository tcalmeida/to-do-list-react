import { TaskList } from './styles';

interface TaskContainerProps {
  children: JSX.Element | JSX.Element[];
}

function TaskContainer(props: TaskContainerProps) {
  return <TaskList>{props.children}</TaskList>;
}

export default TaskContainer;
