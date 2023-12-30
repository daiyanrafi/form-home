// UserForm.tsx
import React from 'react';
import { TextField, Typography, Grid, MenuItem, FormControlLabel, Radio, RadioGroup } from '@mui/material';

type UserFormProps = {
  title: string;
  firstName: string;
  lastName: string;
  postalAddress: string;
  address: string;
  suburb: string;
  state: string;
  country: string;
  preferredContact: string;
  landline: string;
  mobile: string;
  email: string;
  updateFields: (fields: Partial<{
    title: string;
    firstName: string;
    lastName: string;
    postalAddress: string;
    address: string;
    suburb: string;
    state: string;
    country: string;
    preferredContact: string;
    landline: string;
    mobile: string;
    email: string;
  }>) => void;
};

export function UserForm({
  title,
  firstName,
  lastName,
  postalAddress,
  address,
  suburb,
  state,
  country,
  preferredContact,
  landline,
  mobile,
  email,
  updateFields,
}: UserFormProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <Typography variant="h6" gutterBottom>
        Your Details
      </Typography>
      <p>Please Enter you details below</p>
      <Grid container spacing={2}>
        <Grid item xs={2}>
    <TextField
      fullWidth
      select
      label="Title"
      value={title}
      onChange={(e) => updateFields({ title: e.target.value })}
    >
      <MenuItem value="Mr">Mr</MenuItem>
      <MenuItem value="Mrs">Mrs</MenuItem>
    </TextField>
  </Grid>
  <Grid item xs={5}>
    <TextField
      fullWidth
      label="First Name"
      required
      type="text"
      value={firstName}
      onChange={(e) => updateFields({ firstName: e.target.value })}
    />
  </Grid>
  <Grid item xs={5}>
    <TextField
      fullWidth
      label="Last Name"
      required
      type="text"
      value={lastName}
      onChange={(e) => updateFields({ lastName: e.target.value })}
    />
  </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Postal Address"
            required
            type="text"
            value={postalAddress}
            onChange={(e) => updateFields({ postalAddress: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            required
            type="text"
            value={address}
            onChange={(e) => updateFields({ address: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Suburb"
            required
            type="text"
            value={suburb}
            onChange={(e) => updateFields({ suburb: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="State"
            required
            type="text"
            value={state}
            onChange={(e) => updateFields({ state: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Country"
            required
            type="text"
            value={country}
            onChange={(e) => updateFields({ country: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <RadioGroup
            row
            aria-label="preferredContact"
            name="preferredContact"
            value={preferredContact}
            onChange={(e) => updateFields({ preferredContact: e.target.value })}
          >
            <FormControlLabel value="Landline" control={<Radio />} label="Landline" />
            <FormControlLabel value="Mobile" control={<Radio />} label="Mobile" />
          </RadioGroup>
        </Grid>
        {preferredContact === 'Landline' && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Landline"
              required
              type="text"
              value={landline}
              onChange={(e) => updateFields({ landline: e.target.value })}
            />
          </Grid>
        )}
        {preferredContact === 'Mobile' && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile Phone"
              required
              type="text"
              value={mobile}
              onChange={(e) => updateFields({ mobile: e.target.value })}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            required
            type="email"
            value={email}
            onChange={(e) => updateFields({ email: e.target.value })}
          />
        </Grid>
      </Grid>
    </div>
  );
}
