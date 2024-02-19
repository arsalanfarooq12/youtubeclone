import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars , faMicrophone ,faMagnifyingGlass ,faBell ,} from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

 export default function Navbar() {
    
return(<>
  
  <div className='navigation'>
   {/* menu bars */}
<div className="nav1"><FontAwesomeIcon icon={faBars} style={{color: "white"}} size='lg'/></div>
{/* youtube icon */}
<div className="nav2"> <FontAwesomeIcon icon={faYoutube} style={{color: "#c70f0f",}} size='2x' />
<p>YouTube</p>
</div>
{/* searchbar */}
<div className="nav3"><input
   type="text"
   placeholder="Search here"
    /> </div>

{/* searchicon */}

<div className="nav4"><FontAwesomeIcon icon={faMagnifyingGlass} size='lg' style={{color: "white",}} /></div>
{/* mic */}
<div className="mic"> <FontAwesomeIcon icon={faMicrophone} size='lg'style={{color: "white",}} /></div>
<div className="bellicon"> <FontAwesomeIcon icon={faBell} size='lg'style={{color: "white",}} /></div>
<div className="profile"><img src="/" alt="" />Sign in</div>


  </div>


    </>
);
    
 } 
   
 
 
