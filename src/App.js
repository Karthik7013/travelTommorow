import * as React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import img1 from "./assets/Travel_landing.svg";
import img2 from "./assets/Travel_insurance_coverage.svg";
import Form2 from "./Form2";
import Form1 from "./Form1";

export default function App() {
  const [quoteData, setQuoteData] = React.useState({});
  const [stage, setStage] = React.useState(false);

  console.log(quoteData,'quottt');



  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        md={6}
        sx={{
          backgroundImage: `url(${stage ? img1 : img2})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
      />
      <Grid
        item
        padding={2}
        xs={12}
        md={6}
        component={Paper}
        elevation={6}
        square
      >
        {!stage && <Form1 setStage={setStage} setQuoteData={setQuoteData}  />}
        {stage && <Form2  setStage={setStage} setQuoteData={setQuoteData} />}
      </Grid>
    </Grid>
  );
}
