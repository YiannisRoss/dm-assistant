# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root to: 'users#welcome'

  resources :maps
  resources :characters
  resources :game_tracker, only: :index
  
  namespace :api do
    namespace :v1 do
      resources :characters, only: [:index, :create, :destroy, :update]
    end
  end
end
