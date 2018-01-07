$(function(){
	$(document).on('turbolinks:load', function() {
		function buildHTML(message){
			if (message.content &&  message.image.url) {
				var html = `<div class = 'message' data-id=${message.id}>
											<div class = 'top-message'>
												<div class = 'top-message__user-name'>
													${message.user_name}
												</div>
												<div class = 'top-message__date'>
													${message.created_at}
												</div>
											</div>
											<div class = 'under-message'>
												<div class = 'under-message__content'>
													<p>
														${message.content}
														<img src = ${message.image.url}>
													</p>
												</div>
											</div>
										</div>`
			}
			else if (message.content) {
				var html = `<div class = 'message' data-id=${message.id}>
											<div class = 'top-message'>
												<div class = 'top-message__user-name'>
													${message.user_name}
												</div>
												<div class = 'top-message__date'>
													${message.created_at}
												</div>
											</div>
											<div class = 'under-message' >
												<div class = 'under-message__content'>
													<p>
														${message.content}
													</p>
												</div>
											</div>
										</div>`
			}
			else{
				var html = `<div class = 'message' data-id=${message.id}s>
											<div class = 'top-message'>
												<div class = 'top-message__user-name'>
													${message.user_name}
												</div>
												<div class = 'top-message__date'>
													${message.created_at}
												</div>
											</div>
											<div class = 'under-message'>
												<div class = 'under-message__content'>
													<p>
														<img src = ${message.image.url}>
													</p>
												</div>
											</div>
										</div>`
			}
			return html
		}

		function update(){
			// 現在表示されているメッセージの中で最新のもののidを取得
			if($('.message')[0]){
				var last_message_id = $('.message:last').data('id');
			}
			else{
				var last_message_id = 0
			}
			console.log(last_message_id);
			$.ajax({
				url: window.location.href,
				data: {
					 message: { id: last_message_id }
				},
				type: 'GET',
				dataType: 'json',
			})

			.done(function(data){
				$.each(data, function(i, message) {
					var html = buildHTML(message);
					$('.messages').append(html);
				});
			})
			.fail(function(){
				alert('error');
			})
		}

		if(document.URL.match("/messages")) {
			setInterval(update, 5000);
		}

		$('#js-form').on('submit', function(e){
			e.preventDefault();
			var formData = new FormData(this);
			var href = window.location.href
			$.ajax({
				url: href,
				type: 'POST',
				data: formData,
				dataType: 'json',
				processData: false,
	      contentType: false,
			})

			.done(function(data){
				var html = buildHTML(data);
				$('.messages').append(html);
				// 送信された後、入力欄を空白にするため
				$('.form__message').val('');
				// 送信された後、imageを空白にするため
				$('#js-image').val('');
				// disabledを無効にする
				$('.form__submit').attr('disabled', false);
			})
			.fail(function(){
				alert('error');
				$('.form__submit').attr('disabled', false);
			});
		})
	})
})
