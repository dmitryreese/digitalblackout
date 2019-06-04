import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid #d5d5d5;
  transition: .3s;
  position: relative;

  &:not(:last-child) {
    border-bottom: 0px;
  }

  &:hover {
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.5);
  }
`;

export const WrapperInfo = styled.div`
  padding: 15px;
`;

export const Paragraph = styled.p`
  margin: 0px;
`;

export const CardDetails = styled.details`
  cursor: pointer;
  margin-top: 15px;

  > summary {
    outline: none;
  }
`;

export const RemoveCity = styled.button`
  width: 100%;
  border: 0px;
  height: 30px;
  cursor: pointer;
  transition: .3s;
  background-color: rgba(255, 0, 0, 0.3);

  &:hover {
    background-color: rgba(255, 0, 0, 0.5);
  }
`;
