import React from 'react'

import {Container, Category, AddCategoryIcon} from './styles'

import ChannelButton from '../ChannelButton'



const ChannelList: React.FC = () => {

  return (
    <Container>
        <Category> 
          <span>Canais de Texto</span>
          <AddCategoryIcon/>
        </Category>
        <ChannelButton channelName="Chat-livre"/>
        <ChannelButton channelName="Trabalho"/>
        <ChannelButton channelName="Lolzinho"/>
        <ChannelButton channelName="CSGO"/>
        <ChannelButton channelName="Warzone"/>
        <ChannelButton channelName="Dota2"/>
        <ChannelButton channelName="PUBG"/>
    </Container>
  )
}

export default ChannelList; 