/**
 * @param  {String} name
 * @param  {String} url
 */

export const activationTemplate = (name, url) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">

<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
  <style>
    @media screen and (max-width: 630px) {
      .row {
        display: block;
        float: left;
      }

      .links {
        justify-content: flex-start !important;
      }
    }
  </style>
</head>

<body style="
      background: #fdfcfc;
      padding: 2.5rem 1rem;
      font-family: 'Lato', -apple-system, system-ui, BlinkMacSystemFont,
        'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    ">
  <table style="max-width: 800px; width: 100%; margin: auto">
    <p style="text-align: center; font-size: 16px; margin-bottom: 2rem">
      Welcome to <strong>BeWeddy- Free All-In-One Wedding Platform.</strong>
    </p>
  </table>
  <table style="
        max-width: 800px;
        width: 100%;
        border: 2px solid #dfdfdf;
        border-radius: 5px;
        background: #fff4f8;
        padding: 3rem 1rem 1.5rem 1rem;
        margin: auto;
      ">
    <tr style="margin-bottom: 1.5rem">
      <td style="font-size: 6px; line-height: 10px; padding: 0px 0px 0px 0px" valign="top" align="center">
        <img class="max-width" border="0" style="
              display: block;
              color: #000000;
              text-decoration: none;
              font-family: Helvetica, arial, sans-serif;
              font-size: 16px;
              max-width: 33% !important;
              width: 33%;
              height: auto !important;
            " alt="" data-proportionally-constrained="true" data-responsive="true"
          src="http://cdn.mcauto-images-production.sendgrid.net/87928f979ea43fec/6e3fc13c-cdc9-4f50-a73f-1e4fc2614f44/1004x388.png" />
      </td>
    </tr>
    <tr>
      <td align="center">
        <h2 style="font-weight: 500; margin-bottom: 0">
          Hi ${name} Confirm Your Email
        </h2>
      </td>
    </tr>
    <tr>
      <td align="center">
        <p style="font-weight: 400; line-height: 30px">
          You just created a new account at BeWeddy. 🎉<br />
          All you have to do now is activate it.
        </p>
      </td>
    </tr>
    <tr style="margin-bottom: 1.5rem">
      <td align="center">
        <a style="
              background: #f9d1de;
              color: #000;
              padding: 10px 25px;
              display: inline-block;
              border: 2px solid #000;
              border-radius: 5px;
              text-decoration: none;
              border-radius: 4px;
              margin-bottom: 30px;
              font-weight: 600;
            " href="${url}">Active Account</a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <p style="font-weight: 600; font-size: 13px; line-height: 30px">
          Need help, contact support at
          <a style="color: #333" href="mailto:beweddy1@gmail.com">beweddyport@gmail.com</a>
        </p>
      </td>
    </tr>
  </table>
  <table style="max-width: 800px; width: 100%; margin: 1.5rem auto;">
    <tr class='row'>
      <th align="left" style='font-weight: 500;'><strong>© 2021 BeWeddy.</strong> All rights reserved.</th>
      <th style='display:flex; justify-content: flex-end; font-weight: 300;' class="links">
        <p style="margin-left: 12px; display:block;">
          <a href="#">
            Terms & Conditions
          </a>
        </p>
        <p style="margin-left: 12px; display:block;">
          <a href="#">
            Contact us
          </a>
        </p>
      </th>
    </tr>
  </table>
</body>

</html>
  `;
};

/**
 * @param  {String} url
 */
export const passwordResetTemplate = url => {
  return `
  <body style='background: #eee; padding:20px; font-family: "Lato",-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI","Roboto","Helvetica Neue",Arial,sans-serif!important;'>
  <table style='max-width: 600px; width:100%; padding-bottom: 35px; margin: auto; background: #fff; text-align: center; border: 2px solid #eee; border-radius: 10px;'>
    <tr>
      <th> <h1 style='padding:5px 10px; text-align: center; color: #333; font-weight: 500;'>Password Reset</h1></th>
    </tr>
    <tr>
      <td>
        <p style='color: #333; max-width: 450px; margin: auto; margin-bottom: 15 px; font-weight: 300'>
          If you've lost your password or wish to reset it, <br>use the link below to get started
        </p>
    </td>
    </tr>
    <tr>
      <td>
        <a style='background: rgb(0, 116, 255); color:#fff; padding:10px 25px;display: inline-block; text-decoration: none; border-radius: 4px; margin: 25px 0; margin-bottom: 30px' href="${url}">Reset your password</a>
      </td>    
    </tr>
    <tr>
      <td>
        <p style='color: #888; max-width: 500px; margin: auto; margin-bottom: 25px; font-weight: 300'>
          If you did not request a password reset, you can safely ignore this email. Only a person with access to your email can reset your account password.
        </p>
    </td>
    </tr>
      
    </table>
</body>
  `;
};
