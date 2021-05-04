import express from 'express';

const app = express() // instanciranje aplikacije
const port = 3000 // port na kojem će web server slušati

app.get("/", (req, res) => {});

app.get("/ponudaPoslova", (req, res) => {
  res.json(data.ponudaPoslova);
});

app.get("/posao", (req, res) => {
    res.json(data.posao);
  });

  app.get("/izradaProfila", (req, res) => {
    res.json(data.izradaProfila);
  });
  
app.listen(port, () => console.log(`Port ${port}`));