/* eslint-disable no-console */
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useFormState } from "react-use-form-state";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Tags from "./Tags";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(4)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default function SignUpForm() {
  const [formState, { text }] = useFormState();
  const classes = useStyles();
  const [state, setState] = React.useState({
    language: ""
  });

  function handleSubmit() {
    var proxyUrl = "https://cors-anywhere.herokuapp.com/",
      targetUrl =
        "https://63uxgjbrf0.execute-api.us-east-1.amazonaws.com/dev/room";

    fetch(proxyUrl + targetUrl, {
      method: "post",
      body: JSON.stringify({
        publisher: formState.values["publisher"],
        name: formState.values["name"],
        description: formState.values["description"],
        image: formState.values["image"],
        language: formState.values["languageForm"],
        link: formState.values["link"],
        schedule: formState.values["schedule"],
        type: formState.values["type"],
        begining: formState.values["begining"],
        tags: formState.values["tags"]
      })
    })
      .then(console.log(formState.values["language"]))
      .then(console.log(state.language))

      .catch(function(error) {
        console.log(
          "There has been a problem with your fetch operation: " + error.message
        );
      });
  }

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  // function NativeSelects() {
  //   const inputLabel = React.useRef(null);
  //   const [labelWidth, setLabelWidth] = React.useState(0);
  //   React.useEffect(() => {
  //     setLabelWidth(inputLabel.current.offsetWidth);
  //   }, []);
  // }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create Room
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid>
            <Grid item xs={12}>
              <TextField
                {...text("publisher")}
                variant="outlined"
                required
                fullWidth
                id="publisher"
                label="publisher"
                name="publisher"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...text("name")}
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...text("description")}
                name="description"
                variant="outlined"
                // required
                fullWidth
                id="description"
                label="Description"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...text("image")}
                variant="outlined"
                // required
                fullWidth
                type="url"
                name="image"
                label="image"
                id="image"
              />
            </Grid>
            <FormControl>
              <InputLabel>Language</InputLabel>
              <Select
                native
                {...text("languageForm")}
                name="language"
                id="language"
                value={state.language}
                onChange={handleChange("language")}
                inputProps={{
                  name: "language",
                  id: "language-native-simple"
                }}
              >
                <option value={"english"}>english</option>
                <option value={"portuguese"}>portuguese</option>
                <option value={"french"}>french</option>
              </Select>
            </FormControl>
            {/* <Grid item xs={12}>
              <TextField
                {...text("language")}
                variant="outlined"
                // required
                fullWidth
                type="language"
                name="language"
                label="language"
                id="language"
              /> */}
            <Grid item xs={12}>
              <TextField
                {...text("link")}
                variant="outlined"
                // required
                fullWidth
                type="url"
                name="link"
                label="link"
                id="link"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...text("type")}
                variant="outlined"
                required
                fullWidth
                type="text"
                name="type"
                label="type"
                id="type"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                {...text("begining")}
                variant="outlined"
                // required
                fullWidth
                type="datetime-local"
                name="begining"
                // label="begining"
                id="begining"
              />
            </Grid>
            <Tags />
            {/* <Grid item xs={12}>
              <TextField
                {...text("tags")}
                variant="outlined"
                // required
                fullWidth
                type="text"
                name="tags"
                label="tags"
                id="tags"
              />
            </Grid> */}
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Create Room
          </Button>
        </form>
      </div>
    </Container>
  );
}
