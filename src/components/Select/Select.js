import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Wrapper = styled.div`
  position: relative;
  width: fit-content;

  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;

  appearance: none;
  width: 100%;
  height: 100%;
`;

const ValueWrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  border: none;
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 56px;

  ${StyledSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 12px;
  pointer-events: none;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <ValueWrapper>
        {displayedValue}{" "}
        <IconWrapper>
          <Icon id="chevron-down" size="24" strokeWidth={1} />
        </IconWrapper>
      </ValueWrapper>
    </Wrapper>
  );
};

export default Select;
