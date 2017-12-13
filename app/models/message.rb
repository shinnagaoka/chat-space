class Message < ApplicationRecord
	belongs_to :user
	belongs_to :group
	
	mount_uploader :image, ImageUploader

	validates :content, presence: true, unless: :image?
	validates :image, presence: true, unless: :content?
end
