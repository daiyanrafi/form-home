// UserForm.tsx
import React from 'react';
import { TextField, Typography, Grid, MenuItem, FormControlLabel, Radio, RadioGroup } from '@mui/material';

type UserFormProps = {
  user_title: string;
  user_firstName: string;
  user_lastName: string;
  user_postalAddress: string;
  user_address: string;
  user_suburb: string;
  user_postcode: string;
  user_state: string;
  user_country: string;
  user_preferredContact: string;
  user_landline: string;
  user_mobile: string;
  user_email: string;
  updateFields: (fields: Partial<{
    user_title: string;
    user_firstName: string;
    user_lastName: string;
    user_postalAddress: string;
    user_address: string;
    user_suburb: string;
    user_postcode: string;
    user_state: string;
    user_country: string;
    user_preferredContact: string;
    user_landline: string;
    user_mobile: string;
    user_email: string;
  }>) => void;
};

export function UserForm({
  user_title,
  user_firstName,
  user_lastName,
  user_postalAddress,
  user_address,
  user_suburb,
  user_postcode,
  user_state,
  user_country,
  user_preferredContact,
  user_landline,
  user_mobile,
  user_email,
  updateFields,
}: UserFormProps) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom>
        Your Details
      </Typography>
      
      <Typography style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '20px' }}>Please Enter you details below</Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <TextField
            fullWidth
            select
            required
            label="Title"
            value={user_title}
            onChange={(e) => updateFields({ user_title: e.target.value })}
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
            value={user_firstName}
            onChange={(e) => updateFields({ user_firstName: e.target.value })}
          />
        </Grid>
        <Grid item xs={5}>
          <TextField
            fullWidth
            label="Last Name"
            required
            type="text"
            value={user_lastName}
            onChange={(e) => updateFields({ user_lastName: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Postal Address"
            required
            type="text"
            value={user_postalAddress}
            onChange={(e) => updateFields({ user_postalAddress: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address"
            required
            type="text"
            value={user_address}
            onChange={(e) => updateFields({ user_address: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Suburb"
            required
            type="text"
            value={user_suburb}
            onChange={(e) => updateFields({ user_suburb: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Postcode"
            required
            type="text"
            value={user_postcode}
            onChange={(e) => updateFields({ user_postcode: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="State"
            required
            type="text"
            value={user_state}
            onChange={(e) => updateFields({ user_state: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Country"
            required
            type="text"
            value={user_country}
            onChange={(e) => updateFields({ user_country: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <RadioGroup
            row
            aria-label="preferredContact"
            name="preferredContact"
            value={user_preferredContact}
            onChange={(e) => updateFields({ user_preferredContact: e.target.value })}
          >
            <FormControlLabel value="Landline" control={<Radio />} label="Landline" />
            <FormControlLabel value="Mobile" control={<Radio />} label="Mobile" />
          </RadioGroup>
        </Grid>
        {user_preferredContact === 'Landline' && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Landline"
              required
              type="text"
              value={user_landline}
              onChange={(e) => updateFields({ user_landline: e.target.value })}
            />
          </Grid>
        )}
        {user_preferredContact === 'Mobile' && (
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Mobile Phone"
              required
              type="text"
              value={user_mobile}
              onChange={(e) => updateFields({ user_mobile: e.target.value })}
            />
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            required
            type="email"
            value={user_email}
            onChange={(e) => updateFields({ user_email: e.target.value })}
          />
        </Grid>
      </Grid>
    </div>
  );
}
