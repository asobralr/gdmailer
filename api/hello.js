const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("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");

module.exports = (req, res) => {
  const dest = "asobralr@gmail.com"; //data.dest;
  const msg = {
    to: dest,
    from: { name: "Brainbo App", email: "welcome@mycoocoon.app" },
    fromname: "Brainbo App",
    subject: "Welcome to brainbo meditation app",
    text: "Welcome to mycoocoon! Enjoy your personal meditation and unleash the power of light and color to reveal your current needs. Just use your intuition and let mycoocoon do the magic.",
  };
  sgMail.send(msg).then(
    () => {
      console.log("Sent");
      res.json({
        hola: "mundo",
      });
    },
    (error) => {
      console.error(error);
      if (error.response) {
        console.error(error.response.body);
      }
    }
  );
};
