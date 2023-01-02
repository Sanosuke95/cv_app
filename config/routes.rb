Rails.application.routes.draw do
  resources :resumes do
    resources :skills
  end

  root 'pages#home'
end
