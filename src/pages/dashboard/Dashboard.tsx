import { Grid } from '@mui/material';

import ProductPerformance from 'components/sections/dashboard/product-performance/ProductPerformance';

const Dashboard = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12}>
        <ProductPerformance />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
