import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";
import { ChevronLeftIcon } from "lucide-react";
import Input from "../components/Input";
import { useState } from "react";
import { useLocation } from "react-router-dom";


export default function UpdateTaskPage (){
    const navigate = useNavigate();
    const location = useLocation();

    const { taskIndex, taskTitle, taskDescription } = location.state;

    let newTitle = taskTitle;

    let newDescription = taskDescription;
    
    let taskList = JSON.parse(localStorage.getItem("tasks"));

    let updateTask = taskList[taskIndex];

    
    console.log(updateTask)

    console.log(taskList)

    const [title, setTitle] = useState(newTitle);
    const [description, setDescription] = useState(newDescription);
    return(
        <div className="h-screen w-screen bg-slate-500 p-6">
            <div className="w-[100%] mx-auto space-y-4">
                <div className="flex justify-center relative mb-6"> 
                    <button onClick={ () => {navigate(-1)}}
                    className="absolute left-0 top-0 bottom-0 text-slate-100">
                        <ChevronLeftIcon></ChevronLeftIcon>
                    </button>

                    <Title>
                        Atualizar Tarefa
                    </Title>
                </div>
                <div className="bg-slate-200 p-4 rounded-md">
                    <div className="flex gap-2 p-1 bg-slate-100 rounded-sm">
                        <label className="font-bold">Título</label>
                    </div>
                        <Input 
                        placeholder="Digite o novo título" 
                        value={title}
                        className="w-[100%] h-7 p-2"
                        onChange={(event) => setTitle(event.target.value)}
                        />
                  

                    <div className="flex gap-2 p-1 bg-slate-100 rounded-sm flex-col">
                        <label className="font-bold">Descrição</label>
                         
                        <textarea 
                        name=""
                        id="" 
                        placeholder="Digite a nova descrição" 
                        value={description} 
                        className="w-[100%] h-[100px] p-2 min resize-none"
                        onChange={(event) => setDescription(event.target.value)}
                        >
                    </textarea>
                        
                    </div>
                   

                    <button 
                    className="bg-slate-600 text-white p-2 rounded-md font-bo"
                    type="submit"
                    onClick={()=>{

                        updateTask = {
                          ...updateTask,
                          title: title,
                          description: description
                        }
                        
                        taskList.splice(taskIndex, 1, updateTask);

                        localStorage.setItem("tasks", JSON.stringify(taskList));
                          
                    }}
                    >
                        Confirmar
                    </button>
                    
                </div>
            </div>
            
        </div>
    );
}
