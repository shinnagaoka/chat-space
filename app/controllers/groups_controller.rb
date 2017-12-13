class GroupsController < ApplicationController

	def index
	end

	def new
		@group = Group.new
		# 配列に要素を追加する動き
		@group.users << current_user
	end

	def create
		@group = Group.new(group_params)
		if @group.save
			Member.create(user_id: current_user.id, group_id: @group.id)
			redirect_to root_path, notice: 'グループを作成しました'
		else
			render :new
		end
	end

	def edit
		@group = Group.find(params[:id])

	end

	def update
		group = Group.find(params[:id])
		group.update(group_params)
		redirect_to root_path, notice: 'グループを変更しました'
	end

	private
	def group_params
		params.require(:group).permit(:name ,{ user_ids: [] })
	end
end

