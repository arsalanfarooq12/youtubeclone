import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHouse, faClockRotateLeft, faBagShopping, faMusic, faFilm,
  faGamepad, faNewspaper, faTrophy,
  faLightbulb, faUserTie, faPodcast, faSpinner, faSignal, faMoneyCheck, faVideo,
} from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'


export default function Head() {

  return (<>
    <div className="sidepanel">

      <div className="home sidepanel-item"><FontAwesomeIcon icon={faHouse} size='lg' />Home</div>

      <div className="shorts sidepanel-item"><FontAwesomeIcon icon={faVideo} />Shorts</div>

      <div className="Subscriptions sidepanel-item"><FontAwesomeIcon icon={faMoneyCheck} />Subscriptions</div>

      <div className="history sidepanel-item"><FontAwesomeIcon icon={faClockRotateLeft} size='lg' />History</div>

      <section>
        <h3 className='explore'>Explore</h3>
        <div className="Trending sidepanel-item"><FontAwesomeIcon icon={faSpinner} />Trending</div>

        <div className="Shopping sidepanel-item"> <FontAwesomeIcon icon={faBagShopping} />Shopping</div>
        <div className="Music sidepanel-item"><FontAwesomeIcon icon={faMusic} />Music</div>
        <div className="Films sidepanel-item"><FontAwesomeIcon icon={faFilm} />Films</div>
        <div className="Live sidepanel-item"><FontAwesomeIcon icon={faSignal} />Live</div>
        <div className="Gaming sidepanel-item"><FontAwesomeIcon icon={faGamepad} />Gaming</div>
        <div className="News sidepanel-item"><FontAwesomeIcon icon={faNewspaper} />News</div>
        <div className="Sport sidepanel-item"><FontAwesomeIcon icon={faTrophy} />Sport</div>
        <div className="Learning sidepanel-item"><FontAwesomeIcon icon={faLightbulb} />Learning</div>
        <div className="Fashion sidepanel-item"><FontAwesomeIcon icon={faUserTie} />Fashion </div>
        <div className="Podcasts sidepanel-item"><FontAwesomeIcon icon={faPodcast} />Podcasts </div>

      </section>

      <footer className="foot">
        <p className='about'>
          About Press Copyright Contact us Creator Advertise Developers

        </p>
          <p className='about'>TermsPrivacyPolicy & SafetyHow YouTube worksTest new features</p>
        <p id='copyright'>© 2024 Google LLC</p>
      </footer>

    </div>

  </>
  )
}




