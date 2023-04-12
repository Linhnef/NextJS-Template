import styled from "styled-components";

export const ButtonPrimary = styled.button.attrs((props) => ({
  className:
    "!bg-primary-background text-primary-text px-4 rounded inline-flex items-center font-bold py-2 border",
  ...props,
}))``;
