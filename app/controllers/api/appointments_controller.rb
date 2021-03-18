class Api::AppointmentsController < ApplicationController

  before_action :get_appointment, only: [:show, :update, :destroy]
  
  def index
    # appointments = Appointment.with_doctors_patients
    render json: Appointment.with_doctors_patients
  end


  def show
    render json: @appointment
  end


  def create
    appointment = Appointment.new(appointment_params)
    if appointment.save
      render json: appointment
    else
      render json: {error: appointment.errors}, status: 422
    end
  end


  def update 
    if @appointment.update(appointment_params)
      render json: @appointment
    else
      render json: {error: appointment.errors}, status: 422
    end
  end


  def destroy
    @appointment.destroy
    render json: @appointment
  end


  private
  
  def appointment_params
    params.require(:appointment).permit(:date, :description, :doctor_id, :patient_id)
  end


  def get_appointment
    @appointment = Appointment.find(params[:id])
  end
end
