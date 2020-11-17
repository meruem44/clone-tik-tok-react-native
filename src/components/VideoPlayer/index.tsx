import React from 'react';

import { Container } from './styles';

import { Video } from 'expo-av';

interface VideoProps {
  url: string;
  video: any;
  isPlay: boolean;
};

const VideoPlayer: React.FC<VideoProps> = ({ url, video,isPlay }) => {
  return (
    <>
      {isPlay ? (
        <Video 
          style={{ flex: 1 }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          shouldPlay
          useNativeControls={false}
          posterSource={{ uri: url }}
          source={video}
          resizeMode="cover"
        />
      ) : (
        <Container source={{ uri: url}}/>
      )}
    </>
  )
};

export default VideoPlayer;
