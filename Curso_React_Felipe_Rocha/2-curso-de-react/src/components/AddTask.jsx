
// Escrevemos os nomes das funções no estilo PascalCase
function AddTask (props) {
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
            <input type="text" name="title" id="form-title" placeholder="Digite o título da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"/>
            <input type="text" name="description" id="form-description" placeholder="Digite a descrição da tarefa" className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"/>
            <button onClick={() => props.onAddTaskSubmit()} type="submit" className="bg-slate-500 text-white px-4 py-2 rounded-md">Adicionar</button>
        </div>
    )
    
}

export default AddTask