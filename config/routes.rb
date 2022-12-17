Rails.application.routes.draw do
  resources :resumes
  root 'pages#home'
end
