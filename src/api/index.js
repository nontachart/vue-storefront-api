import { version } from '../../package.json';
import { Router } from 'express';
import order from './order';
import img from './img';
import catalog from './catalog'
import user from './user'
import stock from './stock'

export default ({ config, db }) => {
	let api = Router();

	// mount the catalog resource
	api.use('/catalog', catalog({ config, db }) )

	// mount the order reosource
	api.use('/order', order({ config, db }));
	
	// mount the user reosource
	api.use('/user', user({ config, db }));

	// mount the stock reosource
	api.use('/stock', stock({ config, db }));
	
	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	return api;
}
