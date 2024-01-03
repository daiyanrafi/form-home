// IncidentAddressForm.tsx
import React from 'react';
import { TextField, Typography, Grid } from '@mui/material';

type IncidentAddressFormProps = {
  incident_address: string;
  incident_address1: string;
  incident_city: string;
  incident_postcode: string;
  incident_state: string;
  updateFields: (fields: Partial<{
    incident_address: string;
    incident_address1: string;
    incident_city: string;
    incident_postcode: string;
    incident_state: string;
  }>) => void;
};

export function IncidentAddressForm({
  incident_address,
  incident_address1,
  incident_city,
  incident_postcode,
  incident_state,
  updateFields,
}: IncidentAddressFormProps) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom>
        Incident Address
      </Typography>
      
      <Typography style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '20px' }}>The incident address is the address where your supply is located and may be different to your postal address</Typography>
      
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoFocus
            label="Address"
            required
            value={incident_address}
            onChange={(e) => updateFields({ incident_address: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Address 1"
            value={incident_address1}
            onChange={(e) => updateFields({ incident_address1: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="City"
            required
            value={incident_city}
            onChange={(e) => updateFields({ incident_city: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Postcode"
            required
            value={incident_postcode}
            onChange={(e) => updateFields({ incident_postcode: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="State"
            required
            value={incident_state}
            onChange={(e) => updateFields({ incident_state: e.target.value })}
          />
        </Grid>
      </Grid>
    </div>
  );
}
