import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

export const BootstrapTooltip = styled(
  ({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export const cardFooterBoxStyle = {
  display: 'flex',
  color: '#9a9a9a',
  fontSize: '14px',
  mt: 2,
};

export const titleStyle = {
  fontSize: '1.375rem',
  fontWeight: 300,
  color: '#333',
  pl: '12px',
  textAlign: 'left',
};

export const subTitleStyle = {
  fontSize: '0.875rem',
  fontWeight: 400,
  color: '#9a9a9a',
  pl: '12px',
  textAlign: 'left',
  mb: 2,
};

export const cardFooterTextStyle = {
  fontWeight: 400,
  textAlign: 'left',
  ml: 1,
};

export const cardStyle = { p: 2, border: '1px solid rgba(0,0,0,.125)' };

export const styledIcon = {
  transform: 'scaleX(-1)',
  color: '#a9a9a9',
  margin: 2,
  fontSize: '1.2rem',
  marginRight: '5px',
};

export const footerBoxStyle = {
  display: 'flex',
  alignItems: 'center',
  flexDirection: { sm: 'row', xs: 'column' },
  my: 2.5,
  mx: 2.5,
};

export const removeIconStyle = {
  opacity: 0.4,
  color: 'rgb(251, 64, 75)',
  ':hover': {
    opacity: 1,
  },
};

export const widgetIconSize = {
  maxHeight: '50px',
  maxWidth: '50px',
};

export const widgetImgIconStyle = {
  height: '100%',
  width: '100%',
  color: '#1d62f0',
};

export const widgetTextStyle = {
  color: '#333',
  fontWeight: 300,
  fontSize: '1.375rem',
};

export const widgetFooterStyle = {
  display: 'flex',
  pt: 1,
  fontSize: '0.875rem',
};

export const widgetFooterTextStyle = { color: '#a9a9a9' };

export const dividerStyle = { borderWidth: '0.8px' };

export const checkBoxStyle = {
  '&.Mui-checked': {
    color: 'rgb(35, 204, 239)',
  },
};

export const editIconStyle = {
  opacity: 0.4,
  color: 'rgb(35, 204, 239)',
  ':hover': {
    opacity: 1,
  },
};

export const footerLinkBoxStyle = {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
};

export const footerLinkStyle = {
  mx: 1,
  textDecoration: 'none',
  color: '#9a9a9a',
};

export const footerRightsStyle = {
  display: 'flex',
  alignItems: 'center',
  color: '#797979',
};
