import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `.78px solid #eee`,
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>What is productivity app with AI support?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          A productivity app with AI support uses artificial intelligence to enhance efficiency. It automates tasks, offers smart suggestions, and learns user patterns, streamlining work and boosting productivity.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>What task can AI in the app automate?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            AI in productivity apps can automate tasks such as scheduling, data entry, categorizing emails, setting reminders, generating insights from data, language translation, and providing personalized recommendations, streamlining workflows and saving time.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>How can AI help improve productivity?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            AI can improve productivity by automating repetitive tasks, offering intelligent insights, enhancing decision-making, providing personalized recommendations, streamlining data analysis, and optimizing workflows. Its ability to learn and adapt contributes to efficiency gains across various tasks and industries.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>How does the AI provide task recommendations?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            AI can improve productivity by automating repetitive tasks, offering intelligent insights, enhancing decision-making, providing personalized recommendations, streamlining data analysis, and optimizing workflows. Its ability to learn and adapt contributes to efficiency gains across various tasks and industries.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Can the app integrate with email and calender app?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            AI can improve productivity by automating repetitive tasks, offering intelligent insights, enhancing decision-making, providing personalized recommendations, streamlining data analysis, and optimizing workflows. Its ability to learn and adapt contributes to efficiency gains across various tasks and industries.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
