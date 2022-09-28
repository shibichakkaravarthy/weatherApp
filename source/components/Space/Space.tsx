import styled from 'styled-components/native';

export const VerticalSpace = styled.View`
    height: ${({count}: {count: number}) => count*5}px;
`;