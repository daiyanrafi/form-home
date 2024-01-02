// // FormWrapper.tsx
// import React, { ReactNode } from 'react';
// import { Container, Paper, styled } from '@mui/material';

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   marginTop: theme.spacing(2),
//   padding: theme.spacing(3),
// }));

// type FormWrapperProps = {
//   children: ReactNode;
// };

// export function FormWrapper({ children }: FormWrapperProps) {
//   return (
//     <Container component="main" maxWidth="xs">
//       <StyledPaper elevation={3}>{children}</StyledPaper>
//     </Container>
//   );
// }


//start page wrong allignment code
// return (
//     <Container>
//       <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
//         <Typography variant="h6" gutterBottom>
//           Questionnaire:
//         </Typography>
//         <FormControl component="fieldset">
//           <FormLabel component="legend">Are you without electricity, gas, or water?</FormLabel>
//           <RadioGroup
//             row
//             aria-label="question1"
//             name="question1"
//             value={selectedOption1}
//             onChange={(e) => handleChange1(e.target.value)}
//           >
//             <FormControlLabel value="yes1" control={<Radio />} label="Yes" />
//             <FormControlLabel value="no1" control={<Radio />} label="No" />
//           </RadioGroup>
//           {showWarning && (
//             <Typography color="error" variant="body2">
//               Please contact your foreman at {selectedOption1 === 'yes1' ? '+376423926719' : '+00393946334'}
//             </Typography>
//           )}
//         </FormControl>

//         {selectedOption1 === 'no1' && (
//           <FormControl component="fieldset">
//             <FormLabel component="legend">Have you contacted your provider to try to resolve your complaint?</FormLabel>
//             <RadioGroup
//               row
//               aria-label="question2"
//               name="question2"
//               value={selectedOption2}
//               onChange={(e) => handleChange2(e.target.value)}
//             >
//               <FormControlLabel value="yes2" control={<Radio />} label="Yes" />
//               <FormControlLabel value="no2" control={<Radio />} label="No" />
//             </RadioGroup>
//             {showWarning && (
//               <Typography color="error" variant="body2">
//                 Please contact your foreman at +00393946334
//               </Typography>
//             )}
//             {selectedOption2 === 'yes2' && (
//               <Button variant="contained" color="primary" onClick={handleNext} style={{ marginTop: '2rem' }}>
//                 Next
//               </Button>
//             )}
//           </FormControl>
//         )}
//       </Paper>
//     </Container>
//   );
