// FinalizeSubmissionForm.tsx
import React from 'react';
import { Typography, Grid, TextField, Select, MenuItem, Input, FormControlLabel, Checkbox, Button } from '@mui/material';

type FinalizeSubmissionFormProps = {
  final_sub_bestTime: string;
  final_sub_howDidYouHear: string;
  final_sub_attachFile: File | null;
  final_sub_isRobot: boolean;
  updateFields: (fields: Partial<{
    final_sub_bestTime: string;
    final_sub_howDidYouHear: string;
    final_sub_attachFile: File | null;
    final_sub_isRobot: boolean;
  }>) => void;
};

export function FinalizeSubmissionForm({
  final_sub_bestTime,
  final_sub_howDidYouHear,
  final_sub_attachFile,
  final_sub_isRobot,
  updateFields,
}: FinalizeSubmissionFormProps) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    updateFields({ final_sub_attachFile: file || null });
  };

  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom>
        Finalize your submission
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ color: '#073c82', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '10px', marginTop: '10px' }}>
            What would be the best time and day to call you, between 8:30am and 5pm Monday to friday?
          </Typography>
          <TextField
            fullWidth
            required
            label="Best Time"
            select
            value={final_sub_bestTime}
            onChange={(e) => updateFields({ final_sub_bestTime: e.target.value })}
          >
            <MenuItem value="morning">Morning</MenuItem>
            <MenuItem value="evening">Evening</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ color: '#073c82', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '10px', marginTop: '10px' }}>
            How did you hear about the Energy and Water Ombudsman's Office?
          </Typography>
          <TextField
            fullWidth
            required
            label="How did you hear about us?"
            select
            value={final_sub_howDidYouHear}
            onChange={(e) => updateFields({ final_sub_howDidYouHear: e.target.value })}
          >
            <MenuItem value="tv">TV</MenuItem>
            <MenuItem value="radio">Radio</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Input
            fullWidth
            type="file"
            onChange={handleFileChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1" gutterBottom style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginTop: '10px', marginBottom: '1px' }}>
            <p>By submitting this form, I authorise the Energy & Water Ombudsman SA to consider the complaint against the energy or water supplier specified in this form.</p>
            <p>I also authorise the Energy & Water Ombudsman SA to:</p>

            <p>- exchange my information, including relevant sensitive information, to other parties, consultants or external organisations where reasonably necessary for the purpose of dealing with the complaint, and as required or permitted by law;</p>
            <p>- refer the complaint to another body or dispute resolution service where the Energy & Water Ombudsman SA decides it is appropriate.</p>

            <p>For general information on the Energy & Water Ombudsman SA deals with information provided to us and the complainant's privacy rights, see our <a href="www.google.com">privacy policy</a>.</p>
            <p>Details of our complaint handling process can be found <a href="www.google.com">here</a>.</p>

          </Typography>
        </Grid>
        <Grid item xs={12} style={{ fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '16px' }}>
          <FormControlLabel
            control={
              <Checkbox
                required
                checked={final_sub_isRobot}
                onChange={() => updateFields({ final_sub_isRobot: !final_sub_isRobot })}
              />
            }
            label="I am not a robot"
          />
        </Grid>
      </Grid>
    </div>
  );
}