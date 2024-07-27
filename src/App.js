import React from 'react';
import './App.css';
import { Container, Typography, Paper, Grid } from '@material-ui/core';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

// Import Dialogflow Chatbot component
import Chatbot from './Chatbot';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0779e4',
    },
    secondary: {
      main: '#f3f6fc',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="App">
        <Paper className="content-paper">
          <header>
            <Typography variant="h1" color="primary">Course Recommender Bot</Typography>
            <Typography variant="body1" color="textSecondary">
              We recommend courses from a special dataset created by my team to decrease confusion of course optors and to select courses specially recommended from various platforms.
            </Typography>
          </header>
          <main>
            <Grid container justifyContent="center">
              <Grid item xs={12} md={8}>
                <img src="https://foundr.com/wp-content/uploads/2023/04/How-to-create-an-online-course.jpg.webp" alt="Course Recommender" className="center-img" />
              </Grid>
            </Grid>
          </main>
          <footer>
            <Typography variant="body2" color="textSecondary">&copy; 2024 Nihal's Course Recommender</Typography>
          </footer>
        </Paper>
        <Chatbot />
      </Container>
    </ThemeProvider>
  );
}

export default App;
