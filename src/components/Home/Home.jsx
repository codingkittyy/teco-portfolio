import {useEffect, useRef} from 'react'
import './home.scss'
import homeImg from '../../assets/home.png'
import { init } from 'ityped'


function Home() {

  const textRef = useRef()

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Self Learner Developer']
    })
  }, [])

  return (
    <div className='home' id='home'>
        <div className="left">
          <div className="wrapper">
            <div className="grid-item-1">
            <h2>Hi There, I'm</h2>
            <h1>Taylan Can Köse</h1>
            <h3 ref={textRef}></h3>
            <button className='btn-blog'>Read the blog</button>
            <button className='download'>Download MTM</button>
            </div>
        </div>
     </div>
        <div className="right">
          <div className="imgContainer">
            <img src={homeImg} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Home