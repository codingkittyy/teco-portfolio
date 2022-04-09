import React from 'react'
import './about.scss'
import taylan from '../../assets/taylan.jpg'
import {AiFillMail, AiTwotonePhone} from 'react-icons/ai'
import {BsFillPeopleFill} from 'react-icons/bs'

function About() {
  return (
    <div className='about' id='about'>
      <h1>About Me</h1>
      <div className="container">
        <div className="left">
        <div className="imgContainer">
            <img src={taylan} alt="" />
        </div>
        </div>

        <div className=" right">
          <div className="textArea">
            <h3>Kindness</h3>
            <p>
            You can be the smartest and most skilled software engineer in the world, but if you're not kind to those with whom you interact, you'll never reach your full potential and you'll always be chasing the next thing to bring you happiness in life. Be kind.
            </p>
            <h3>Share knowledge</h3>
            <p>
            One of the biggest things that has helped me learn is by committing myself to sharing what I know with others. Between podcasts, blog posts, talks, and workshops, I force myself into situations where I have to be accountable to those I'm teaching to really know my stuff. And as a result, a lot of people have learned from me as well.
            </p>
            <h3>Collaborate with others</h3>
            <p>
            I've worked with a ton of developers in my role as a team member at companies I've worked at as well as in the open source community. I've found it to be invaluable to collaborate well with others. I value giving credit where it is due and celebrating the successes of others with them. We can accomplish much more together than separately.
            </p>

            <div className="contact">
            <div className="mail">
            <AiFillMail /> <span><h4>taylancankose@gmail.com</h4></span>
            </div>
            <div className="role">
            <BsFillPeopleFill /><span><h4>Front-end Web Developer</h4></span>
            </div>
            <div className="phone">
            <AiTwotonePhone /><span><h4>(+90) 534 278 5326</h4></span>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default About