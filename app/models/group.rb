class Group < ApplicationRecord
	has_many :members
	has_many :users, through: :members
	has_many :messages

	validates :name, presence: true

	def show_last_message
		messages.last.try(:content) || "まだメッセージはありません。"
	end
end
