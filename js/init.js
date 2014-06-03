

		$(document).ready(init);
		function init(){

			getCountry();
		}


		function addBeta(){
			if($('#form-email').val() =="" || $('#form-email').val().indexOf("@")==-1){

				alert("Please use a valid e-mail");
				return;
			}
			$('#sendBut').val("Applying...");
			$.ajax({
				"url":'/cloud/api/settings/',
				'data':{'email':$('#form-email').val(),
						'action':'addBeta'},
				complete:function(transport){

					$('#socialShare').fadeIn();
					$('#form-email').attr('placeholder',"Congrats!");
					$('#form-email').val('');
					$('#sendBut').val("Applied!");


				}
			})
		}


		function addFeedback(){

			if($('#form-message').val() =="" || $('#form-subject').val().indexOf("@")==-1){

				alert("Please enter a valid e-mail AND leave a message.");
				return;
			}


			$('#contBut').val("Sending...");
			$.ajax({
				"url":'/cloud/api/settings/',
				'data':{'email':$('#form-subject').val(),
				'name':$('#form-name').val(),
				'msg':$('#form-message').val(),
						'action':'addFeedback'},
				complete:function(transport){

					
					//$('#form-email').attr('placeholder',"Congrats!");
					//$('#form-email').val('');
					$('#contBut').val("Sent!");


				}
			})
		}


		function getCountry(){
			$.ajax({
				"url":'/cloud/api/settings/',
				'data':{
						'action':'getCountry'},
				complete:function(transport){

					
					//$('#form-email').attr('placeholder',"Congrats!");
					//$('#form-email').val('');
					//$('#contBut').val("Sent!");
					resp = $.parseJSON(transport.responseText);

					if(resp['status']=="success"){
						var country1="";
						country = resp['data']['country'];
						if(country.indexOf("United S") != -1){
							country1="your country";
							//$('.forCountry').html("UK ");
						}
						else{
							country1=country;
						}
						$('.whichCountry').html(country1);
					}

				}
			})

		}
