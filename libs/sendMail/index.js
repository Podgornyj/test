const nodemailer = require('nodemailer');
const SMTPTransport = require('nodemailer-smtp-transport');

const transportEngine = new SMTPTransport({
  service: "Gmail",
  debug: true,
  auth: {
    user: 'podgornyjanton@gmail.com',
    pass: '******'
  }
});
const transport = nodemailer.createTransport(transportEngine);

module.exports = async function(options){
	let message = {
	    to: options.to,
	    subject: options.subject,
	    html: options.html
	};

	let transportResponse = await transport.sendMail(message);
}