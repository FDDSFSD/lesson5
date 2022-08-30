import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import styles from './Recent.module.css'

export default function BasicRating() {
  const [value, setValue] = React.useState(1);

  return (
    <section className={styles.rating}>
    <Box 
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
    </section>
  );
}
