import styled from '@emotion/styled';

export const ContactItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const DeleteBtn = styled.button`
  padding: 2px;
  margin-left: 7px;

  display: inline-block;
  width: 50px;

  font-size: 12px;

  border: 1px solid gray;
  border-radius: 5px;
  transition: background-color 300ms ease-out, color 100ms ease-out;

  &:hover,
  &:focus {
    background-color: #aaa;
    color: #fff;
  }

  &:active {
    background-color: gray;
  }
`;
