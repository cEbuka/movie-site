import fb from '../assets/facebook.png'
import insta from '../assets/instagram.png'
import yt from '../assets/youtube.png'
import tw from '../assets/twitter.png'

const Footer = () => {
  return (
    <>
      <section className='footer-section'>
        <footer>
          <ul className='social'>
            <li><a href='#'><img src={fb} /></a></li>
            <li><a href='#'><img src={insta} /></a></li>
            <li><a href='#'><img src={yt} /></a></li>
            <li><a href='#'><img src={tw} /></a></li>
          </ul>
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
