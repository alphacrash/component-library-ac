import { useState } from "react";
import { Button, Dialog, Grid } from "@mui/material";
import PropTypes from "prop-types";

export const LoaderModal = ({ show, title }) => {
  const [showModal, setShowModal] = useState(show);

  return (
    <Dialog open={showModal}>
      <Grid container>
        <Grid item>Progress Loader</Grid>
        <Grid item>{title}</Grid>
        <Grid item>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

LoaderModal.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
};

LoaderModal.defaultProps = {
  show: false,
  title: "Loading...",
};

export default LoaderModal;
