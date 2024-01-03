// ComplaintCont.tsx
import React from 'react';
import { TextField, Typography, Grid, MenuItem, Checkbox, FormControlLabel } from '@mui/material';

type ComplaintContProps = {
  concession: string;
  concessionTypes: string[];
  hasComplaint: string;
  complaintDescription: string;
  agree: boolean;
  treeIdentification: string;
  updateFields: (fields: Partial<{
    concession: string;
    concessionTypes: string[];
    hasComplaint: string;
    complaintDescription: string;
    agree: boolean;
    treeIdentification: string;
  }>) => void;
};

export function ComplaintCont({
  concession,
  concessionTypes,
  hasComplaint,
  complaintDescription,
  agree,
  treeIdentification,
  updateFields,
}: ComplaintContProps) {
  return (
    <div style={{ marginBottom: '10px' }}>
      <Typography variant="h6" gutterBottom>
        Complaint (Continued)
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={15}>
        <Typography variant="body1" gutterBottom style={{ color: '#073c82', marginTop: '10px', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '16px' }}>
      Do you currently have a concession card? If so, which one?
      </Typography>
          <TextField
            fullWidth
            required
            select
            label="Please Select"
            value={concession}
            onChange={(e) => updateFields({ concession: e.target.value })}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        </Grid>

        <Grid container spacing={1} style={{marginLeft: '10px'}}>
          <Grid item xs={15}>
            <Typography variant="body1" gutterBottom style={{  marginTop: '20px', marginBottom: '1px', fontWeight: 'bold', fontSize: '15px'}}>
              Concession Type:
            </Typography>
          </Grid>
          <Grid item xs={6} spacing={0.5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={concessionTypes.includes('a')}
                  onChange={() => {
                    const updatedTypes = concessionTypes.includes('a')
                      ? concessionTypes.filter((type) => type !== 'a')
                      : [...concessionTypes, 'a'];
                    updateFields({ concessionTypes: updatedTypes });
                  }}
                />
              }
              label={<Typography
                variant="body1"
                style={{
                  fontStyle: 'italic',
                  fontSize: '12px',
                  fontWeight: 'bold'
                }}
              >
                Austudy or Abstudy
              </Typography>}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={concessionTypes.includes('b')}
                  onChange={() => {
                    const updatedTypes = concessionTypes.includes('b')
                      ? concessionTypes.filter((type) => type !== 'b')
                      : [...concessionTypes, 'b'];
                    updateFields({ concessionTypes: updatedTypes });
                  }}
                />
              }
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '12px',
                    fontWeight: 'bold'
                  }}
                >
                  Centrelink Health Care Card
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={concessionTypes.includes('c')}
                  onChange={() => {
                    const updatedTypes = concessionTypes.includes('c')
                      ? concessionTypes.filter((type) => type !== 'c')
                      : [...concessionTypes, 'c'];
                    updateFields({ concessionTypes: updatedTypes });
                  }}
                />
              }
              // label="Commonwealth Seniors Health Card"
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '12px', // Adjust the font size as needed
                    fontWeight: 'bold'
                  }}
                >
                  Commonwealth Seniors Health Card
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={concessionTypes.includes('d')}
                  onChange={() => {
                    const updatedTypes = concessionTypes.includes('d')
                      ? concessionTypes.filter((type) => type !== 'd')
                      : [...concessionTypes, 'd'];
                    updateFields({ concessionTypes: updatedTypes });
                  }}
                />
              }
              // label="Full-Time Student Card"
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '12px', // Adjust the font size as needed
                    fontWeight: 'bold'
                  }}
                >
                  Full-Time Student Card
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={concessionTypes.includes('e')}
                  onChange={() => {
                    const updatedTypes = concessionTypes.includes('e')
                      ? concessionTypes.filter((type) => type !== 'e')
                      : [...concessionTypes, 'e'];
                    updateFields({ concessionTypes: updatedTypes });
                  }}
                />
              }
              // label="Low-Income Earner"
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '12px', // Adjust the font size as needed
                    fontWeight: 'bold'
                  }}
                >
                  Low-Income Earner
                </Typography>
              }
            />
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={concessionTypes.includes('k')}
                    onChange={() => {
                      const updatedTypes = concessionTypes.includes('k')
                        ? concessionTypes.filter((type) => type !== 'k')
                        : [...concessionTypes, 'k'];
                      updateFields({ concessionTypes: updatedTypes });
                    }}
                  />
                }
                label={
                  <Typography
                    variant="body1"
                    style={{
                      fontStyle: 'italic',
                      fontSize: '12px', // Adjust the font size as needed
                      fontWeight: 'bold'
                    }}
                  >
                    Others
                  </Typography>
                }
              />
            </div>
            {/* Add other checkboxes for the first row */}
          </Grid>
          <Grid item xs={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={concessionTypes.includes('g')}
                  onChange={() => {
                    const updatedTypes = concessionTypes.includes('g')
                      ? concessionTypes.filter((type) => type !== 'g')
                      : [...concessionTypes, 'g'];
                    updateFields({ concessionTypes: updatedTypes });
                  }}
                />
              }
              // label="Residential Parks Resident"
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '12px', // Adjust the font size as needed
                    fontWeight: 'bold'
                  }}
                >
                  Residential Parks Resident
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={concessionTypes.includes('h')}
                  onChange={() => {
                    const updatedTypes = concessionTypes.includes('h')
                      ? concessionTypes.filter((type) => type !== 'h')
                      : [...concessionTypes, 'h'];
                    updateFields({ concessionTypes: updatedTypes });
                  }}
                />
              }
              // label="Seniors Card"
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '12px', // Adjust the font size as needed
                    fontWeight: 'bold'
                  }}
                >
                  Seniors Card
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={concessionTypes.includes('f')}
                  onChange={() => {
                    const updatedTypes = concessionTypes.includes('f')
                      ? concessionTypes.filter((type) => type !== 'f')
                      : [...concessionTypes, 'f'];
                    updateFields({ concessionTypes: updatedTypes });
                  }}
                />
              }
              // label="Pensioner Concession Card"
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '12px', // Adjust the font size as needed
                    fontWeight: 'bold'
                  }}
                >
                  Pensioner Concession Card
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={concessionTypes.includes('i')}
                  onChange={() => {
                    const updatedTypes = concessionTypes.includes('i')
                      ? concessionTypes.filter((type) => type !== 'i')
                      : [...concessionTypes, 'i'];
                    updateFields({ concessionTypes: updatedTypes });
                  }}
                />
              }
              // label="Transport Concession Card"
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '12px', // Adjust the font size as needed
                    fontWeight: 'bold'
                  }}
                >
                  Transport Concession Card
                </Typography>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={concessionTypes.includes('j')}
                  onChange={() => {
                    const updatedTypes = concessionTypes.includes('j')
                      ? concessionTypes.filter((type) => type !== 'j')
                      : [...concessionTypes, 'j'];
                    updateFields({ concessionTypes: updatedTypes });
                  }}
                />
              }
              // label="Department of Veterans Affairs Card (DVA Card)"
              label={
                <Typography
                  variant="body1"
                  style={{
                    fontStyle: 'italic',
                    fontSize: '12px', // Adjust the font size as needed
                    fontWeight: 'bold'
                  }}
                >
                  Department of Veterans Affairs Card (DVA Card)
                </Typography>
              }
            />
            {/* Add other checkboxes for the second row */}
          </Grid>
        </Grid>


        {/* <Grid item xs={15}>
          <Typography variant="body1" gutterBottom style={{ color: '#073c82', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '16px' }}>
            Is there anything about you or your personal circumstances that we need to consider, that will help us with your complaint?
          </Typography>
          <TextField
            fullWidth
            label="Please write here."
            multiline
            rows={4}
            value={complaintDescription}
            onChange={(e) => updateFields({ complaintDescription: e.target.value })}
          />
        </Grid> */}

       <Grid item xs={15}>
        <Typography variant="body1" gutterBottom style={{ color: '#073c82', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '16px' }}>
            Is there anything about you or your personal circumstances that we need to consider, that will help us with your complaint?
          </Typography>
          <TextField
            fullWidth
            label="Please write here."
            required
            multiline
            value={complaintDescription}
            onChange={(e) => updateFields({ complaintDescription: e.target.value })}
          />
        </Grid> 

        <Grid item xs={15} style={{ color: '#de290d', marginTop: '10px', fontFamily: 'Arial, sans-serif'}}>
          <FormControlLabel
            control={
              <Checkbox
                // required
                checked={agree}
                onChange={() => updateFields({ agree: !agree })}
              />
            }
            label={
              <Typography variant="body1" style={{fontSize: '12px' }}>
                I agree for this information to be shared with relevant parties to assist with this complaint.
              </Typography>
            }
          />
        </Grid>

        <Grid item xs={15}>
          <Typography variant="body1" gutterBottom style={{ color: '#073c82', fontFamily: 'Arial, sans-serif', fontSize: '14px', fontStyle: 'italic', marginBottom: '16px' }}>
          Do you identify as an Aboriginal ot Torres Straait Islander person?
          </Typography>
          <TextField
            fullWidth
            select
            required
            label="Please Select"
            value={treeIdentification}
            onChange={(e) => updateFields({ treeIdentification: e.target.value })}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </div>
  );
}
