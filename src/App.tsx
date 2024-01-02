// App.tsx
import React, { FormEvent, useState } from 'react';
import { Container, Paper, Typography, Grid, Button } from '@mui/material';
import { UserForm } from './UserForm';
import { AddressForm } from './AddressForm';
// import { AccountForm } from './AccountForm';
import { ComplaintForm } from './Complaint';
import { IncidentAddressForm } from './IncidentAddressForm';
import StartPage from './StartPage';
import { ComplaintCont } from './ComplaintCont';
import { FinalizeSubmissionForm } from './FinalizeSubmissionForm';

type FormData = {
  title: string;
  firstName: string;
  lastName: string;
  postalAddress: string;
  address: string;
  suburb: string;
  country: string;
  preferredContact: string;
  landline: string;
  mobile: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  // password: string;
  //complaint-page---------------
  supplier: string;
  service: string;
  accountNumber: string;
  complaintDescription: string;
  resolutionDescription: string;
  //Incident-page------------------
  // address: string;
  address1: string;
  // city: string;
  postcode: string;
  // state: string;
  //complaint-cont---------------
  concession: string;
  concessionTypes: string[];
  hasComplaint: string;
  // complaintDescription: string;
  agree: boolean;
  treeIdentification: string;
  //final-page
  bestTime: string;
  howDidYouHear: string;
  attachFile: File | null;
  isRobot: boolean;
};

const INITIAL_DATA: FormData = {
  title: '',
  firstName: '',
  lastName: '',
  postalAddress: '',
  address: '',
  suburb: '',
  country: '',
  preferredContact: '',
  landline: '',
  mobile: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  // password: '',
  //complaint-page
  supplier: '',
  service: '',
  accountNumber: '',
  complaintDescription: '',
  resolutionDescription: '',
  //Incident-page
  // address: '',
  address1: '',
  // city: '',
  postcode: '',
  // state: '',
  //complant-cont
  concession: '',
  concessionTypes: [],
  hasComplaint: '',
  // complaintDescription: '',
  agree: false,
  treeIdentification: '',
  //final-page
  bestTime: '',
  howDidYouHear: '',
  isRobot: false,
  attachFile: null,
};

function App() {
  const [data, setData] = useState(INITIAL_DATA);
  const [showStartPage, setShowStartPage] = useState(true);//
  const [currentStepIndex, setCurrentStepIndex] = useState(0); //

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => ({ ...prev, ...fields }));
  }

  function next() {
    setCurrentStepIndex((i) => (i >= steps.length - 1 ? i : i + 1));
  }

  function back() {
    setCurrentStepIndex((i) => (i <= 0 ? i : i - 1));
  }

  function startForm() {
    setShowStartPage(false);
  }

  const steps = [
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <IncidentAddressForm {...data} updateFields={updateFields} />,
    <ComplaintForm {...data} updateFields={updateFields} />,
    <ComplaintCont {...data} updateFields={updateFields} />,
    <FinalizeSubmissionForm {...data} updateFields={updateFields} />
  ];

  const step = showStartPage ? (
    <StartPage onNext={startForm} />
  ) : (
    steps[currentStepIndex]
  );

  const isFirstStep = currentStepIndex === 0;
  const isLastStep = currentStepIndex === steps.length - 1;

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    console.log(data);
    alert('Successful Account Creation');
  }

  return (
    <Container
      component="main"
      maxWidth="sm"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <Paper
        style={{
          padding: '2rem',
          borderRadius: '.5rem',
          fontFamily: 'Arial',
        }}
      >
        <form onSubmit={onSubmit}>
          {!showStartPage && (
            <div style={{ textAlign: 'right' }}>
              {currentStepIndex + 1} / {steps.length}
            </div>
          )}
          {step}
          <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
            {!isFirstStep && (
              <Button type="button"
                onClick={back}
                style={{ marginRight: '8px', backgroundColor: 'blue', color: 'white' }}
              >
                Back
              </Button>
            )}
            {!showStartPage && (
              <Button type="submit"
                style={{ marginRight: '8px', backgroundColor: 'blue', color: 'white' }}
              >{isLastStep ? 'Finish' : 'Next'}</Button>
            )}
          </div>
        </form>
      </Paper>
    </Container>
  );
}

export default App;
