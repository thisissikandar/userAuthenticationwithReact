import { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Snackbar } from "@mui/material";

const initialValues = {
  title: "",
  year: "",
  runtime: "",
  images: "",
  rating: "",
  director: "",
  writer: "",
  stars: "",
  language: "",
  country: "",
  videoLink: "",
  descriptions: "",
};

export default function AddMovies() {
  const [addMovies, setAddMovies] = useState(initialValues);
  const [open, setClose] = useState(false);
  const [message, setMessage] = useState("");
  const handleClose = () => {
    setClose(false);
  };
  const movieAddServer = async () => {
    const data = {
      method: "POST",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addMovies),
    };
    const result = await fetch("http://localhost:8000/api/addmovies", data);
    return result;
  };
  const handleClick = async (e) => {
    const { name, value } = e.target;
    setAddMovies((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const res = movieAddServer();
    res
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.log(error.message));
    setAddMovies(initialValues);
    setClose(true);
  };

  return (
    <>
      <Grid container >
        <Grid item xs={6}>
          <TextField
            required
            id="title"
            name="title"
            label="Movie Title"
            fullWidth
            variant="standard"
            value={addMovies.title}
            onChange={handleClick}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="year"
            name="year"
            label="Movie Year"
            fullWidth
            variant="standard"
            value={addMovies.year}
            onChange={handleClick}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="runtime"
            name="runtime"
            label="Run Time"
            fullWidth
            variant="standard"
            value={addMovies.runtime}
            onChange={handleClick}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="images"
            name="images"
            label="Movie Images"
            fullWidth
            variant="standard"
            value={addMovies.images}
            onChange={handleClick}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="rating"
            name="rating"
            label="Movie Rating"
            fullWidth
            variant="standard"
            value={addMovies.rating}
            onChange={handleClick}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="director"
            name="director"
            label="Movie Director"
            fullWidth
            variant="standard"
            value={addMovies.director}
            onChange={handleClick}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="writer"
            name="writer"
            label="Movie Writer"
            fullWidth
            variant="standard"
            value={addMovies.writer}
            onChange={handleClick}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="stars"
            name="stars"
            label="Movie Stars"
            fullWidth
            variant="standard"
            value={addMovies.stars}
            onChange={handleClick}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="language"
            name="language"
            label="Movie Language"
            fullWidth
            variant="standard"
            value={addMovies.language}
            onChange={handleClick}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Movie Country"
            fullWidth
            variant="standard"
            value={addMovies.country}
            onChange={handleClick}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="videoLink"
            name="videoLink"
            label="Movie videoLink"
            fullWidth
            variant="standard"
            value={addMovies.videoLink}
            onChange={handleClick}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="descriptions"
            name="descriptions"
            label="Movie Descriptions"
            fullWidth
            variant="standard"
            value={addMovies.descriptions}
            onChange={handleClick}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        onClose={handleClose}
        message={message}
      />
    </>
  );
}
