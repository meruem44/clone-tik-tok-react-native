import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: flex-end;
    margin: 0 0 70px 13px;
`;

export const User = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const UserName = styled.Text`
    font-size: 17px;
    color: rgba(255,255,255,1);
    text-shadow: 3px 3px 3px rgba(0,0,0,0.1);
    font-weight: bold;
    letter-spacing: -0.3px;
`;

export const Description = styled.Text`
    font-size: 17px;
    color: rgba(255,255,255,0.8);
    margin-top: 6px;
    width: 80%;
    letter-spacing: -0.2px;
`;

export const Music = styled.Text`
    font-size: 15px;
    color: #fff;
    margin-top: 13px;
    width: 80%;
`;


