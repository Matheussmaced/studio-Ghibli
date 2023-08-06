import Logo from '../assets/img/logo.png'
import facebook from '../assets/img/facebook.svg'
import instagram from '../assets/img/instagram.svg'
import twitter from '../assets/img/twitter.svg'
import youtube from '../assets/img/youtube.png'
const Header = ()=>{
    return(
        <>
            <div id="containerHeader">
                <header>
                    <img src={Logo} alt="Logo" id='logo' />

                    <div id="redesSocias">
                        <a href="/"><img src={facebook} alt="instagram" /></a>
                        <a href="/"><img src={instagram} alt="Facebook" /></a>
                        <a href="/"><img src={twitter} alt="twitter" /></a>
                        <a href="/"><img src={youtube} alt="youtube" id='youtube' /></a>
                    </div>
                </header>
            </div>
        </>
    )
}

export default Header
