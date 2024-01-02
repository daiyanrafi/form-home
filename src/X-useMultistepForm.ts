// import { ReactElement, useState } from "react"

// export function useMultistepForm(steps: ReactElement[]) {
//   const [currentStepIndex, setCurrentStepIndex] = useState(0)

//   function next() {
//     setCurrentStepIndex(i => {
//       if (i >= steps.length - 1) return i
//       return i + 1
//     })
//   }

//   function back() {
//     setCurrentStepIndex(i => {
//       if (i <= 0) return i
//       return i - 1
//     })
//   }

//   function goTo(index: number) {
//     setCurrentStepIndex(index)
//   }

//   return {
//     currentStepIndex,
//     step: steps[currentStepIndex],
//     steps,
//     isFirstStep: currentStepIndex === 0,
//     isLastStep: currentStepIndex === steps.length - 1,
//     goTo,
//     next,
//     back,
//   }
// }

//code from app.tsx first attemp jekhane startpage er chakdike parent er design pacchilo

//   return (
//     <Container
//       component="main"
//       maxWidth={false}
//       style={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         height: '100vh',
//         background: '#d7e3f5'
//       }}
//     >
//       <Paper
//         style={{
//           padding: '2rem',
//           borderRadius: '.5rem',
//           fontFamily: 'Arial',
//           maxWidth: '600px',
//         }}
//       >
//         <form onSubmit={onSubmit}>
//           {!showStartPage && (
//             <div style={{ textAlign: 'right' }}>
//               {currentStepIndex + 1} / {steps.length}
//             </div>
//           )}
//           {step}
//           <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
//             {!isFirstStep && (
//               <Button type="button"
//                 onClick={back}
//                 style={{ marginRight: '8px', backgroundColor: 'blue', color: 'white' }}
//               >
//                 Back
//               </Button>
//             )}
//             {!showStartPage && (
//               <Button type="submit"
//                 style={{ marginRight: '8px', backgroundColor: 'blue', color: 'white' }}
//               >{isLastStep ? 'Finish' : 'Next'}</Button>
//             )}
//           </div>
//         </form>
//       </Paper>
//     </Container>
//   );