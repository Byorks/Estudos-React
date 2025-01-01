import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
// Importando CSS
import "./App.css";

function App() {
  return(
  // p-6 -> padding de 24px / 1.5 rem
  // w-screen e h-screen -> 100vw e 100vh - que é pegar 100% da visualização do usuário
  <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
    {/* w-[npx] -> ajusta o tamanho da largura */}
    <div className="w-[500px]">
      {/* Podemos atribuir classes CSS com className */}
      {/* <h1 className="title">Gerenciador de Tarefas (Com alteração de cor CSS puro)</h1> */}
      {/* <h1 className="text-red-500">Gerenciador de Tarefas</h1> */}
      <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
      <AddTask />
      <Tasks />
    </div>
  </div>)  
}

export default App;