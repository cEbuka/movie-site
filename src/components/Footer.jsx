import fb from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import yt from '../assets/youtube.png'
import tw from '../assets/twitter.png'

const Footer = () => {
  return (
    <>
      <section className='footer-section'>
        <footer>
          <div className='social'>
            <img src={fb} />
            <img src={insta} />
            <img src={yt} />
            <img src={tw} />
          </div>
          <ul className='terms'>
            <li>Conditions of Use</li>
            <li>Privacy & Policy</li>
            <li>Press Room</li>
          </ul>
          <span className='copyright'>&copy;2023 MovieTerminal by Simon Chukwuebuka</span>
        </footer>
      </section>
    </>
  )
}

export default Footer
