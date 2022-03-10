/**
 * @param  {String} name
 * @param  {String} message
 * @param  {String} url
 */
export const sendGiftCardEmail = (name, message, url) => {
  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <html
    data-editor-version="2"
    class="sg-campaigns"
    xmlns="http://www.w3.org/1999/xhtml"
  >
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
      />
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

    <body
      style="
        background: #fdfcfc;
        padding: 2.5rem 1rem;
        font-family: 'Lato', -apple-system, system-ui, BlinkMacSystemFont,
          'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
      "
    >
      <table
        style="
          max-width: 800px;
          width: 100%;
          border: 2px solid #dfdfdf;
          border-radius: 5px;
          background: #fff4f8;
          padding: 3rem 1rem 1.5rem 1rem;
          margin: auto;
        "
      >
        <tr style="margin-bottom: 1.5rem">
          <td
            style="font-size: 6px; line-height: 10px; padding: 0px 0px 0px 0px"
            valign="top"
            align="center"
          >
            <img
              class="max-width"
              border="0"
              style="
                display: block;
                color: #000000;
                text-decoration: none;
                font-family: Helvetica, arial, sans-serif;
                font-size: 16px;
                max-width: 33% !important;
                width: 26%;
                height: auto !important;
              "
              alt=""
              data-proportionally-constrained="true"
              data-responsive="true"
              src="http://cdn.mcauto-images-production.sendgrid.net/87928f979ea43fec/6e3fc13c-cdc9-4f50-a73f-1e4fc2614f44/1004x388.png"
            />
          </td>
        </tr>
        <tr>
          <td align="center">
            <h2 style="font-weight: 500">Congratulations! 🎉</h2>
          </td>
        </tr>
       <tr>
          <td align="center">
            <p style="font-weight: 600; font-size: 13px; line-height: 30px">
              <strong>From:</strong> ${name} <br />
              <strong>Note:</strong> "${message}"
            </p>
          </td>
        </tr>
        <tr style="margin-bottom: 1.5rem">
          <td align="center">
           <a
              style="
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
              "
              href="${url}"
              >Redeem</a
            >
          </td>
        </tr>
         <tr>
          <td align="center">
            <p style="font-size: 18px; font-weight: 400">
              <!-- Hi <strong>${name}</strong> Thank You For Choosing BeWeddy For -->
              <br />
              You Just Got a gift!! Redeem your gift card below and you will
              <br />
              receive an email within 24 hours to activate.
            </p>
          </td>
        </tr>
      </table>
      <table style="max-width: 800px; width: 100%; margin: 1.5rem auto">
        <tr class="row">
          <th align="left" style="font-weight: 500">
            <strong>© 2021 BeWeddy.</strong> All rights reserved.
          </th>
          <th
            style="display: flex; justify-content: flex-end; font-weight: 300"
            class="links"
          >
            <p style="margin-left: 12px; display: block">
              <a href="#"> Terms & Conditions </a>
            </p>
            <p style="margin-left: 12px; display: block">
              <a href="#"> Contact us </a>
            </p>
          </th>
        </tr>
      </table>
    </body>
  </html>`;
};

/**
 * @param  {String} name
 * @param  {String} url
 */

export const coupleActivationTemplate = (logo, url) => {
  return `
 <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <title></title>

  <style type="text/css">
    table,
    td {
      color: #000000;
    }
    
    a {
      color: #0000ee;
      text-decoration: underline;
    }
    
    @media only screen and (min-width: 520px) {
      .u-row {
        width: 500px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
      .u-row .u-col-100 {
        width: 500px !important;
      }
    }
    
    @media (max-width: 520px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }
      .u-row {
        width: calc(100% - 40px) !important;
      }
      .u-col {
        width: 100% !important;
      }
      .u-col>div {
        margin: 0 auto;
      }
    }
    
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
  </style>



  <!--[if !mso]><!-->
  <link href="https://fonts.googleapis.com/css?family=Lato:400,700&display=swap" rel="stylesheet" type="text/css">
  <!--<![endif]-->

</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->


          <div class="u-row-container" style="padding: 0px;background-color: #ffffff">
            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                  <div style="background-color: #ffffff;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="padding: 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                      <!--<![endif]-->

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td style="padding-right: 0px;padding-left: 0px;" align="center">

                                    <img align="center" border="0" src="${logo}" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 35%;max-width: 168px;"
                                      width="168" />

                                  </td>
                                </tr>
                              </table>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td><![endif]-->
                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>



          <div class="u-row-container" style="padding: 0px;background-color: #fce0ec">
            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #fce0ec;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #fce0ec;width: 500px;padding: 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                  <div style="background-color: #fce0ec;width: 100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="padding: 20px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                      <!--<![endif]-->

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: book antiqua,palatino; font-size: 24px;">
                                Welcome! 🎉
                              </h1>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <div style="line-height: 140%; text-align: center; word-wrap: break-word;">
                                <p style="font-size: 14px; line-height: 140%;">Watch our tutorial video to help set up your wedding website, collect online RSVP's and plan your big day!</p>
                              </div>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <div align="center">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:arial,helvetica,sans-serif;"><tr><td style="font-family:arial,helvetica,sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="https://www.beweddy.com/" style="height:37px; v-text-anchor:middle; width:156px;" arcsize="11%" stroke="f" fillcolor="#000000"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->
                                <a href="${url}" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #000000; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                  <span style="display:block;padding:10px 20px;line-height:120%;"><strong>Activate Your Email</strong></span>
                                </a>
                                <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                              </div>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td><![endif]-->
                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>



          <div class="u-row-container" style="padding: 0px;background-color: #ffffff">
            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #ffffff;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 1px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                  <div style="background-color: #ffffff;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="padding: 1px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                      <!--<![endif]-->

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:arial,helvetica,sans-serif;" align="left">

                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td style="padding-right: 0px;padding-left: 0px;" align="center">

                                    <img align="center" border="0" src="https://s3.amazonaws.com/unroll-images-production/projects%2F65513%2F1645973195587-BeWeddy+Symbol.png" alt="" title="" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 19px;"
                                      width="19" />

                                  </td>
                                </tr>
                              </table>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:4px;font-family:arial,helvetica,sans-serif;" align="left">

                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td style="padding-right: 0px; padding-left: 0px;" align="center">
                                    <a href="https://www.youtube.com/watch?v=LmMdkdKoJJQ&list=PLMs_672Fj-ezru8jNJ-n3S7Um6vmvfDfc&index=1" target="_blank">
                                      <img align="center" border="0" src="https://s3.amazonaws.com/unroll-images-production/projects%2F65513%2F1646233598605-video_youtube_LmMdkdKoJJQ.jpg" alt="Video" title="Video" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;width: 100%;max-width: 492px;"
                                        width="492" class="fullwidth">
                                    </a>
                                  </td>
                                </tr>
                              </table>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td><![endif]-->
                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>



          <div class="u-row-container" style="padding: 0px;background-color: #fce0ec">
            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #fce0ec;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #ffffff;width: 500px;padding: 15px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                  <div style="background-color: #ffffff;width: 100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="padding: 15px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                      <!--<![endif]-->

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <div style="line-height: 140%; text-align: center; word-wrap: break-word;">
                                <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;">We're always here to support you. If you have any questions.</span></p>
                                <p style="font-size: 14px; line-height: 140%;"><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;">Feel free to email us <strong><a rel="noopener" href="mailto:nate@beweddy.com?subject=Venue%20Tutorial%20Video&body=Watch%20our%20tutorial%20video" target="_blank">nate@beweddy.com</a></strong> or call us: <strong>+8019197212</strong></span></p>
                              </div>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <h1 style="margin: 0px; line-height: 140%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: book antiqua,palatino; font-size: 18px;">
                                Let's Eat, Drink &amp; Celebrate!
                              </h1>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:15px;font-family:arial,helvetica,sans-serif;" align="left">

                              <div align="center">
                                <div style="display: table; max-width:73px;">
                                  <!--[if (mso)|(IE)]><table width="73" cellpadding="0" cellspacing="0" border="0"><tr><td style="border-collapse:collapse;" align="center"><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse; mso-table-lspace: 0pt;mso-table-rspace: 0pt; width:73px;"><tr><![endif]-->


                                  <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 5px;" valign="top"><![endif]-->
                                  <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 5px">
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                          <a href="https://www.facebook.com/Beweddy/" title="Facebook" target="_blank">
                                            <img src="https://cdn.tools.unlayer.com/social/icons/circle/facebook.png" alt="Facebook" title="Facebook" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if (mso)|(IE)]></td><![endif]-->

                                  <!--[if (mso)|(IE)]><td width="32" style="width:32px; padding-right: 0px;" valign="top"><![endif]-->
                                  <table align="left" border="0" cellspacing="0" cellpadding="0" width="32" height="32" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;margin-right: 0px">
                                    <tbody>
                                      <tr style="vertical-align: top">
                                        <td align="left" valign="middle" style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
                                          <a href="https://www.youtube.com/channel/UCpcLuRWKOhaS2FEqqtPx7rQ" title="YouTube" target="_blank">
                                            <img src="https://cdn.tools.unlayer.com/social/icons/circle/youtube.png" alt="YouTube" title="YouTube" width="32" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: block !important;border: none;height: auto;float: none;max-width: 32px !important">
                                          </a>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                  <!--[if (mso)|(IE)]></td><![endif]-->


                                  <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
                                </div>
                              </div>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td><![endif]-->
                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>



          <div class="u-row-container" style="padding: 0px;background-color: #fce0ec">
            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #fce0ec;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="500" style="background-color: #fce0ec;width: 500px;padding: 15px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                  <div style="background-color: #fce0ec;width: 100% !important;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="padding: 15px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
                      <!--<![endif]-->

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <div style="line-height: 140%; text-align: center; word-wrap: break-word;">
                                <p dir="ltr" style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;">Powered by &copy;2022 <a rel="noopener" href="https://www.beweddy.com/" target="_blank"><strong>BeWeddy.com</strong></a>. All rights reserved. </span></p>
                                <p dir="ltr" style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-family: Lato, sans-serif; font-size: 14px; line-height: 19.6px;">You can <strong><span style="text-decoration: underline; font-size: 14px; line-height: 19.6px;">unsubscribe</span></strong> all you want,
                                  but you&rsquo;ll always be in our heart.</span>
                                </p>
                                <p dir="ltr" style="font-size: 14px; line-height: 140%; text-align: center;">&nbsp;</p>
                              </div>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td><![endif]-->
                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>


          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>
  `;
};

/**
 * @param  {String} name
 * @param  {String} url
 */

export const venueActivationTemplate = (url) => {
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
  <!-- <table style="max-width: 800px; width: 100%; margin: auto">
    <p style="text-align: center; font-size: 16px; margin-bottom: 2rem">
      Welcome to <strong>BeWeddy- Free All-In-One Wedding Platform.</strong>
    </p>
  </table> -->
  <table style="
        max-width: 800px;
        width: 100%;
        border: 2px solid #dfdfdf;
        border-radius: 5px;
        background: #fff4f8;
        padding: 3rem 1rem 1.5rem 1rem;
        margin: auto;
      ">
    <!-- <tr style="margin-bottom: 1.5rem">
      <td style="font-size: 6px; line-height: 10px; padding: 0px 0px 0px 0px" valign="top" align="center">
        <img class="max-width" border="0" style="
              display: block;
              color: #000000;
              text-decoration: none;
              font-family: Helvetica, arial, sans-serif;
              font-size: 16px;
              max-width: 33% !important;
              width: 26%;
              height: auto !important;
            " alt="" data-proportionally-constrained="true" data-responsive="true"
          src="http://cdn.mcauto-images-production.sendgrid.net/87928f979ea43fec/6e3fc13c-cdc9-4f50-a73f-1e4fc2614f44/1004x388.png" />
      </td>
    </tr>
    -->
    <tr>
      <td align="center">
        <h2 style="font-weight: 500;">
          Congratulations! 🎉
        </h2>
      </td>
    </tr>
    <tr>
      <td align="center">
        <p style="font-size: 18px; font-weight: 400;">
          Thank you for partnering with BeWeddy. Activate Account and our team will contact you in the next 24 hours. We will help onboard the software to your website. Cheers!
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
            " href="${url}">Activate Account</a>
      </td>
    </tr>
    <tr>
      <td align="center">
        <p style="font-weight: 600; font-size: 13px; line-height: 30px">
          <!-- Need help, contact support at
          <a style="color: #333" href="mailto:beweddy1@gmail.com">nate@beweddy.com</a> -->
          Any Questions Call Or Text (801) 919-7212
        </p>
      </td>
    </tr>
  </table>
  <!-- <table style="max-width: 800px; width: 100%; margin: 1.5rem auto;">
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
  </table> -->
</body>

</html>
  `;
};

