import smtplib
from email.message import EmailMessage


def sending(name,send_id):
    msg=EmailMessage()
    msg['Subject']='Greeting from Unikflo, '+ name
    msg['From']='unikflopumps@gmail.com'
    msg['To']=send_id
    msg.set_content("""Thank you for registering your interest at our website. We are attaching our Brochure with this email. Meanwhile, for any queries please feel free to contact via the below mentioned details.
                    
                    Contact Number : 7982358801, 9911558155

                    Regards
                    Team Unikflo""")

    with open('static/pdf/Brochure.pdf','rb') as f:
        file_data = f.read()
        file_name=f.name

    msg.add_attachment(file_data, maintype='application', subtype='octet-stream',filename=file_name)
    #msg.add_alternative("""\
    """
    <!DOCTYPE html>
    <html>
    <head><link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </head>
    <body>
            <div class="jumbotron">
                    <div class="container">
            <center><img src="logo.jpg" width="100" height="100"><h3>Unikflo Pumps</h3></center>
            </div>
            <br>
            <p class="lead"><strong>UNIKFLO PUMPS </strong>with over 21 years of experience in manufacturing to sales & servicing, we strive to provide our customer the best and technologically most advanced pumps. Our aim is to provide water to Indian people at most competitive price with best of quality and performance.<br>
                    <br>
                    Thank you for registering your interest at our website. We are attaching our Brochure with this email. Meanwhile, for any queries please feel free to contact via the below mentioned details.<br>
                    <strong>Contact Number :</strong> 7982358801, 9911558155<br> 
            </p>
            <br>
            <h4><strong>Regards</strong><br>
                    Team Unikflo
            </h4>
            </div>
    </body>
    </html>
    ,subtype='html')
    """
    with smtplib.SMTP_SSL('smtp.gmail.com',465) as smtp:
        smtp.login('unikflopumps@gmail.com','dqdxyctgnntpzukw')
        smtp.send_message(msg)

