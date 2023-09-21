import React, { useState } from 'react'
import { Container } from './styles1'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import NavBar from '../../Navbar/Navbar'

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (<>
        <NavBar/>
      <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  </>
  )
}
    

export default Header