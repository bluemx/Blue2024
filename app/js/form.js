setTimeout(() => {
	var selectedLanguage = $('#HfLanguage').val();
      
	$('.ClosePopupServices').click(function (event) {
	  event.preventDefault();
	  $('#PopupServices').hide();
	});
	
	$('#DdlService').click(function () {
	  $('#PopupServices').show();
	});
	
	$("input[name='ChkBxLstServices']").click(function () {
	  if ($("input[name='ChkBxLstServices']:checked").length === 0) {
		if ($('#HfLanguage').val() == 'es') {
		  $('#DdlService').html('Seleccione');
		} else {
		  $('#DdlService').html('Select');
		}
		if ($('#ContactForm').hasClass('was-validated')) {
		  $('#DdlService').removeClass('is-valid-select').addClass('is-invalid-select');
		}
	  } else if ($("input[name='ChkBxLstServices']:checked").length === 1) {
		if ($('#HfLanguage').val() == 'es') {
		  $('#DdlService').html($(this).attr('data-service'));
		} else {
		  $('#DdlService').html($(this).attr('data-service-l'));
		}
		if ($('#ContactForm').hasClass('was-validated')) {
		  $('#DdlService').removeClass('is-invalid-select').addClass('is-valid-select');
		}
	  } else {
		if ($('#HfLanguage').val() == 'es') {
		  $('#DdlService').html($("input[name='ChkBxLstServices']:checked").length + ' servicios seleccionados');
		} else {
		  $('#DdlService').html($("input[name='ChkBxLstServices']:checked").length + ' services selected');
		}
		if ($('#ContactForm').hasClass('was-validated')) {
		  $('#DdlService').removeClass('is-invalid-select').addClass('is-valid-select');
		}
	  }
	});

	var forms = document.getElementsByClassName('needs-validation');
	var validation = Array.prototype.filter.call(forms, function (form) {
	  form.addEventListener('submit', function (event) {
		$('#BtnSubmit').prop('disabled', true);
		if (form.checkValidity() === false) {
		  $('#BtnSubmit').prop('disabled', false);
		  event.preventDefault();
		  event.stopPropagation();
		  if (!$('#ChkBxTerms').is(':checked')) {
			$('#ChkBxTerms').parent('div').find('.invalid-feedback').show();
		  }
		  if ($("input[name='ChkBxLstServices']:checked").length === 0) {
			$('#DdlService').removeClass('is-valid-select').addClass('is-invalid-select');
		  } else {
			$('#DdlService').removeClass('is-invalid-select').addClass('is-valid-select');
		  }
		} else {
		  if (!$('#ChkBxTerms').is(':checked')) {
			$('#BtnSubmit').prop('disabled', false);
			event.preventDefault();
			event.stopPropagation();
			$('#ChkBxTerms').parent('div').find('.invalid-feedback').show();
		  } else {
			if ($("input[name='ChkBxLstServices']:checked").length === 0) {
			  $('#BtnSubmit').prop('disabled', false);
			  event.preventDefault();
			  event.stopPropagation();
			  $('#DdlService').removeClass('is-valid-select').addClass('is-invalid-select');
			} else {
			  event.preventDefault();
			  event.stopPropagation();
			  var selectedServices = [];
			  $("input[name='ChkBxLstServices']:checked").each(function () {
				selectedServices.push(this.value);
			  });
			  var tokenID = 'eyJhbgcioijiuzi1niisinr5cci6ikpxvcj9.eyjuyw1lijoiz…sesj9.3hwn-cejlo_uqabbf4j5bhbwjhgev-iwvmx-rgl0wpc';
			  tokenID = btoa(tokenID);
			  var data = JSON.stringify({
				"tokenID": tokenID,
				"name": $('#TbxName').val(),
				"companyName": $('#TbxCompany').val(),
				"email": $('#TbxEmail').val(),
				"phone": $('#TbxPhone').val(),
				"serviceId": selectedServices,
				"country": $('#HfCountry').val(),
				"language": $('#HfLanguage').val(),
				"comments": $('#TbxComments').val(),
			  });

			  $.ajax({
				url: 'https://www.blueux.mx/contactapi/api/Contacts',
				data: data,
				contentType: 'application/json; charset=utf-8',
				datatype: 'json',
				type: 'post',
				success: function (result) {
				  if (result.ResultID > 0) {
					var message = '';
					var serviceList = '';
					$("input[name='ChkBxLstServices']:checked").each(function () {
					  if ($('#HfLanguage').val() == 'es') {
						serviceList += "<div class='mppm-popup-item-icon'><img src='" + $(this).attr('data-image') + "' /></div><div class='mppm-popup-item-text'>" + $(this).attr('data-service') + "</div>";
					  } else {
						serviceList += "<div class='mppm-popup-item-icon'><img src='" + $(this).attr('data-image') + "' /></div><div class='mppm-popup-item-text'>" + $(this).attr('data-service-l') + "</div>";
					  }
					});
					if ($('#HfLanguage').val() == 'es') {
					  message = "Gracias por tu interés por descubrir el poder de la lealtad con <div class='mppm-popup-item'>" + serviceList + "</div> Nos pondremos en contacto contigo lo antes posible";
					} else {
					  message = "Thank you for your interest to discover the power of loyalty with <div class='mppm-popup-item'>" + serviceList + "</div> We will contact you as soon as possible";
					}
					$('#popup_message').html(message);
					$('#PopupMessage').show();
					$('.ClosePopupMessage').on('click', function (event) {
					  $('#TbxName').val('');
					  $('#TbxCompany').val('');
					  $('#TbxEmail').val('');
					  $('#TbxPhone').val('');
					  if ($('#HfLanguage').val() == 'es') {
						$('#DdlService').html('Seleccione');
					  } else {
						$('#DdlService').html('Select');
					  }
					  $("input[name='ChkBxLstServices']").each(function () {
						$(this).prop('checked', false);
					  });
					  $('#BtnSubmit').prop('disabled', false);
					  $('#BtnSubmit').removeClass('was-validated');
					  $('#TbxComments').val('');
					  $('#ContactForm').removeClass('was-validated');
					  $('#PopupMessage').hide();
					});
				  } else {
					var errorMessage = '';
					try {
					  errorMessage = result.Description;
					} catch (e) {
					  if ($('#HfLanguage').val() == 'es') {
						errorMessage = 'Hubo un error al envíar el formulario, favor de revisar su conexión a internet';
					  } else {
						errorMessage = 'There was an error sending the form, please check your internet connection';
					  }
					}
					$('#popup_message').html("<img src='https://bluepureloyalty.com/app/images/mail/001-warning.png' /><div>" + errorMessage + "</div>");
					$('#PopupMessage').show();
					$('#BtnSubmit').prop('disabled', false);
				  }
				},
			  });
			}
		  }
		}
		form.classList.add('was-validated');
	  }, false);
	});
	
	var termsCheckbox = document.getElementById('ChkBxTerms');
	termsCheckbox.addEventListener('click', function () {
	  $('#ChkBxTerms').parent('div').find('.invalid-feedback').hide();
	});
  console.log("form loaded v-4");
}, 1000);
