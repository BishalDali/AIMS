import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

import './SideBar.css'

const SideBarComponents = () => {
    return (
        <div className="sidebar" style={{ marginTop: "10px", marginBottom: "60px" }}>
            <ListGroup className="list-group-sidebar">
                <LinkContainer className='link-contain' to='/admin/dashboard'>
                    <ListGroup.Item className="border-0 item">
                        <i className="fas icon-fas fa-chart-line"></i> Dashboard
                    </ListGroup.Item>
                </LinkContainer>
                <LinkContainer className='link-contain' to='/admin/profile'>
                    <ListGroup.Item className="border-0 item">
                        <i className="fas icon-fas fa-user-alt"></i> My Profile
                    </ListGroup.Item>
                </LinkContainer>
                <LinkContainer className='link-contain' to='/admin/userlist'>
                    <ListGroup.Item className="border-0 item">
                        <i className="fas icon-fas fa-users-cog"></i> All Users
                    </ListGroup.Item>
                </LinkContainer>
                <LinkContainer className='link-contain' to='/admin/productlist'>
                    <ListGroup.Item className="border-0 item">
                        <i className="fas icon-fas fa-list"></i> All Products
                    </ListGroup.Item>
                </LinkContainer>
                <LinkContainer className='link-contain' to='/admin/orderlist'>
                    <ListGroup.Item className="border-0 item">
                        <i className="fas icon-fas fa-sort-amount-up-alt"></i> All Orders
                    </ListGroup.Item>
                </LinkContainer>
                <LinkContainer className='link-contain' to='/admin/supplierproducts'>
                    <ListGroup.Item className="border-0 item">
                    <i className="fas icon-fas fa-seedling"></i> Review Crop
                    </ListGroup.Item>
                </LinkContainer>
                <LinkContainer className='link-contain' to='/admin/map'>
                    <ListGroup.Item className="border-0 item">
                        <i className="fas icon-fas fa-map-marker-alt"></i> Map
                    </ListGroup.Item>
                </LinkContainer>
            </ListGroup>
        </div>
    )
}

export default SideBarComponents
