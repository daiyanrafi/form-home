// RepresentativeForm.tsx
import React from 'react';
import { TextField, Typography, Grid, MenuItem, FormControlLabel, Radio, RadioGroup } from '@mui/material';

type RepresentativeFormProps = {
  representativeTitle: string;
  representativeFirstName: string;
  representativeLastName: string;
  representativePostalAddress: string;
  // representativeAddress: string;
  representativeSuburb: string;
  representativePostcode: string;
  representativeState: string;
  representativeCountry: string;
  representativePreferredContact: string;
  representativeLandline: string;
  representativeMobile: string;
  representativeEmail: string;
  updateFields: (fields: Partial<{
    representativeTitle: string;
    representativeFirstName: string;
    representativeLastName: string;
    representativePostalAddress: string;
    // representativeAddress: string;
    representativeSuburb: string;
    representativePostcode: string;
    representativeState: string;
    representativeCountry: string;
    representativePreferredContact: string;
    representativeLandline: string;
    representativeMobile: string;
    representativeEmail: string;
  }>) => void;
};

export function RepresentativeForm({
  representativeTitle,
  representativeFirstName,
  representativeLastName,
  representativePostalAddress,
  //   representativeAddress,
  representativeSuburb,
  representativePostcode,
  representativeState,
  representativeCountry,
  representativePreferredContact,
  representativeLandline,
  representativeMobile,
  representativeEmail,
  updateFields,
}: RepresentativeFormProps) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom>
        Representative Details
      </Typography>
      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '20px' }}>Please Enter Representative details below</p>
      {/* <Typography variant="body1" style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '8px' }}>
  Please Enter Representative details below
</Typography>
      <Typography variant="body2" style={{ color: 'red', marginBottom: '16px' }}>
        (if you want, you can skip)
      </Typography> */}
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField
            fullWidth
            select
            label="Title"
            value={representativeTitle}
            onChange={(e) => updateFields({ representativeTitle: e.target.value })}
          >
            <MenuItem value="Mr">Mr</MenuItem>
            <MenuItem value="Mrs">Mrs</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            label="First Name"
            type="text"
            value={representativeFirstName}
            onChange={(e) => updateFields({ representativeFirstName: e.target.value })}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            label="Last Name"
            type="text"
            value={representativeLastName}
            onChange={(e) => updateFields({ representativeLastName: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Postal Address"
            type="text"
            value={representativePostalAddress}
            onChange={(e) => updateFields({ representativePostalAddress: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Suburb"
            type="text"
            value={representativeSuburb}
            onChange={(e) => updateFields({ representativeSuburb: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Postcode"
            type="text"
            value={representativePostcode}
            onChange={(e) => updateFields({ representativePostcode: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="State"
            type="text"
            value={representativeState}
            onChange={(e) => updateFields({ representativeState: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Country"
            type="text"
            value={representativeCountry}
            onChange={(e) => updateFields({ representativeCountry: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <RadioGroup
            row
            aria-label="preferredContact"
            name="preferredContact"
            value={representativePreferredContact}
            onChange={(e) => updateFields({ representativePreferredContact: e.target.value })}
          >
            <FormControlLabel value="Landline" control={<Radio />} label="Landline" />
            <FormControlLabel value="Mobile" control={<Radio />} label="Mobile" />
          </RadioGroup>
        </Grid>
        {representativePreferredContact === 'Landline' && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Landline"
              type="text"
              value={representativeLandline}
              onChange={(e) => updateFields({ representativeLandline: e.target.value })}
            />
          </Grid>
        )}
        {representativePreferredContact === 'Mobile' && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile Phone"
              type="text"
              value={representativeMobile}
              onChange={(e) => updateFields({ representativeMobile: e.target.value })}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={representativeEmail}
            onChange={(e) => updateFields({ representativeEmail: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ color: '#073c82', marginTop: '10px', fontFamily: 'Arial, sans-serif', fontSize: '12px', fontStyle: 'italic', marginBottom: '16px' }}>
            If you are acting on behalf of another person, you are required to provide a singed Authority to Act form. Alternatively, you can also post the Authority to Act form to us on GPO Box 2947, Adelaide SA 5001.

            <p style={{ marginBottom: '12px' }}><a href="www.google.com">Download Authority Form</a></p>

            <p style={{ color: 'red', fontSize: '10px' }}>You can skip this page, if you want. Press the 'NEXT' button.</p>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
