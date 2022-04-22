# frozen_string_literal: true

class UsersController < ApplicationController
  def welcome
    @user = current_user
  end

  
end
