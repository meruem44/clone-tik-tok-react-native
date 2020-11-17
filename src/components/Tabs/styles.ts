import styled from 'styled-components/native';

import { LinearGradient } from 'expo-linear-gradient';

interface PropsMenuText {
    active?: boolean;
};

export const Container = styled.View`
    height: 59px;
    width: 100%;
    position: absolute;
    bottom:0;
    z-index: 1;
    border-top-width: 1px;
    border-top-color: rgba(255,255,255,0.2);
    flex-direction: row;
`;

export const Menu = styled.TouchableOpacity`
    width: 20%;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

export const MenuText = styled.Text<PropsMenuText>`
    font-size: 14px;
    margin-top: 2px;
    color: ${({ active }) => active ? '#fff': 'rgba(255,255,255,0.6)'};
`;

export const Border = styled(LinearGradient)`
   width: 44px;
   height: 28px;
   border-radius: 8px;
   align-items: center;
`;

export const Button = styled.TouchableOpacity`
   width: 36px;
   height: 28px;
   background-color: #fff;
   border-radius: 8px;
   justify-content: center;
   align-items: center;
`;