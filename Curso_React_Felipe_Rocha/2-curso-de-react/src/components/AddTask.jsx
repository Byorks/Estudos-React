import React, {useState, useEffect} from "react";
// Escrevemos os nomes das funções no estilo PascalCase
function AddTask ({onAddTaskSubmit}) {
    // Pegando os valores dos inputs com States
    // Criando staten title, onde seu valor inicial será "" - uma string vazia
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input 
                type="text" 
                name="title" 
                id="form-title"
                placeholder="Digite o título da tarefa" 
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
                // Sempre que estivermos dentro de um return e quisermos usar Javascript utilizamos chaves {}
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <input 
                type="text" 
                name="description" 
                id="form-description" 
                placeholder="Digite a descrição da tarefa" 
                className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md" 
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            {/* Para limpar os inputs vamos renovar os States com strings vazias após passar para a função o title e description */}
            <button onClick={() => {
                // Verificar se o título e a descrição estão preenchidos
                // Trim -> retira os espaços em branco dom fim e do inicio do texto
                // Strings vazias retornam false
                if(!title.trim() || !description.trim()) {
                    return alert("Preencha o título e a descrição da tarefa.");
                }

                onAddTaskSubmit(title, description);
                setTitle("");
                setDescription("");
            }} type="submit" className="bg-slate-500 text-white px-4 py-2 rounded-md">Adicionar</button>
        </div>
    )
    
}

export default AddTask