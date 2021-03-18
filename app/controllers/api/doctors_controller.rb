class Api::DoctorsController < ApplicationController
  before_action :set_doctor, only: [:show, :destroy]

  def index
    doctors = Doctor.all
    render json: doctors
  end

  def show
    render json: @doctor
  end

  def create
    @doctor = Doctor.new(doctor_params)

    if @doctor.save
      render json: @doctor
    else
      render json: {error: @doctor.errors}, status: 422
    end
  end

  def destroy
    @doctor.destroy
    render json: @doctor
  end

  private
    def set_doctor
      @doctor = Doctor.find(params[:id])
    end

    def doctor_params
      params.require(:doctor).permit(:name)
    end
end

end
