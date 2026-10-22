const exrpess = require('express');
const morgan = require('morgan');

const app = exrpess();

app.use(morgan('dev'));

const port = Number(process.env.PORT) || 3000;
app.get('/', (_req, res) => {
  res.json({ service: 'dockervsion', status: 'hello' });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
