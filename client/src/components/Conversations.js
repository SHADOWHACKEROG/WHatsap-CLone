import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useConversations } from '../contexts/ConversationsProvider'

export default function Conversations() {

  const { conversations, selectedConversationIndex } = useConversations()

  return (
    <ListGroup variant="flush">
      {conversations.map((conversation, index) => (
        <ListGroup.Item key={index} action active={conversation.selected} onClick={() => selectedConversationIndex(index)}>
          {conversation.recipients.map(r => r.name).join(', ')}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
