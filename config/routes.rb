Rails.application.routes.draw do
  devise_for :users
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end
  root to: 'bullets#index'
  resources :bullets, only: [:create, :update, :destroy]
  get '/events', to: "bullets#events", as: :events_list
  get '/eventscount', to: "events#eventscount", as: :eventscount
  get '/listpeople', to: "bullets#list_people", as: :list_people
  get '/delegated', to: "bullets#bullets_of_others", as: :delegated
  resources :events, only: [:index, :new, :create, :update, :destroy]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
