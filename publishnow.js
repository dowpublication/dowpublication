   function sendmail(){
    
			var name = $('#Name').val();
			var email = $('#Sender').val();
			var country = $('#Country').val();
            var phone = $('#Phone').val();
            var title = $('#Title').val();
            var language = $('#Language').val();
            var about = $('#About').val();

			// var body = $('#body').val();

			var Body='Name: '+name+'<br>Email: '+email+'<br>Country: '+country+'<br>Phone: '+phone+'<br>Title: '+title+'<br>Language: '+language+'<br>About: '+about;
			//console.log(name, phone, email, message);

			Email.send({
        SecureToken:"f8eca5df-8c72-425a-a806-241f6ed1feb6",
				To: 'dowpublication.info@gmail.com',
				From: "webcontact459@gmail.com",
				Subject: "New message on Contact from "+name,
				Body: Body
			}).then(
				message =>{
					//console.log (message);
					if(message=='OK'){
					alert('Your Message has been send. Thank you for connecting with us.');
					}
					else{
						console.error (message);
						alert('There is error at sending message. ')
						
					}

				}
			);

		}