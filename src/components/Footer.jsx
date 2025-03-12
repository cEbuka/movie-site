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
            <li><img src={fb} /></li>
            <li><img src={insta} /></li>
            <li><img src={yt} /></li>
            <li><img src={tw} /></li>
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
