import emailjs from '@emailjs/browser';

import {
  SEND_EMAIL,
} from '../actions/mail';


const mailMiddleware = () => (next) => (action) => {
  switch (action.type) {
    case SEND_EMAIL: {
      // '#form' is the id of the html => https://www.emailjs.com/docs/sdk/send-form/
      emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, '#form', process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      next(action);
      break;
    }

    default:
      // on passe l'action au suivant (middleware suivant ou reducer)
      next(action);
  }
};

export default mailMiddleware;