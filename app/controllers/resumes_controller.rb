# frozen_string_literal: true
class ResumesController < ApplicationController
  before_action :set_resume, only: [:show, :edit, :update, :destroy]

  def index
    @resumes = Resume.all
    puts @resumes.empty?
  end

  def new
    @resume = Resume.new
  end

  def edit; end

  def create
    @resume = Resume.new(resume_params)
    if @resume.save
      redirect_to new_resume_skill_path(@resume)
    else
      flash[:error] = 'Something went wrong'
      render 'new', status: :unprocessable_entity
    end
  end

  def update
    if @resume.update(resume_params)
      redirect_to @resume
    else
      render 'edit'
    end
  end

  def destroy
    @resume.destroy
    redirect_to resumes_path, status: :see_other
  end

  private

  def resume_params
    params.require(:resume).permit(:name, :info)
  end

  def set_resume
    @resume = Resume.find(params[:id])
  end
end
