# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'faker'

5.times do 
  @patient = Patient.create(name: Faker::Name.name, age: Faker::Number.within(range: 1..100)) 
end

5.times do 
  @doctor = Doctor.create(name: Faker::Name.name)

  # @patient = Patient.create(name: Faker::Name.name, age: Faker::Number.within(range: 1..100)) 

  5.times do |i|
    Appointment.create(date: Faker::Date.forward(days: 23), description: Faker::Movies::StarWars.wookiee_sentence, doctor_id: @doctor.id, patient_id: (i+1))
  end
end


puts "Seeded #{Doctor.all.size} new doctors"
puts "Seeded #{Patient.all.size} new patients"
puts "Seeded #{Appointment.all.size} new appointments"