FactoryBot.define do
	factory :message do
		content Faker::Lorem.sentence
		image {File.open("#{Rails.root}/public/uploads/message/image/14/12.jpg")}
		user
		group
	end
end
