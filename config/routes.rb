Rails.application.routes.draw do
  root 'recordings#index', as: 'home'
  resources :notes
  resources :recordings
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
