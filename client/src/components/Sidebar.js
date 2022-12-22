import React, { useState } from 'react'
import { Tab, Nav, Button, Modal } from 'react-bootstrap'
import Contacts from './Contacts'
import Conversations from './Conversations'
import NewConversationModal from './NewConversationModal'
import NewContactModal from './NewContactModal'
import '../styles/Sidebar.css'

const CONVERSATIONS_KEY = 'conversations'
const CONTACTS_KEY = 'contacts'

export default function Sidebar({ id }) {

    const [activeKey, setActiveKey] = useState(CONVERSATIONS_KEY)
    const [modalOpen, setModalOpen] = useState(false)
    const conversationsOpen = activeKey === CONVERSATIONS_KEY

    function closeModal() {
        setModalOpen(false)
    }

  return (
    <div style={{width: '250px' }} className="hgd d-flex flex-column">
      <Tab.Container className="hg" activeKey={activeKey}onSelect={setActiveKey}>
        <Nav variant="tabs" className="hgjcc justify-content-center">
            <Nav.Item>
                <Nav.Link eventKey={CONVERSATIONS_KEY} className="hgcv">Conversations</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey={CONTACTS_KEY}>Contacts</Nav.Link>
            </Nav.Item>
        </Nav>
        <Tab.Content className="border-right overflow-auto flex-grow-1">
            <Tab.Pane eventKey={CONVERSATIONS_KEY}>
                <Conversations />
            </Tab.Pane>
            <Tab.Pane eventKey={CONTACTS_KEY}>
                <Contacts />
            </Tab.Pane>
        </Tab.Content>
        <div className="border-top p-2 small">
            Your Id: <span className="text-muted">{id}</span>
        </div>
        <Button className="rounded-0 m-0" onClick={() => setModalOpen(true)}>
            New {conversationsOpen ? 'Conversations' : 'Contacts'}
        </Button>
      </Tab.Container>
      
      <Modal show={modalOpen} onHide={closeModal}>
        {conversationsOpen ? 
        <NewConversationModal closeModal={closeModal} /> :
        <NewContactModal closeModal={closeModal} />}
      </Modal>
    </div>
  )
}