export const sendEmailInvitesTemplate = (coupleName, image, message) => `
<html>
    <head>
      <title>Beweddy - Email Invites</title>
      <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Alice&family=Inter:wght@100;200;300;400;500;600;700&family=Poppins:wght@700&display=swap'
            rel='stylesheet'
          />
      <style>
      * {
          box-sizing: border-box;
        }
        body {
            font-family: 'inter';
            box-sizing: border-box;
            background: #f4f4f4;
        }
        .root {
          background: #f4f4f4;
          width: 100%;
          padding: 4rem;
        }
        .container{
          max-width: 1018px;
          margin: 0 auto;
          width: 100%;
          padding: 5rem 6rem;
          background: #fff;
        }
        .header{
          width: 100%;
          display: grid;
          grid-template-columns: repeat(12, minmax(0, 1fr));
          gap: 1rem;
        }
        .logo-container {
          grid-column: span 4 / span 4;
        }
        .logo-container img {
          width: 100px;
          height: 40px;
        }
        .header-middle {
           grid-column: span 6 / span 6;
        }
        .header-middle h1 {
           display: flex;
           align-items: center;
           text-align: center;
           font-size: 16px;
            font-family: 'Alice';
           line-height: 1.25rem;
        }
        .subtitle {
            margin-top: 3rem;
            background: #FCE0EB;
            padding: 1rem .5rem;
            text-align: center;
            border-radius: 4px;
            font-size: 16px;
        }
        .banner-container {
            margin: 1.5rem 0;
        }
        .banner-container img {
            height: auto;
            max-width: 100%;
            border-radius: 4px;
        }
        .heading h1 {
            font-size: 2.25rem;
            margin: 2.5rem 0;
            font-family: 'Alice';
            text-align: center;
            line-height: 2.5rem;
        }
        .divider {
            width: 256px;
            height: 5px;
            margin: 0 auto;
            background: #FCE0EB;
            margin-top: -0.5rem;
        }
        .message {
            max-width: 600px;
            width: 100%;
            margin: 3rem auto 0 auto;
        }
        @media screen and (max-width: 768px){
          .root {
            padding: 2rem;
          }
          .container {
            padding: 4.5rem;
          }
            .header{
                 /*grid-template-columns: repeat(1, minmax(0, 1fr));*/
                 gap: .3rem;
            }
            .heading h1 {
            font-size: 20px;
            margin: 2rem 0;
            font-family: 'Alice';
            text-align: center;
            line-height: 2rem;
            }
            .subtitle {
                font-size: 12px;
            }
            .divider {
            width: 156px;
            height: 3px;
            margin-top: -1rem;
        }
        }
        @media screen and (max-width: 500px){
          .root{
            padding: 1rem;
          }
          .container {
            padding: 1rem;
          }
             .header{
                 grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
                 gap: .3rem;
            }
        }
      </style>
    </head>
    <body>
    <div class='root'>
      <div class="container">
        <div class="header">
            <div class="p-5 logo-container">
            <img src="https://beweddy-delta.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" alt='logo' />
            </div>
            <div class="header-middle">
                <h1>Let’s Eat, Drink & BeWeddy. 🎉</h1>
            </div>
        </div>
        <div class="subtitle">
            <span>You have Received an Email Invitaion for ${coupleName}’s Wedding. 💯
            </span>
        </div>
        <div class="banner-container">
            <img
              src="${image}"
            alt=""

            />
        </div>
        <div class="heading">
            <h1>
                You’re Invited to Our Wedding
            </h1>
            <div class="divider"></div>
        </div>
        <div class="message">
        ${message}
        </div>
      </div>
      </div>
    </body>
    </html>
`;

