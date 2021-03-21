class Doctor < ApplicationRecord
  has_many :appointments, dependent: :destroy 
  has_many :patients, through: :appointments

  def get_patients_with_appointment_info
    self.patients.map do |patient|
      date = patient.appointments.find_by(doctor_id: self.id).date
      description = patient.appointments.find_by(doctor_id: self.id).description
      {patient: patient, date: date, description: description }
    end
  end


  def get_unassociated_patients
    Patient.all - self.patients
  end
end
