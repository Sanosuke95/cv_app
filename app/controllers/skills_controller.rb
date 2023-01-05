# The second controller for skill 
class SkillsController < ApplicationController
  before_action :set_resume
  before_action :set_skill, only: [:show, :edit, :update, :destroy]

  def new
    @skill = Skill.new
  end

  def create
    @skill = @resume.skills.create(skill_params)
    if @skill.save
      redirect_to new_resume_skill_path(@resume)
    else
      render 'new', status: :unprocessable_entity
    end
  end

  def destroy
    @skill.destroy
    redirect_to new_resume_skill_path(@resume)
  end

  private

  def skill_params
    params.require(:skill).permit(:name, :level)
  end

  def set_skill
    @skill = Skill.find(params[:id])
  end

  def set_resume
    @resume = Resume.find(params[:resume_id])
  end
end
