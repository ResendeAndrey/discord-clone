import React from 'react'

import {Container, Messages, InputWrapper, Input,InputIcon} from './styles'

import ChannelMessage from '../ChannelMessage';


const ChannelData: React.FC = () => {

  return (
    <Container>
      <Messages>
        <ChannelMessage author="Andrey Resende" date="07/07/2020" content="Clone do Discord feito por Andrey Resende." />
        <ChannelMessage author="Andrey Resende" date="07/07/2020" content="Clone do Discord feito por Andrey Resende." />
        <ChannelMessage author="Andrey Resende" date="07/07/2020" content="Clone do Discord feito por Andrey Resende." />
        <ChannelMessage author="Andrey Resende" date="07/07/2020" content="Clone do Discord feito por Andrey Resende." />
        <ChannelMessage author="Andrey Resende" date="07/07/2020" content="Clone do Discord feito por Andrey Resende." />
        <ChannelMessage author="Andrey Resende" date="07/07/2020" content="Clone do Discord feito por Andrey Resende." />
        <ChannelMessage author="Andrey Resende" date="07/07/2020" content="Clone do Discord feito por Andrey Resende." />
        <ChannelMessage author="Andrey Resende" date="07/07/2020" content="Clone do Discord feito por Andrey Resende." />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar  em #chat-livre"/>
        <InputIcon />
      </InputWrapper>
    </Container>
  )
}

export default ChannelData; 