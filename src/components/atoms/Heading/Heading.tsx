import styled, { ThemeProps } from 'styled-components';
import { MyTheme } from '../../../theme/mainTheme';

type Props = {
  big?: boolean;
};

const Heading = styled.h1<Props>`
  font-size: ${({ big, theme }: Props & ThemeProps<MyTheme>) => (big ? theme.fontSize.xl : theme.fontSize.l)};
  font-weight: ${({ theme }) => theme.bold};
`;

export default Heading;
