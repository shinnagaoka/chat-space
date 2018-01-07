class UsersController < ApplicationController

	def index
		@users = User.where("id != #{current_user.id} and name LIKE(?)" , "#{params[:keyword]}%")
		respond_to do |format|
			format.json
		end
	end

	def edit
	end

	def update
		current_user.update(update_params)
		redirect_to root_path
	end

	private
	def update_params
		params.require(:user).permit(:name, :email)
	end

end
