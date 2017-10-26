
var nodemailer = require('nodemailer');

// sendEmail= function(account, params) {

    // create reusable transporter object using the default SMTP transport
    var smtpTransport = nodemailer.createTransport({
        service: 'Gmail', // sets automatically host, port and connection security settings
        auth: {
            user: 'dimple.balchandani@vectoscalar.com', 
            pass: 'dimple_vecto'  
        }
    });

    // var toEmail = params.to[0];
    // for (var i = 1; i < params.to.length; i++) {
    //     toEmail += ', ' + params.to[i];
    // }

    // setup email data with unicode symbols
    var mailOptions = {
        from: 'dimple.balchandani@vectoscalar.com', // sender address
        to: 'nikhil@vectoscalar.co', // list of receivers
        subject: 'params subject', // Subject line
        text: 'params text', // plain text body
        // html: params.html, // html body
        // attachments: params.attachments
    };

    // send mail with defined transport object
    smtpTransport.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error while sending mail: ' + error);
        } else {
            console.log('Message sent: %s', info.messageId);
        }
        smtpTransport.close(); // shut down the connection pool, no more messages.
    });
// }
