
import { RenderizaTecnologias } from "../renderizaTecnologia"
import fotoPerfil from "../../assets/foto-perfil.png"
import Banner from "../../assets/header-bg.png"
import gitLogo from "../../assets/git-icon-button.png"


export const BannerSection = () => {
    return (
        <>
            <div className="bannerSection">
                <div className="bannerSectionContainer">
                    <div className="esquerda">
                        <div className="fotoENome">
                            <img src={fotoPerfil} alt="fotoPerfil" />
                            <p>Hello, my name is Anna</p>
                        </div>

                        <div className="titulo">
                            <h1>I <span>love</span> creating and <span>developing</span> projects</h1>
                        </div>

                        <div className="apresentacao">
                            <p>Discover here in this environment, created especially for you, all my projects and technologies</p>
                        </div>

                        <div className="botaoBanner">
                            <button>See Projects</button>
                            <img src={gitLogo} alt="git-logo" />
                        </div>

                        <RenderizaTecnologias />

                    </div>

                    <div className="direita">
                        <img src={Banner} alt="banner" />
                    </div>

                </div>

            </div>
        </>
    )
}