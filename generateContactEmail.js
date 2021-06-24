

function generateContactEmail(body) {

      const { fname, message, email } = body;


  const mailData = {
    from: 'dwithersphotography@outlook.com',  // sender address
    to: email,
    subject: 'Photoshoot Confirmation!',
    text: 'That was easy!',
    html: ``,
  };

  return mailData
}

module.exports = generateContactEmail
