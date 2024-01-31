import emailjs from '@emailjs/browser';

import {
  SEND_EMAIL,  
  updateError,
  updateSuccess,
  updateForm
} from '../actions/mail';

const mailMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SEND_EMAIL: {
      // '#form' is the id of the html => https://www.emailjs.com/docs/sdk/send-form/
      emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, '#form', process.env.REACT_APP_YOUR_PUBLIC_KEY)
      // eslint-disable-next-line no-unused-vars
      .then((result) => {
        store.dispatch(updateForm('name', ''));
        store.dispatch(updateForm('email', ''));
        store.dispatch(updateForm('message', ''));
        store.dispatch(updateSuccess(true));
        setTimeout(() => {
          store.dispatch(updateSuccess(false));
        }, 10000);
      // eslint-disable-next-line no-unused-vars
      }, (error) => {
        store.dispatch(updateError('mail_error'));
        setTimeout(() => {
          store.dispatch(updateError(''));
        }, 10000);
      });

      next(action);
      break;
    }

    default:
      // we pass the action to the next one (next middleware or reducer)
      next(action);
  }
};

export default mailMiddleware;