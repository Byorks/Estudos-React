import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";

function TaskPage () {
    const navigate = useNavigate();
    // Conseguimos passar queryparams para a URL e com o useSearchParams conseguimos trazer para variáveis os seus elementos
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    // Forma de chamar a função sem precisar()
    function onBackClick() {
        navigate(-1);
    }

    return (
        <div className="h-screen w-screen bg-slate-500 p-6">
            <div className="w-[500px] mx-auto space-y-4">
                <div className="flex justify-center relative mb-6">
                    {/* Função que retona a página anterior */}
                    <button onClick={onBackClick} 
                    className="absolute left-0 top-0 bottom-0 text-slate-100"
                    >
                        <ChevronLeftIcon/>
                    </button>
                    <Title className="text-3xl text-slate-100 font-bold text-center">
                        Detalhes da Tarefa
                    </Title>
                </div>
              

                <div className="bg-slate-200 p-4 rounded-md">
                    <h2 className="text-xl text-slate-600 font-bold">{title}</h2>
                    <p className="text-slate-600">{description}</p>
                </div>
            </div>
            
       </div>
    )
    
}

export default TaskPage;