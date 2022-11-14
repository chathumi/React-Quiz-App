import React from 'react'
import './SideBar.css'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <div>
       <div classNameName="wrapper">

    <nav id="sidebar">
        <div classNameName="sidebar-header pt-10">
            <h3 className='my-3'>Bootstrap Sidebar</h3>
        </div>

        <ul classNameName="list-unstyled components">
            <div>
            <Link to="/"> Home </Link>
            </div>
        
            <div>
            <Link to="/teacher"> Teacher </Link>
            </div>
            <div>
            <Link to="/"> Home </Link>
            </div>
           
        </ul>

    </nav>

    <div id="content">

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <button type="button" id="sidebarCollapse" className="btn btn-info">
                    <i className="fas fa-align-left"></i>
                    <span>Toggle Sidebar</span>
                </button>
            </div>
        </nav>
    </div>
</div>
    </div>
  )
}

export default SideBar