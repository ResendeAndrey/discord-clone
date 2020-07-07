import React from 'react'

import {Container, Avatar, Message, Header, Body} from './styles'

export interface Props {
  author: string;
  date: string; 
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;

}

const ChannelMessage: React.FC<Props> = ({author, date, content, hasMention}) => {

  return (
    <Container className={hasMention? 'mention' : ''}>
      <Avatar />
      <Message>
        <Header> 
          <strong>{author}</strong> 
          <time> {date}</time>
        </Header>
        <Body> 
          {content}
        </Body>
      </Message> 
    </Container>
  )
}

export default ChannelMessage; 