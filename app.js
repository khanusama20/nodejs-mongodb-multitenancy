// initialize your app
const express = require('express');
const bodyParser = require('body-parser');

require('./DBConnection');
require('./MerchantDB');
const {createUser, updateUser, getUsers} = require('./controllers/UserController');

const app = express();

app.use((req, res, next) => {
	bodyParser.json({
		limit: '50mb',
		verify: (req, res, buf, encoding) => {
			req.rawBody = buf.toString();
		}
	})(req, res, err => {
		if (err) {
			res.status(400).send('Bad body Request');
			return;
		}
		next();
	});
});

app.use(bodyParser.urlencoded({
	limit: '50mb',
	extended: true
}));

app.use((req, res, next) => {
  console.log("req.params.db_name : ", req.headers['merchant-name']);
  global.dbName = req.headers['merchant-name'];
  next();
});

app.post('/createUser', createUser);
app.put('/updateUser', updateUser);
app.get('/getUsers', getUsers);

const PORT = 3020;

app.listen(PORT, () => {
  console.log(`Server is started on http://localhost:${PORT}`);
}); 