export const passwordResetTemplate = ({
  name,
  url,
}) => `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
  <!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!-->
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <!--<![endif]-->
  <title></title>

  <style type="text/css">
    table,
    td {
      color: #000000;
    }
    
    a {
      color: #0000ee;
      text-decoration: underline;
    }
    
    @media (max-width: 480px) {
      #u_content_image_2 .v-src-width {
        width: auto !important;
      }
      #u_content_image_2 .v-src-max-width {
        max-width: 46% !important;
      }
      #u_content_text_6 .v-text-align {
        text-align: center !important;
      }
    }
    
    @media only screen and (min-width: 520px) {
      .u-row {
        width: 500px !important;
      }
      .u-row .u-col {
        vertical-align: top;
      }
      .u-row .u-col-100 {
        width: 500px !important;
      }
    }
    
    @media (max-width: 520px) {
      .u-row-container {
        max-width: 100% !important;
        padding-left: 0px !important;
        padding-right: 0px !important;
      }
      .u-row .u-col {
        min-width: 320px !important;
        max-width: 100% !important;
        display: block !important;
      }
      .u-row {
        width: calc(100% - 40px) !important;
      }
      .u-col {
        width: 100% !important;
      }
      .u-col>div {
        margin: 0 auto;
      }
    }
    
    body {
      margin: 0;
      padding: 0;
    }
    
    table,
    tr,
    td {
      vertical-align: top;
      border-collapse: collapse;
    }
    
    p {
      margin: 0;
    }
    
    .ie-container table,
    .mso-container table {
      table-layout: fixed;
    }
    
    * {
      line-height: inherit;
    }
    
    a[x-apple-data-detectors='true'] {
      color: inherit !important;
      text-decoration: none !important;
    }
  </style>



</head>

<body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #e7e7e7;"><![endif]-->


          <div class="u-row-container" style="padding: 0px;background-color: #fce3eb">
            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #fce3eb;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                  <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                      <!--<![endif]-->

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 50px solid #fce3eb;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                <tbody>
                                  <tr style="vertical-align: top">
                                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                      <span>&#160;</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td><![endif]-->
                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>



          <div class="u-row-container" style="padding: 0px;background-color: #fce3eb">
            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #fce3eb;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: #ffffff;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="494" style="width: 494px;padding: 30px;border-top: 3px solid #000000;border-left: 3px solid #000000;border-right: 3px solid #000000;border-bottom: 3px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                  <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="padding: 30px;border-top: 3px solid #000000;border-left: 3px solid #000000;border-right: 3px solid #000000;border-bottom: 3px solid #000000;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                      <!--<![endif]-->

                      <table id="u_content_image_2" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                <tr>
                                  <td class="v-text-align" style="padding-right: 0px;padding-left: 0px;" align="center">

                                    <img align="center" border="0" src="https://s3.amazonaws.com/unroll-images-production/projects%2F62653%2F1644167244721-logo.png" alt="Beweddy" title="Beweddy" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 34%;max-width: 163.2px;"
                                      width="163.2" class="v-src-width v-src-max-width" />

                                  </td>
                                </tr>
                              </table>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <div class="v-text-align" style="line-height: 140%; text-align: left; word-wrap: break-word;">
                                <p style="font-size: 14px; line-height: 140%; text-align: center;">Hi <strong>${name}</strong>, <br />Here are your password reset instructions.</p>
                              </div>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="35%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 3px solid #ffb1b6;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                <tbody>
                                  <tr style="vertical-align: top">
                                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                      <span>&#160;</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <div class="v-text-align" style="line-height: 140%; text-align: left; word-wrap: break-word;">
                                <p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 12px; line-height: 16.8px;">A request to reset your BeWeddy password has been made. If you did not make this request, simply ignore this email. If you did make this request, please reset your password:</span></p>
                              </div>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <div class="v-text-align" align="center">
                                <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:arial,helvetica,sans-serif;"><tr><td class="v-text-align" style="font-family:arial,helvetica,sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:37px; v-text-anchor:middle; width:117px;" arcsize="11%" stroke="f" fillcolor="#000000"><w:anchorlock/><center style="color:#FFFFFF;font-family:arial,helvetica,sans-serif;"><![endif]-->
                                <a href="${url}" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:arial,helvetica,sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFFFFF; background-color: #000000; border-radius: 4px;-webkit-border-radius: 4px; -moz-border-radius: 4px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;">
                                  <span style="display:block;padding:10px 40px;line-height:120%;">Reset</span>
                                </a>
                                <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
                              </div>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <table id="u_content_text_6" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <div class="v-text-align" style="line-height: 140%; text-align: left; word-wrap: break-word;">
                                <p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 14px; line-height: 19.6px;">Thank You. Team BeWeddy</span><br /><span style="font-size: 14px; line-height: 19.6px;"><a rel="noopener" href="https://www.beweddy.com" target="_blank">www.beweddy.com</a></span></p>
                              </div>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td><![endif]-->
                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>



          <div class="u-row-container" style="padding: 0px;background-color: #fce3eb">
            <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 500px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
              <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
                <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: #fce3eb;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:500px;"><tr style="background-color: transparent;"><![endif]-->

                <!--[if (mso)|(IE)]><td align="center" width="500" style="width: 500px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;" valign="top"><![endif]-->
                <div class="u-col u-col-100" style="max-width: 320px;min-width: 500px;display: table-cell;vertical-align: top;">
                  <div style="width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                    <!--[if (!mso)&(!IE)]><!-->
                    <div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                      <!--<![endif]-->

                      <table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
                        <tbody>
                          <tr>
                            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:arial,helvetica,sans-serif;" align="left">

                              <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 50px solid #fce3eb;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                <tbody>
                                  <tr style="vertical-align: top">
                                    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                      <span>&#160;</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>

                            </td>
                          </tr>
                        </tbody>
                      </table>

                      <!--[if (!mso)&(!IE)]><!-->
                    </div>
                    <!--<![endif]-->
                  </div>
                </div>
                <!--[if (mso)|(IE)]></td><![endif]-->
                <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
              </div>
            </div>
          </div>


          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
        </td>
      </tr>
    </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>`;
