import { Trash2 } from "lucide-react";
import { DeleteIcon } from "lucide-react";
import { ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks(props) {
    // Exemplo de acesso a props que vem de um useState([]), onde pegamos apenas o titulo
    // return <h1>{props.tasks[0].title}</h1>
    const navigate = useNavigate();

    // Se a função tem muitas linhas melhor deixar separado como essa função
    function onSeeDetailsClick (task) {
        // Vai tratar a URL para evitar erros, por exemplon  modificando espaços que possam estar contídos nas variáveis
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        
        // Sem tratamento
        // navigate(`/task?title=${task.title}&description=${task.description}`);

        // Com tratamento
        navigate(`/task?${query.toString()}`); 
    }

    return (   
    //  space-y-4 -> espaçamento vertical entre os itens, internamente ele coloca margin top e margin bottom
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
        {/* Interessante, se eu escrever a arrow function com {} preciso retornar com return, do contrário ele apenas finaliza a função, não renderizando nada*/}
        {/* Já com () ele retorna de forma implicita */}
        {props.tasks.map((task) => (
            // key ->Quando vamos renderizar varios elementos precisamos dar um valor unico para cada item
            <li key={task.id} className="flex gap-2">
                {/* Aqui vamos trazer a função que está em Apps, que foi inserida como prop */}
                {/* A arrow function garante que a função só sera executada quando clicarmos no botão */}
                {/* Fiquei pensando se funcionaria, com um simples "props.onTaskClick(task.id)" mas pelo visto ele executaria assim que o componete fosse renderizado */}
                <button onClick={() => props.onTaskClick(task.id)}
                // Podemos criar classes com template string integrando Javascript
                className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}
                >
                    {task.title}
                    {/* Usando operador ternário para verificar a Task */}
                    {task.isCompleted ? " Completed" : " Incomplete"}
                </button>
                <Button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 p-2 rounded-md text-white">
                    <ChevronRightIcon />
                </Button>
                <Button onClick={() => props.deleteTask(task.id)} className="bg-slate-400 p-2 rounded-md text-white">
                    <Trash2 />
                </Button>
            </li>
        
        ))}
    </ul>
    );


}

export default Tasks