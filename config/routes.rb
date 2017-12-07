Rails.application.routes.draw do
	devise_for :users
	root 'messages#index'
	get 'messages/index' => 'messages#index'
	get 'users/:id/edit' => 'users#edit'
	resource :user, only: [:edit, :update]
	resource :group, only: [:new, :create, :edit, :update]
end
