import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import {
  Button,
  ButtonGroup,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

export default function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("Money");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const note = {
      title,
      details,
      category,
    };

    setDetailsError(false);
    setTitleError(false);

    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(history.push("/"));
    }
  };

  return (
    <Container>
      <Typography
        variant="h3"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className={classes.field}
          id="title"
          label="Note Title"
          variant="outlined"
          color="primary"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          className={classes.field}
          id="details"
          label="Details"
          variant="outlined"
          color="primary"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <FormControl className="classes.field">
          <FormLabel>Form Label</FormLabel>
          <RadioGroup value={category}>
            <FormControlLabel
              value="Money"
              label="Money"
              control={<Radio />}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <FormControlLabel
              value="ToDos"
              label="ToDos"
              control={<Radio />}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <FormControlLabel
              value="Reminder"
              label="Reminder"
              control={<Radio />}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
            <FormControlLabel
              value="Work"
              label="Work"
              control={<Radio />}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            />
          </RadioGroup>
        </FormControl>
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
          className={classes.btn}
          endIcon={<KeyboardArrowRightIcon />}
        >
          SUBMIT
        </Button>
      </form>
    </Container>
  );
}
