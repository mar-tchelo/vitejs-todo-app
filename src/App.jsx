import { Container, Input, Button, Flex, Spacer, Item } from "./styles";

import { useState } from "react";

function App() {
  //States
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([
    {
      id: 1,
      task: "Fazer bolo",
      checked: true,
    },
    {
      id: 2,
      task: "Comer bolo",
      checked: false,
    },
  ]);

  // Adicionar tarefas
  const addTask = () => {
    if (!task) return alert("Informe uma tafera");
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };
    setListTasks([...listTasks, newTask]);

    //Limpa input
    setTask("");
  };

  //Remove tarefas
  const removeTask = (id) => {
    const newList = listTasks.filter((task)=> task.id != id)
    setListTasks(newList);
  }

  // marcar/desmarcar como checked 
  const toggleChecked = (id, checked ) =>{
    const index = listTasks.findIndex(task => task.id === id)
    const newList = listTasks
    newList[index].checked = !checked
    setListTasks([...newList])
  }

  return (
    <Container>
      <h1 className="title">TODO LIST</h1>
      <Spacer />
      <Flex direction="row">
        <Input
          value={task}
          placeholder="Digite sua tarefa..."
          onChange={(e) => setTask(e.target.value)}
        />
        <Button onClick={addTask}>Adicionar</Button>
      </Flex>

      <Spacer margin="16px" />
      <ul>
        {listTasks.map((task) => (
          <>
            <Item checked={task.checked} key={task.id}>
              <p>{task.task}</p>
              <Flex direction="rown">
                <button onClick={()=> toggleChecked(task.id, task.checked)}>
                  <i className="bx bx-check-double"></i>
                </button>
                <button onClick={() => removeTask(task.id)}>
                  <i className="bx bxs-trash"></i>
                </button>
              </Flex>
            </Item>

            <Spacer margin="12px" />
          </>
        ))}
      </ul>
    </Container>
  );
}

export default App;
