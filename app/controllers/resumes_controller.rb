class ResumesController < ApplicationController
  def index
  end

  def new
    @resume = Resume.new
  end

  def create
    @resume = Resume.new(resume_params)
    if @resume.save
      redirect_to @resume
    else
      flash[:error] = 'Something went wrong'
      render 'new', status: :unprocessable_entity
    end
  end

  private

  def resume_params
    params.require(:resume).permit(:name, :info)
  end
  
end
