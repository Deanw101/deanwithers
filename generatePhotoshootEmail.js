

function generatePhotoshootEmail(body) {

      const { fname, name, lname, root_phone, email, streetNum, city,
      state, zip, photoDateTime, date, time, photoshootLengh, retouchPrice, photosPrice,
      peoplePrice, photoshootTotal, eventLength, eventTotal } = body;


  const mailData = {
    from: 'dwithersphotography@outlook.com',  // sender address
    to: email,
    subject: 'Photoshoot Confirmation!',
    text: 'That was easy!',
    html: `



    <!DOCTYPE HTML PUBLIC>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>

    	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1.0">
    	<meta name="x-apple-disable-message-reformatting">
    	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<title></title>

    	<style type="text/css">

    	.receipt {
    		background-color: #fff;
    		width: 25rem;
    		position: relative;
    		padding: 1rem;
    	}

    	.row {
    		display: -ms-flexbox;
    	display: flex;
    	-ms-flex-wrap: wrap;
    	flex-wrap: wrap;
    	margin-right: -15px;
    	margin-left: -15px;
    	justify-content: center;
    	}

    	.rowi {
    		min-width: 320px;
    		max-width: 640px;
    		background-color: white
    		display: -ms-flexbox;
    	display: flex;
    	-ms-flex-wrap: wrap;
    	flex-wrap: wrap;
    	margin-right: -15px;
    	margin-left: -15px;
    	justify-content: center;
    	margin-bottom: 50px;
    	}



    	.receipt__header {
    		text-align: center;
    	}



    	.receipt__date {
    		font-size: 0.8rem;
    		color: #666;
    		margin: 0.5rem 0 1rem;
    	}

    	.receipt__list {
    		margin: 2rem 0 1rem;
    		padding: 0 1rem;
    	}

    	.receipt__list-row {
    		display: flex;
    		justify-content: space-between;
    		margin: 1rem 0;
    		position: relative;
    	}

    	.receipt__list-row:after {
    		content: '';
    		display: block;
    		border-bottom: 1px dotted rgba(0,0,0,0.15);
    		width: 100%;
    		height: 100%;
    		position: absolute;
    		top: -0.25rem;
    		z-index: 1
    	}

    	.receipt__item {
    		background-color: #fff;
    		z-index: 2;
    		padding: 0 0.15rem 0 0;
    		color: #1f1f1f;
    	}

    	.receipt__cost {
    		margin: 0;
    		padding: 0 0 0 0.15rem;
    		background-color: #fff;
    		z-index: 2;
    		color: #1f1f1f;
    	}

    	.receipt__list-row--total {
    		border-top: 1px solid #264653;
    		padding: 1.5rem 0 0;
    		margin: 1.5rem 0 0;
    		font-weight: 700;
    	}


    		a { color: #0000ee; text-decoration: underline; } @media (max-width: 480px) { #u_content_menu_1 .v-padding { padding: 5px 35px !important; } #u_content_menu_2 .v-padding { padding: 5px 38px 5px 32px !important; } #u_content_menu_4 .v-padding { padding: 5px 40px 5px 50px !important; } #u_content_menu_3 .v-padding { padding: 5px 40px 5px 55px !important; } }
    		@media only screen and (min-width: 660px) {
    			.u-row {
    				width: 640px !important;
    			}
    			.u-row .u-col {
    				vertical-align: top;
    			}

    			.u-row .u-col-50 {
    				width: 320px !important;
    			}

    			.u-row .u-col-100 {
    				width: 640px !important;
    			}

    		}

    		@media (max-width: 660px) {
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
    			.u-col > div {
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

    		@media (max-width: 480px) {
    			.hide-mobile {
    				display: none !important;
    				max-height: 0px;
    				overflow: hidden;
    			}

    		}
    	</style>



    </head>

    <body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #e7e7e7">

    	<table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #e7e7e7;width:100%" cellpadding="0" cellspacing="0">
    		<tbody>
    			<tr style="vertical-align: top">
    				<td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">



    					<div class="u-row-container" style="padding: 20px 0px 0px;background-color: transparent">
    						<div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
    							<div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
    								<div class="u-col u-col-50" style="max-width: 320px;min-width: 320px;display: table-cell;vertical-align: top;">
    									<div style="width: 100% !important;">
    										<div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->

    											<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    												<tbody>
    													<tr>
    														<td style="overflow-wrap:break-word;word-break:break-word;padding:20px 20px 15px;font-family:arial,helvetica,sans-serif;" align="left">

    															<table width="100%" cellpadding="0" cellspacing="0" border="0">
    																<tr>
    																	<td style="padding-right: 0px;padding-left: 0px;" align="left">

    																		<img align="left" border="0" src="https://i.ibb.co/SfC74pW/logo-1.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 50px; filter:invert(1);" width="50px"/>

    																	</td>
    																</tr>
    															</table>

    														</td>
    													</tr>
    												</tbody>
    											</table>

    										</div>
    									</div>
    								</div>
    								<div class="u-col u-col-50" style="max-width: 320px;min-width: 320px;display: table-cell;vertical-align: top;">
    									<div style="width: 100% !important;">
    										<div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">

    											<table class="hide-mobile" style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    												<tbody>
    													<tr>
    														<td style="overflow-wrap:break-word;word-break:break-word;padding:25px 20px 15px;font-family:arial,helvetica,sans-serif;" align="left">

    															<div style="color: #000000; line-height: 140%; text-align: left; word-wrap: break-word;padding-top:10px;">
    																<p style="font-size: 14px; line-height: 140%; text-align: right;"><span style="font-size: 16px; line-height: 22.4px; padding-top:35%; font-weight:600; color: #4a4a4a">${fname} ${lname}</span></p>
    															</div>

    														</td>
    													</tr>
    												</tbody>
    											</table>

    										</div>
    									</div>
    								</div>

    							</div>
    						</div>
    					</div>



    					<div class="u-row-container" style="padding: 0px;background-color: transparent">
    						<div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 640px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #ffffff;">
    							<div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
    								<div class="u-col u-col-100" style="max-width: 320px;min-width: 640px;display: table-cell;vertical-align: top;">
    									<div style="width: 100% !important;">
    										<div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->

    											<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    												<tbody>
    													<tr>
    														<td style="overflow-wrap:break-word;word-break:break-word;padding:0px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">

    															<table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 3px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
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
    														<td style="overflow-wrap:break-word;word-break:break-word;padding:40px 10px 20px;font-family:arial,helvetica,sans-serif;" align="left">

    															<table width="100%" cellpadding="0" cellspacing="0" border="0">
    																<tr>
    																	<td style="padding-right: 0px;padding-left: 0px;" align="center">

    																		<img align="center" border="0" src="https://img.bayengage.com/assets/1613615720006-tick (1).jpg" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 106px;" width="106"/>

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
    														<td style="overflow-wrap:break-word;word-break:break-word;padding:20px 10px 10px;font-family:arial,helvetica,sans-serif;" align="left">

    															<div style="color: #000000; line-height: 140%; text-align: left; word-wrap: break-word;">
    																<p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 18px; line-height: 25.2px; color: #4a4a4a;"><strong>${fname}, your photoshoot has </strong></span></p>
    																<p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 18px; line-height: 25.2px; color: #4a4a4a;"><strong>been confirmed!</strong></span></p>
    															</div>

    														</td>
    													</tr>
    												</tbody>
    											</table>

    											<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    												<tbody>
    													<tr>
    														<td style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 20px;font-family:arial,helvetica,sans-serif;" align="left">

    															<div style="color: #000000; line-height: 140%; text-align: left; word-wrap: break-word;">
    																<p style="font-size: 14px; line-height: 140%; text-align: center;"><span style="font-size: 12px; line-height: 16.8px;"><strong><span style="color: #4a4a4a; line-height: 16.8px; font-size: 12px;">Please be prepared to pay your package's price in full upon shoot date.</span></strong></span></p>
    															</div>

    														</td>
    													</tr>
    												</tbody>
    											</table>

    										</div>
    									</div>
    								</div>

    							</div>
    						</div>
    					</div>

    					<table style="font-family:arial,helvetica,sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
    						<tbody>
    							<tr>
    								<td style="overflow-wrap:break-word;word-break:break-word;padding:20px 20px 40px;font-family:arial,helvetica,sans-serif;" align="left">

    									<div style="color: #000000; line-height: 140%; text-align: left; word-wrap: break-word;">
    										<p style="font-size: 15px; line-height: 140%; text-align: center;"><span style="font-size: 14px; line-height: 16.8px;"><strong><span style="color: #4a4a4a; line-height: 16.8px; font-size: 14px;"><b>Name:</b> ${fname} ${lname}</span></strong></span></p>
    										<br>
    										<p style="font-size: 15px; line-height: 140%; text-align: center;"><span style="font-size: 14px; line-height: 16.8px;"><strong><span style="color: #4a4a4a; line-height: 16.8px; font-size: 14px;"><b>Email:</b> ${email}</span></strong></span></p>
    										<br>
    										<p style="font-size: 15px; line-height: 140%; text-align: center;"><span style="font-size: 14px; line-height: 16.8px;"><strong><span style="color: #4a4a4a; line-height: 16.8px; font-size: 14px;"><b>Photoshoot location:</b> ${streetNum} ${city}, ${state} ${zip}</span></strong></span></p>
    										<br>
    										<p style="font-size: 15px; line-height: 140%; text-align: center;"><span style="font-size: 14px; line-height: 16.8px;"><strong><span style="color: #4a4a4a; line-height: 16.8px; font-size: 14px;"><b>Date & Time:</b> ${photoDateTime}</span></strong></span></p>
    										<br>
    										<br>
    										<p style="font-size: 15px; line-height: 140%; text-align: center;"><span style="font-size: 14px; line-height: 16.8px;"><strong><span style="color: #4a4a4a; line-height: 16.8px; font-size: 14px;"><b>Photoshoot Lengh:</b> $${photoshootLengh}.00</span></strong></span></p>
    										
    										<p style="font-size: 15px; line-height: 140%; text-align: center;"><span style="font-size: 14px; line-height: 16.8px;"><strong><span style="color: #4a4a4a; line-height: 16.8px; font-size: 14px;"><b>Digital Retouching:</b> $${retouchPrice}.00</span></strong></span></p>

    										<p style="font-size: 15px; line-height: 140%; text-align: center;"><span style="font-size: 14px; line-height: 16.8px;"><strong><span style="color: #4a4a4a; line-height: 16.8px; font-size: 14px;"><b># of Digital Photos:</b> $${photosPrice}.00</span></strong></span></p>

    										<p style="font-size: 15px; line-height: 140%; text-align: center;"><span style="font-size: 14px; line-height: 16.8px;"><strong><span style="color: #4a4a4a; line-height: 16.8px; font-size: 14px;"><b># of People:</b> $${peoplePrice}.00</span></strong></span></p>

    										<p style="font-size: 15px; line-height: 140%; text-align: center;"><span style="font-size: 14px; line-height: 16.8px;"><strong><span style="color: #4a4a4a; line-height: 16.8px; font-size: 14px;"><b>Travel Fee:</b> $85.00</span></strong></span></p>

    										<br>
    										<p style="font-size: 15px; line-height: 140%; text-align: center;"><span style="font-size: 14px; line-height: 16.8px;"><strong><span style="color: #4a4a4a; line-height: 16.8px; font-size: 14px;"><b>Total:</b> $${photoshootTotal}.00</span></strong></span></p>

<br>
    										<p style="font-size: 14px; line-height: 140%; text-align: center;">This email was automatically sent.<span style="color: #000000; font-size: 14px; line-height: 19.6px;"><span style="font-size: 14px; line-height: 19.6px;"></span> </span></p>
    										<p style="font-size: 14px; line-height: 140%; text-align: center;">This inbox is monitored, <b>feel free</b> reply to email with any questions or concerns.</p>
    									</div>

    								</td>
    							</tr>
    						</tbody>
    					</table>



    </body>

    </html>



  `,
  };

  return mailData
}

module.exports = generatePhotoshootEmail
