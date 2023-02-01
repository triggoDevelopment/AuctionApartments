import { Button, Grid, Typography } from "@mui/material";

const FileUpload = () => {
  return (
    <Grid item xs={12}>
      <Button
        sx={{
          border: "1px dashed",
          borderRadius: "8px",
          minWidth: "100%",
          minHeight: "150px",
          display: "block",
          background: "white",
        }}
      >
        <img src="images/uploadFile.png" alt="uploadFileIcon" />
        <Typography pt={1}>upload a copy of your RE license </Typography>
        <input type="file" hidden />
      </Button>
    </Grid>
  );
};

export default FileUpload;
