import styled, { css } from 'styled-components';

interface itemProps {
  done?: boolean;
}

export const Item = styled.li`
  width: 60vw;
  height: 35px;
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-radius: 5px;
  background-color: rgb(245, 245, 245, 0.3);
`;

export const Task = styled.p<itemProps>`
  font-family: 'Bebas Neue', cursive;
  font-size: 25px;
  ${(props) =>
    props.done
      ? css`
          text-decoration: line-through;
          color: gray;
        `
      : ''}
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  margin: 0 5px;
  cursor: pointer;
  transform: scale(1.33);
`;

export const Span = styled.span`
  padding-right: 5px;
  cursor: pointer;
`;
