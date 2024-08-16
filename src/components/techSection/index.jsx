import { RenderizaProjetos } from "../renderizaProjetos"

export const TechSection = () => {
    return (
        <div className="listSection">
            <div className="listSection-titulo">
                <h1>My projects</h1>
                <p>Projects created at <span>Kenzie Academy</span></p>
            </div>

            <div className="projetos-cards">
                <RenderizaProjetos />
            </div>
        </div>
    )
}