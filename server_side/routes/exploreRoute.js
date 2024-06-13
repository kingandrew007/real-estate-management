import express from 'express';
import postData from '../controller/listingProperty.js';
import postSignUp from '../controller/signupController.js';
import login from '../controller/Login..js';
import postContact from '../controller/contact.js';

const expRoute = express.Router();
// expRoute.route('/explore').get()

expRoute.route('/listing-property').post(postData);

expRoute.route('/signup').post(postSignUp);

expRoute.route('/login-').post(login);
expRoute.route('/contact').post(postContact);

export default expRoute;