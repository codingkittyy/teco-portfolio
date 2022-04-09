import {useState} from 'react'
import './portfolio.scss'
import portfolioData from '../../data/portfolioData'


function Portfolio() {
  const [selected, setSelected] = useState('featured')
  const portfolio = [
    {
      id: 'featured',
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
  ]
  return (
    <div className='portfolio' id='portfolio'>
      <h1>Portfolio</h1>
      <div className="wrapper">
      <ul>
        {
          portfolio?.map((item) => 
          <li key={item.id} 
          onClick={() => setSelected(item.id)} 
          className={selected === item.id ? 'active' : null}
          >
            {item.title}
            </li>
          )
        }
      </ul>
      <div className="container">      
        {
          portfolioData?.map((item, i) => (
              selected == item.id &&   
              <div key={i} className= 'portfolioItem'>
              <img src={item.url} />
              <h3>{item.title}</h3>
            </div>   
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default Portfolio