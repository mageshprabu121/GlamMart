import React from 'react'
import { Container, Content } from './styles2'
import { FaShoppingCart } from 'react-icons/fa';
import { 
  FaTimes, 
  FaHome, 
  FaEnvelope, 
  FaRegSun, 
  FaUserAlt, 
  FaIdCardAlt, 
  FaRegFileAlt,
  FaRegCalendarAlt,
  FaChartBar
} from 'react-icons/fa'

import SidebarItem from '../SidebarItem'
import { NavLink } from 'react-router-dom'

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <NavLink to="/home">        <SidebarItem Icon={FaHome} Text="Home" /></NavLink>

        <SidebarItem Icon={FaUserAlt} Text="Users" />
        <SidebarItem Icon={FaEnvelope} Text="Products" />
        <SidebarItem Icon={FaRegFileAlt} Text="Reports" />
        <SidebarItem Icon={FaShoppingCart} Text="Cart" />
        <SidebarItem Icon={FaRegSun} Text="Logout" />
      </Content>
    </Container>
  )
}

export default Sidebar