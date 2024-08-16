import { technologies } from "../../data/technologies"

export const RenderizaTecnologias = () => {
    return (
        <div className="tecnologias">
            {technologies.map(element => {
                return (
                    <img src={element.img} alt={element.name} />
                )
            })}
        </div>
    )
}