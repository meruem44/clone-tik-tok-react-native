import styled from 'styled-components/native';

import ViewPager from '@react-native-community/viewpager';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled(ViewPager)`
    flex: 1;
`;

export const Gradient = styled(LinearGradient)`
    height: 100%;
    justify-content: space-between;
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    z-index: 1;
`;

export const Content = styled.View`
    flex: 1;
`;

export const Center = styled.View`
    flex: 1;
    flex-direction: row;

`;


