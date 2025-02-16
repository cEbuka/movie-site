import fb from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import yt from '../assets/youtube.png'
import tw from '../assets/twitter.png'
import '../styles/footer.css'

const Footer = () => {
  return (
    <>
    <section className='footer-section'>
    <footer>
    <div className='social'>
    <img src={fb}/>
    <img src={insta}/>
    <img src={yt}/>
    <img src={tw}/>
    </div>
    <div className='terms'>
    <h1>Conditions of Use</h1>
    <h1>Privacy & Policy</h1>
    <h1>Press Room</h1>
    </div>
    <span className='copyright'>&copy;2023 MovieTerminal by Simon Chukwuebuka</span>
    </footer>
    </section>
    </>
  )
}

export default Footer
