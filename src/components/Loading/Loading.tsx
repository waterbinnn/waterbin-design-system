import styled, { keyframes } from 'styled-components';
import { ReactComponent as LoadingIcon } from '@/assets/icons/loading.svg';

const rotate = keyframes` 
0%{
    transform: rotate(0deg);
}

100%{
    transform: rotate(350deg);
}
`;

const CircleLoading = styled.span`
  svg {
    transition: transform 0.3s ease-in-out;
    will-change: transform;
    animation: ${rotate} 1s linear infinite;
  }
`;

export const Loading = () => {
  return (
    <CircleLoading role='img' aria-label='loading'>
      <LoadingIcon />
    </CircleLoading>
  );
};
