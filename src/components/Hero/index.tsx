import React, { useState } from 'react';

import { Container, Gradient, Content, Center } from './styles';

import VideoPlayer from '../VideoPlayer';
import Info from '../Info';
import SideBar from '../Sidebar';

interface Video {
  id: number;
  poster: string;
  video: any;
};

interface HeroProps {
  videos: Video[];
};

const Hero: React.FC<HeroProps> = ({ videos }) => {

  const [selected, setSelected] = useState(0);

  return (
    <Container 
    orientation="vertical" 
    onPageSelected={e => setSelected(e.nativeEvent.position)}
    initialPage={0}
    >
      {videos.map((item, index)=> (
        <Content key={item.id}>
        <VideoPlayer 
        isPlay={selected === index}
        video={item.video}
        url={item.poster}/>
        <Gradient
          locations={[0, 0.26, 0.6, 1]}
          colors={[
            'rgba(26,26,26,0.6)',
            'rgba(26,26,26,0)',
            'rgba(26,26,26,0)',
            'rgba(26,26,26,0.6)'
          ]}
        >
          <Center>
            <Info />
            <SideBar />
          </Center>
        </Gradient>
      </Content>
      ))}
    </Container>
  );
};

export default Hero;
