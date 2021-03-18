class Appointment < ApplicationRecord
  belongs_to :doctor
  belongs_to :patient


  def self.with_doctors_patients
    appointments=Appointment.all
    appointments.map do |appointment|
      {id:appointment.id, date: appointment.date, description: appointment.description, doctor: appointment.doctor, patient: appointment.patient }
    end
  end
end
