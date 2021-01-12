const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.use(express.urlencoded({ extended: false }));

app.post('/bookings', async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json(req.body);
  } catch (e) {
    console.log(e);
    res.status(400).json({err: e.message});
  }
});

app.use(express.static('public'))


app.listen(port, () => {
  console.log(`Server OK..`)
})
