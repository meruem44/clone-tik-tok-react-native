import styled from 'styled-components/native';

interface PropsMenu {
    bold?: boolean;
};

export const Container = styled.View`
    top: 22px;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    position: absolute;
    z-index: 1;
`;

export const Menu = styled.Text<PropsMenu>`
    color: #fff;
    letter-spacing: 0.8px;
    margin: 11px 12px;
    font-weight: ${({ bold }) => bold ? 'bold' : 'normal'};
    opacity: ${({ bold }) => bold ? 1 : 0.8};
    font-size: ${({ bold }) => bold ? '16px' : '15px'};
`;

export const Separator = styled.View`
    width: 1px;
    height: 13px;
    background-color: #d8d8d8;
    opacity: 0.6;
`;