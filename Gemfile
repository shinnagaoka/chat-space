source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.0.1'
gem 'mysql2', '>= 0.3.18', '< 0.5'
gem 'puma', '~> 3.0'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
#見た目
gem 'jquery-rails'
gem 'font-awesome-rails'
#画像
gem 'carrierwave'
gem 'mini_magick'
#haml系
gem 'erb2haml'
gem 'haml-rails'
#devise
gem 'devise'
#binding-pry
gem 'pry'

group :development, :test do
  gem 'byebug', platform: :mri
  #rspec
	gem 'rspec-rails', '~>3.5'
	gem 'factory_bot_rails', "~> 4.0"
  gem 'faker'
  gem 'rails-controller-testing'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

