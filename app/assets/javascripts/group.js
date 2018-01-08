$(function(){
	// ターボリンクス 初回時にjsが読まれるように。
	$(document).on('turbolinks:load', function() {
		var search_list = $('#list');
		var member_list = $('#chat-group-users');

		function appendUser(user){
			var html = `<div class="chat-group-user clearfix">
										<p class="chat-group-user__name">${user.name}</p>
										<a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}" >追加</a>
									</div>`
			search_list.append(html);

		}

		function appendNoUser(user){
			var html = `<div class="chat-group-user clearfix">
										<p class="chat-group-user__name">${user}</p>
									</div>`
			search_list.append(html);

		}

		function appendMember(name, id) {
		  var html = `<div class='chat-group-user clearfix js-chat-member' id='chat-group-user-8'>
										<input name='group[user_ids][]' type='hidden' value='${id}'>
										<p class='chat-group-user__name'>${name}</p>
										<a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
									</div>`
		  member_list.append(html);
		}

   $(document).on('click', '.chat-group-user__btn--add', function(){
   	// data("user-name")でclass = "data-user-name"を取得することができる。
    var name = $(this).data("user-name");
    var id = $(this).data("user-id");
    appendMember(name, id);
    $(this).parent().remove();
		});

		$(document).on('click', '.chat-group-user__btn--remove', function(){
		  $(this).parent().remove();
		});


		$('.user-search-field').on('keyup', function(){
			var input = $('.user-search-field').val();

			$.ajax({
				type: 'GET',
				url: '/users',
				data: { keyword: input },
				dataType: 'json',
			})

			.done(function(users){
				$('#list').empty();
				if(input == 0){
				}
				else if(users.length !== 0){
					users.forEach(function(user){
						appendUser(user);
					})
				}
				else{
					appendNoUser('一致するユーザーはいません');
				}
			})
			.fail(function(){
				alert('検索に失敗しました');
			})
		})
	});
})
