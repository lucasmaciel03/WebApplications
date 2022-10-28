function Chave(numero, numeroCorreto){
    return(
        <p className={numero.valor === numeroCorreto ? 'bg-green' : ''}>
            {numero.valor}
        </p>
    )
}

export default Chave;