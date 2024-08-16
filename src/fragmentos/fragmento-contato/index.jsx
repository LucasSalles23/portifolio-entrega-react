export const RenderizaContato = ({ id, src, alt, titulo, paragrafo, linkAcao, chamadaAcao}) => {
    return (
        <div className="card-redes-sociais">
            <div className="card-redes-sociais-img" id={id}>
                <img src={src} alt={alt}/>
            </div>
            <div className="info-redes-sociais">
                <h3>{titulo}</h3>
                <p>{paragrafo}</p>
                <a href={linkAcao}>{chamadaAcao}</a>
            </div>
        </div>
    )
}


