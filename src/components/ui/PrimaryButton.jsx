import styled from 'styled-components';
import Button from './Button';

const PrimaryButton = styled(Button)`
  background: ${(props) => props.theme.colors.primaryButton};
  color: ${(props) => props.theme.colors.primaryButtonText};
`;

export default PrimaryButton;
