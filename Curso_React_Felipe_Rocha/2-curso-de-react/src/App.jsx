import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
// Importando CSS
import "./App.css";

import { useState } from "react";
import { useEffect } from "react";

// Uuid - gerador de Ids aleátorios
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    // Buscando as tarefas no localStorage e caso não tenha, inicia uma lista vazia
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  // Vai atualizar a página sempre que o elemento na lista for alterado
  useEffect(() => { // Esse código será executado sempre que um elemento for montado na tela
    console.log("tasks foi alterado");
    // criando um armazenamento no localStorage e o a lista tasks para uma string JSON
    // Primeiro param é o nome do dado armazenado
    localStorage.setItem("tasks", JSON.stringify(tasks));
  },  [tasks]);  // Já que passamos uma lista, sempre que tiver alterações na lista, terá atualizações de state e executará o código acima
 

  useEffect(() =>{
     const fetchTasks = async () => {
       // Chama a API
      // Quando não específicamos o método HTTP automaticamente ele atribui o GET
      const response = await fetch ('https://jsonplaceholder.typicode.com/todos?_limit=10');

      // Pegar os dados que ela retorna
      // Convertendo para json
      const data = await response.json()
      // Armazenar/ Persistir esses dados no STATE
      setTasks(data)
    }
    // Caso queira chamar uma API 
    // fetchTasks();

  },[]); // O array vazio garante que o código será executado apenas uma vez, na montagem


  // Minha tentativa sem consultar o material do instrutor
  // const onAddTaskSubmit = () => {
  //   let title = document.getElementById("form-title").value;
  //   let description = document.getElementById("form-description").value;

  //   let newTaskId;
  //   // Pegando o valor do ultimo Id regitrado
  //   // Verificação se há itens na lista, se tiver pegamos o id do ultimo item, se não, será 0 o ínicio da lista
  //   if (tasks.length > 0) {
  //     newTaskId = tasks[ tasks.length -1].id + 1;
  //   }else {
  //     newTaskId = 0;
  //   }

  //   let newTask = {
  //      id: newTaskId,
  //      title: title,
  //      description: description,
  //      isCompleted: false,
  //   }
    
  //   // Adicionando na lista tasks
  //   tasks.push(newTask);

  //   let updatedTasks = tasks.map( task => task)

  //   setTasks(updatedTasks);
  // }

  // função criada pelo instrutor 
  function onAddTaskSubmit (title, description) {
    const newTask = {
      // Id dessa maneira pode ocazionar em ids repetidos
      // Para solucionar vamos gerar ids aleatorios com o uuid
      // id: tasks.length + 1,
      id: v4(),
      // shorthand sintax, abreviando já que a propriedade tem o mesmo nome da propriedade do obj
      title,
      description,
      iscompleted: false
    };

    setTasks([...tasks, newTask])
  }
  
  function onTaskClick(taskId) {
    // Essa função vai passar por todas as tasks e identificar qual tem o id da tarefa clicada, alterando o valor dela para o inverso do estado atual
    const newTasks = tasks.map( task => {
      // Preciso atualizar essa tarefa
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted};
      }
      // Não preciso atualizar essa tarefa, porque ela não é a tarefa clicada
      return task;
    })
    // Aqui vai atualizar o State
    setTasks(newTasks);
  }

  // Outra tentativa, mas dessa vez com um for, ia dar certo mas eu esqueci de colocar o iterador no index da lista
  function findTask(taskId) {
    for (let i = 0; i < tasks.length; i++){
      if ( taskId == tasks[i].id) {
        return tasks[i];
      }
    }
  }

  // onDeleteTaskClick - padrão de nomeclatura quando a função está relacionada a uma ação como clicar em um botão, enviar um formulário, etc / segue a ideia de event handlers
  function deleteTask(taskId) {
    // Tentativa falha de com o forEach pegar o objeto a partir da lista
    // forEach não retorna nada ele acaba retornando undefined, por isso dava errado :(
    // Uma sugestão seria usar o find
    // find - retorna o primeiro elemento que satisfazer a condição
    // let taskToBeRemoved = tasks.forEach( task => {
    //     if (task.id == taskId){
    //       return {...task}
    //     }
    // })

    // Criei uma função que busca um objeto com base no ID
    let taskFinded = findTask(taskId);

    console.log("Esse é o objeto encontrado com o findTask");
    console.log(taskFinded);

    let taskToBeRemovedIndex = tasks.findIndex((task) => {
        return task.id == taskId;
    })
    
    console.log(taskToBeRemovedIndex)
    // Me equivoquei estou apenas escondendo a task, não removendo o item de fato.
    // const newTasksWithoutOne = tasks.filter( task => {
    //   return task.id != taskId
    // })
    // O instrutor sugeriu a seguinte maneira
    // praticamente a mesma coisa do meu, só que a escrita é mais enxuta
    //  const newTasks = tasks.filter(task => task.id != taskId)

    // Splice - remove itens da lista, baseado no index, o segundo parâmetro é referente a quantos itens da lista desejo remover
    tasks.splice( taskToBeRemovedIndex, 1);

    // Não sei o motivo ainda mas preciso passar para uma nova lista para atualizar o estado
    const updateTasks = tasks.map( task => {
      return task;
    })

    for(let i = 0;i < tasks.length; i++ ){
      console.log(tasks[i])
    }
    setTasks(updateTasks)
  } 

  return(
  // p-6 -> padding de 24px / 1.5 rem
  // w-screen e h-screen -> 100vw e 100vh - que é pegar 100% da visualização do usuário
  <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
    {/* w-[npx] -> ajusta o tamanho da largura */}
    <div className="w-[500px] space-y-4">
      {/* Podemos atribuir classes CSS com className */}
      {/* <h1 className="title">Gerenciador de Tarefas (Com alteração de cor CSS puro)</h1> */}
      {/* <h1 className="text-red-500">Gerenciador de Tarefas</h1> */}
      <Title className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</Title>
      <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
      {/* Aqui estamos dizendo que as props serão o states que insererimos no useState */}
      <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask} /> {/* Podemos passar uma função como prop */}
    </div>
  </div>)  
}

export default App;