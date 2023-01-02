class SkillsController < ApplicationController
    before_action :set_skill, only: [:show, :edit, :update, :destroy]
    def new
        @skill = Skill.new
    end

    def create
        @resume = Resume.find(params[:id])
        if @skill.save
            redirect_to @skill
        else
            flash[:error] = "Something went wrong"
            render 'new'
        end
    end
    

    private

    def set_skill
        @skill = Skill.find(params[:id])
    end
    
end
