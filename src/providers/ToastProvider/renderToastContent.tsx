import { Typography } from '@mui/material';

interface ToastContentProps {
  title: string;
  content?: string[];
}

export const renderToastContent = ({ title, content }: ToastContentProps) => (
  <>
    <Typography fontWeight={content ? 'medium' : 'regular'}>{title}</Typography>
    {content?.map((c, i) => <Typography key={i}>{c}</Typography>)}
  </>
);
