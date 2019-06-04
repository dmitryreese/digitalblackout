import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  display: flex;
  margin-bottom: 45px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Dropdown = styled.div`
  width: 202px;
  padding: 10px;
  border: 1px solid #d5d5d5;
  border-top: 0px;
  position: absolute;
  top: 40px;
  z-index: 10;
  background-color: #fff;
`;

export const CityField = styled.input`
  height: 16px;
  width: 200px;
  padding: 10px;
`;

export const CityFromSearchQuery = styled.div`
  cursor: pointer;
`;
