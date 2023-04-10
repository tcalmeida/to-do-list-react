interface Task {
  id: string;
  title: string;
  done: boolean;
}

const App = () => {
  const [titleTask, setTitleTask] = useState<string>(''); //add state to forms
  const [task, setTask] = useState<Task[]>(getStorageData());
  const id = uuidv4();

  const handleAddTask = (task: any) => {
    setTask([...task, { id: id, title: titleTask, done: false }]);
  };

  const handleCheckTask = (id: string) => {
    const listItem = task.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTask(listItem);
  };

  const handleDeleteTask = (id: string) => {
    const listItem = task.filter((task) => task.id !== id);
    setTask(listItem);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleAddTask(task);
    setTitleTask('');
  };

  return (
    <body>
      <GlobalStyle />
      <main className="container">
        <Header></Header>
        <form id="new-task" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(event) => setTitleTask(event.target.value)}
            value={titleTask}
          />
          <Button color="green" text="+"></Button>
        </form>
        <TaskContainer>
          {task.map((task: Task, index: number) => {
            return (
              <TaskItem
                id={task.id}
                title={task.title}
                done={task.done}
                deleteTask={() => handleDeleteTask(task.id)}
                handleCheck={() => handleCheckTask(task.id)}
              />
            );
          })}
        </TaskContainer>
      </main>
    </body>
  );
};

export default App;
