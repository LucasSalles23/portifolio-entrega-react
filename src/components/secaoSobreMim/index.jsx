import mailIcon from "../../assets/mail-icon.png"
import wppIcon from "../../assets/wpp-icon.png"
import linkedinIcon from "../../assets/in-icon.png"

import { RenderizaContato } from "../../fragmentos/fragmento-contato"

export const RenderizaSobreMim = () => {
    return (
        <div className="sobreMim-secao">
            <div className="sobreMim">
                <div className="sobreMim-titulo">
                    <h2>Let's set up a conversation and <span>develop our creativity </span>together?
                    </h2>
                    <p>Advertise your brand organically within Dribbble's design inspiration feed.</p>
                </div>

                <div className="sobreMim-redes-sociais">


                    <RenderizaContato src={wppIcon} alt={"wpp-logo"} id={"wpp"} titulo={"My phone"} paragrafo={"I'm available for a voice chat, let's about creativity together?"} linkAcao={"#"} chamadaAcao={"Call Now"} />


                    <RenderizaContato src={mailIcon} alt={"email-logo"} id={"email"} titulo={"My email"} paragrafo={"Send me an email reporting feedbacks, suggestions and ideas"} linkAcao={"#"} chamadaAcao={"Send email now"} />


                    <RenderizaContato src={linkedinIcon} alt={"linkedin-logo"} id={"linkedin"} titulo={"My Linkedin"} paragrafo={"We can create more constant interactions as well as a sharing network"} linkAcao={"#"} chamadaAcao={"Go to Linkedin Now"} />

                </div>
            </div>
        </div>

    )
}