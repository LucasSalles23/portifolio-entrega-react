import fotoPerfil from "../../assets/foto-perfil.png"
import faceLogo from "../../assets/footer-face-icon.png"
import instaLogo from "../../assets/footer-insta-icon.png"
import linkedinLogo from "../../assets/footer-linkedin-icon.png"

export const Footer = () => {
    return (
        <footer>
            
            <div className="obrigado">
                <div className="obrigado-img">
                    <img src={fotoPerfil} alt="foto-perfil" />
                </div>
                <div className="obrigado-titulo">
                    <h1>Thank you</h1>
                    <p>Follow me on my social networks and let's talk
                    </p>
                </div>
            </div>

            <div className="obrigado-redes-sociais">
                <div className="facebook bolinhas">
                    <img src={faceLogo} alt="facebook-icon" />
                </div>
                <div className="instagram bolinhas">
                    <img src={instaLogo} alt="isntagram-icon" />
                </div>
                <div className="linkedin bolinhas">
                    <img src={linkedinLogo} alt="linkedin-icon" />
                </div>
            </div>

        </footer>
    )
}