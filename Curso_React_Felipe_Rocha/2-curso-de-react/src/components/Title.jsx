 const Title = (props) => {
    return ( 
        <h1 {...props} className="text-3xl text-slate-100 font-bold text-center">
           {props.children} 
           {/* Podemos receber também diretamente children, em vez de props */}
        </h1>
    ) 
}
export default Title;