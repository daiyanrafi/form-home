// ComplaintCont.tsx
import React from 'react';
import { TextField, Typography, Grid, MenuItem, Checkbox, FormControlLabel } from '@mui/material';

type ComplaintContProps = {
  complaint_cont_concession: string;
  complaint_cont_concessionTypes: string[];
  complaint_cont_hasComplaint: string;
  complaint_cont_complaintDescription: string;
  complaint_cont_agree: boolean;
  complaint_cont_treeIdentification: string;
  updateFields: (fields: Partial<{
    complaint_cont_concession: string;
    complaint_cont_concessionTypes: string[];
    complaint_cont_hasComplaint: string;
    complaint_cont_complaintDescription: string;
    complaint_cont_agree: boolean;
    complaint_cont_treeIdentification: string;
  }>) => void;
};

export function ComplaintCont({
  complaint_cont_concession,
  complaint_cont_concessionTypes,
  complaint_cont_hasComplaint,
  complaint_cont_complaintDescription,
  complaint_cont_agree,
  complaint_cont_treeIdentification,
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
            value={complaint_cont_concession}
            onChange={(e) => updateFields({ complaint_cont_concession: e.target.value })}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        </Grid>

        <Grid container spacing={1} style={{ marginLeft: '10px' }}>
          <Grid item xs={15}>
            <Typography variant="body1" gutterBottom style={{ marginTop: '20px', marginBottom: '1px', fontWeight: 'bold', fontSize: '15px' }}>
              Concession Type:
            </Typography>
          </Grid>
          <Grid item xs={6} spacing={0.5}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={complaint_cont_concessionTypes.includes('a')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('a')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'a')
                      : [...complaint_cont_concessionTypes, 'a'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
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
                  checked={complaint_cont_concessionTypes.includes('b')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('b')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'b')
                      : [...complaint_cont_concessionTypes, 'b'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
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
                  checked={complaint_cont_concessionTypes.includes('c')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('c')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'c')
                      : [...complaint_cont_concessionTypes, 'c'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
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
                  checked={complaint_cont_concessionTypes.includes('d')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('d')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'd')
                      : [...complaint_cont_concessionTypes, 'd'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
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
                  checked={complaint_cont_concessionTypes.includes('e')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('e')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'e')
                      : [...complaint_cont_concessionTypes, 'e'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
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
                    checked={complaint_cont_concessionTypes.includes('k')}
                    onChange={() => {
                      const updatedTypes = complaint_cont_concessionTypes.includes('k')
                        ? complaint_cont_concessionTypes.filter((type) => type !== 'k')
                        : [...complaint_cont_concessionTypes, 'k'];
                      updateFields({ complaint_cont_concessionTypes: updatedTypes });
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
                  checked={complaint_cont_concessionTypes.includes('g')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('g')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'g')
                      : [...complaint_cont_concessionTypes, 'g'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
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
                  checked={complaint_cont_concessionTypes.includes('h')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('h')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'h')
                      : [...complaint_cont_concessionTypes, 'h'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
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
                  checked={complaint_cont_concessionTypes.includes('f')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('f')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'f')
                      : [...complaint_cont_concessionTypes, 'f'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
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
                  checked={complaint_cont_concessionTypes.includes('i')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('i')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'i')
                      : [...complaint_cont_concessionTypes, 'i'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
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
                  checked={complaint_cont_concessionTypes.includes('j')}
                  onChange={() => {
                    const updatedTypes = complaint_cont_concessionTypes.includes('j')
                      ? complaint_cont_concessionTypes.filter((type) => type !== 'j')
                      : [...complaint_cont_concessionTypes, 'j'];
                    updateFields({ complaint_cont_concessionTypes: updatedTypes });
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
            value={complaint_cont_complaintDescription}
            onChange={(e) => updateFields({ complaint_cont_complaintDescription: e.target.value })}
          />
        </Grid>

        <Grid item xs={15} style={{ color: '#de290d', marginTop: '10px', fontFamily: 'Arial, sans-serif' }}>
          <FormControlLabel
            control={
              <Checkbox
                // required
                checked={complaint_cont_agree}
                onChange={() => updateFields({ complaint_cont_agree: !complaint_cont_agree })}
              />
            }
            label={
              <Typography variant="body1" style={{ fontSize: '12px' }}>
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
            value={complaint_cont_treeIdentification}
            onChange={(e) => updateFields({ complaint_cont_treeIdentification: e.target.value })}
          >
            <MenuItem value="Yes">Yes</MenuItem>
            <MenuItem value="No">No</MenuItem>
          </TextField>
        </Grid>
      </Grid>
    </div>
  );
}
