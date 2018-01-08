if @new_message.present?
	json.array! @new_message do |message|
		json.id          message.id
		json.image       message.image
		json.content     message.content
		json.user_name   message.user.name
		json.created_at  message.created_at
	end
end

