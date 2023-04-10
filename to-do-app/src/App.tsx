

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
  
  
  
  
  return(<></>);
};

export default App;
