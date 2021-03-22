class Api::PatientsController < ApplicationController


before_action :set_patient, only: [:show, :update, :destroy]

    def index
        patients = Patient.all
        render json: patients
    end

    def show
      render json: {patient:@patient, doctors: @patient.get_doctors_with_appointment_info, unassociated_doctors: @patient.get_unassociated_doctors}
    end

    def create
      patient = Patient.new(patient_params)
      if(patient.save)
        render json: patient
      else
        render json: {error: @patient.errors}, status: 422
      end
    end

    def update 
      if @patient.update(patient_params)
        render json: @patient
      else
        render json: {error: @patient.errors}, status: 422
      end
    end

    def destroy
     @patient.destroy
     render json: @patient
    end
    
    private

    def patient_params 
      params.require(:patient).permit(:name, :age)
    end

    def set_patient
     @patient = Patient.find(params[:id])
    end
end