class Patient < ApplicationRecord
  has_many :appointments
  has_many :doctors, through: :appointments

  def get_doctors_with_appointment_info
    self.doctors.map do |doctor|
      date = doctor.appointments.find_by(patient_id: self.id).date
      description = doctor.appointments.find_by(patient_id: self.id).description
      {doctor: doctor, date: date, description: description }
    end
  end
end
