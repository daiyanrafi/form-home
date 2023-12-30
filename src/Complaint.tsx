// ComplaintForm.tsx
import React from 'react';
import { TextField, Typography, Grid, Select, MenuItem, TextareaAutosize } from '@mui/material';

type ComplaintFormProps = {
  supplier: string;
  service: string;
  accountNumber: string;
  complaintDescription: string;
  resolutionDescription: string;
  updateFields: (fields: Partial<{
    supplier: string;
    service: string;
    accountNumber: string;
    complaintDescription: string;
    resolutionDescription: string;
  }>) => void;
};

export function ComplaintForm({
  supplier,
  service,
  accountNumber,
  complaintDescription,
  resolutionDescription,
  updateFields,
}: ComplaintFormProps) {
  return (
    <div style={{ marginBottom: '16px' }}>
      <Typography variant="h6" gutterBottom>
        Complaint Information
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            autoFocus
            label="Name of the Supplier"
            required
            select
            value={supplier}
            onChange={(e) => updateFields({ supplier: e.target.value })}
          >
            <MenuItem value="a">Option A</MenuItem>
            <MenuItem value="b">Option B</MenuItem>
            <MenuItem value="c">Option C</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Services"
            required
            select
            value={service}
            onChange={(e) => updateFields({ service: e.target.value })}
          >
            <MenuItem value="x">Option X</MenuItem>
            <MenuItem value="y">Option Y</MenuItem>
            <MenuItem value="z">Option Z</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Account Number"
            value={accountNumber}
            onChange={(e) => updateFields({ accountNumber: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Brief Description about the Complaint"
            required
            multiline
            value={complaintDescription}
            onChange={(e) => updateFields({ complaintDescription: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Customer Seeking to Resolve"
            required
            multiline
            value={resolutionDescription}
            onChange={(e) => updateFields({ resolutionDescription: e.target.value })}
          />
        </Grid>
      </Grid>
    </div>
  );
}
