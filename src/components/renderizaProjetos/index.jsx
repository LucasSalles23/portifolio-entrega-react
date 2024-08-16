import imgGit from "../../assets/projetos-img-git.png"
import imgArrow from "../../assets/projetos-img-arrow.png"

import { projects } from "../../data/projects"

export const RenderizaProjetos = () => {
    return (
        <>
            {projects.map((element, index) => {
                let newLabel
                if (index === 0) {
                    newLabel = (
                        <div className="projetos-titulo-new">
                            <h3>New</h3>
                        </div>
                    )
                } else {
                    newLabel = null
                }

                return (
                    <div className="projetos" key={element.name}>
                        <div className="projetos-titulo">
                            <h1>{element.name}</h1>
                            {newLabel}
                        </div>

                        <div className="projetos-linguagens">
                            <p>Linguagens:</p>
                            <p className="projetos-linguagens-destaque">JavaScript</p>
                        </div>

                        <div className="projetos-paragrafo">
                            <p>Descrição do projeto contendo as informações sobre finalidade da aplicação e como está organizado o repositório...</p>
                        </div>

                        <div className="projetos-botoes">
                            <div className="git-logo">
                                <img src={imgGit} alt="git-logo" />
                                <a href="#">Github Code</a>
                            </div>

                            <div className="arrow-logo">
                                <img src={imgArrow} alt="arrow" />
                                <a href="#">Aplicação</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
