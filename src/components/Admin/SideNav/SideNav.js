import React, {useEffect, useState} from 'react';
import {Sidenav, Nav } from 'rsuite';
import { Link } from 'react-router-dom';
import {Dashboard} from '@rsuite/icons';
import  'rsuite/dist/rsuite.min.css'


export default function SideNav() {
 
  return (

    <div style={{ width: 240 }}>
    <Sidenav defaultOpenKeys={['3', '4']}>
      <Sidenav.Body>
        <Nav activeKey="1">
          <Nav.Item eventKey="1" icon={<Dashboard />}>
            <Link to='/admin/'>Dashboard</Link>
            
          </Nav.Item>
          <Nav.Item eventKey="2" >
            <Link to='/admin/category'>Category</Link>
          </Nav.Item>
          <Nav.Menu eventKey="3" title="Advanced" >
            <Nav.Item eventKey="3-1">Geo</Nav.Item>
            <Nav.Item eventKey="3-2">Devices</Nav.Item>
            <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
            <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
          </Nav.Menu>
          <Nav.Menu eventKey="4" title="Settings">
            <Nav.Item eventKey="4-1">Applications</Nav.Item>
            <Nav.Item eventKey="4-2">Channels</Nav.Item>
            <Nav.Item eventKey="4-3">Versions</Nav.Item>
            <Nav.Menu eventKey="4-5" title="Custom Action">
              <Nav.Item eventKey="4-5-1">Action Name</Nav.Item>
              <Nav.Item eventKey="4-5-2">Action Params</Nav.Item>
            </Nav.Menu>
          </Nav.Menu>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
    </div>
  )
}
