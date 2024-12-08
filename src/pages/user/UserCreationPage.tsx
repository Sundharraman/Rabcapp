import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Button,
  FormHelperText,
  Box,
  Typography,
  Grid,
  Switch,
} from '@mui/material';

interface UserFormValues {
  username: string;
  email: string;
  phoneNumber: string;
  address: string;
  roles: string;
  permissions: string[];
  status: boolean;
}

const initialValues: UserFormValues = {
  username: '',
  email: '',
  phoneNumber: '',
  address: '',
  roles: '',
  permissions: [],
  status: true,
};

// Validation Schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  phoneNumber: Yup.string().matches(
    /^[+]?[0-9]{10,15}$/,
    'Phone number must be between 10 and 15 digits',
  ),
  address: Yup.string(),
  roles: Yup.string().required('Role is required'),
  permissions: Yup.array().of(Yup.string()).min(1, 'At least one permission is required'),
  status: Yup.boolean().required('Status is required'),
});

const UserCreationPage: React.FC = () => {
  // Submit handler
  const onSubmit = (values: UserFormValues, actions: FormikHelpers<UserFormValues>) => {
    console.log('Form Data:', values);
    actions.setSubmitting(false); // Stop loading spinner (if you show one)
  };

  return (
    <Box sx={{ maxWidth: 600, margin: 'auto', padding: 3 }}>
      <Typography variant="h4" gutterBottom>
        User Creation
      </Typography>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
        {({ values, handleChange, handleBlur, errors, touched }) => (
          <Form>
            <Grid container spacing={4}>
              {/* Username Field */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="username"
                  name="username"
                  label="Username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
              </Grid>

              {/* Email Field */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="email"
                  name="email"
                  label="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
              </Grid>

              {/* Phone Number Field */}
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  value={values.phoneNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                  helperText={touched.phoneNumber && errors.phoneNumber}
                />
              </Grid>

              {/* Address Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="address"
                  name="address"
                  label="Address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.address && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                />
              </Grid>

              {/* Role Field */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={touched.roles && Boolean(errors.roles)}>
                  <InputLabel>Role</InputLabel>
                  <Select
                    label="Role"
                    id="roles"
                    name="roles"
                    value={values.roles}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="editor">Editor</MenuItem>
                    <MenuItem value="viewer">Viewer</MenuItem>
                  </Select>
                  <FormHelperText>{touched.roles && errors.roles}</FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <FormControl fullWidth error={touched.permissions && Boolean(errors.permissions)}>
                  <InputLabel>Permissions</InputLabel>
                  <Select
                    multiple
                    label="Permissions"
                    id="permissions"
                    name="permissions"
                    value={values.permissions}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    renderValue={(selected) => selected.join(', ')}
                  >
                    <MenuItem value="read">Read</MenuItem>
                    <MenuItem value="write">Write</MenuItem>
                    <MenuItem value="execute">Execute</MenuItem>
                  </Select>
                  <FormHelperText>{touched.permissions && errors.permissions}</FormHelperText>
                </FormControl>
              </Grid>
              {/* Status Field */}
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <Typography component="div" variant="body1">
                    Status
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Switch
                      id="status"
                      name="status"
                      checked={values.status}
                      onChange={(event) => handleChange(event)}
                      onBlur={handleBlur}
                      inputProps={{ 'aria-label': 'status toggle' }}
                    />
                    <Typography variant="body2" sx={{ ml: 1 }}>
                      {values.status ? 'Active' : 'Inactive'}
                    </Typography>
                  </Box>
                  <FormHelperText>{touched.status && errors.status}</FormHelperText>
                </FormControl>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Box sx={{ textAlign: 'center' }}>
                  <Button type="submit" variant="contained" color="primary">
                    Create User
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default UserCreationPage;
