import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';


export const SimpleSnackbar = (props) =>{
  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={true}
        autoHideDuration={6000}
        message="Thank you For Registering"
      />
    </div>
  );
}