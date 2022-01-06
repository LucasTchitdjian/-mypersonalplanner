# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.destroy_all
Bullet.destroy_all
User.destroy_all


puts "Starting user creation..."
user1 = User.create(
  email: "julien@test.com",
  password: "007007"
)
user2 = User.create(
  email: "lucas@test.com",
  password: "007007"
)
user3 = User.create(
  email: "chris@test.com",
  password: "007007"
)

puts "...#{User.all.count} users created"


puts "Starting bullet creation..."
Bullet.create(
  content: "Emission sur Marcelo Bielsa 19/02/2022 à 20h",
  user: User.all.sample)
Bullet.create(
  content: "Aller chercher le colis",
  user: User.all.sample)
Bullet.create(content: "Relire propale pour l'Oréal - rendu 14/01",
  user: User.all.sample)
Bullet.create(content: "Alain revient de son WE au ski 20/01",
  user: User.all.sample)
Bullet.create(content: "Préparer pitch le Wagon - restitution le 30/01",
  user: User.all.sample)
Bullet.create(content: "Préparer atelier appli mobile chantier Bouygues",
  user: User.all.sample)
Bullet.create(content: "Recherche staffing job chef de projet Equinoxe",
  user: User.all.sample)
Bullet.create(content: "Prendre les billets pour déplacement Francfort",
  user: User.all.sample)
Bullet.create(content: "Réunion parents d'élèves le 15/03",
  user: User.all.sample)
Bullet.create(content: "Programmer 3e dose vaccin Covid",
  user: User.all.sample)
Bullet.create(content: "Prendre 4 places pour OM-Nantes",
  user: User.all.sample)
Bullet.create(content: "Réserver restaurant pour le 03/02",
  user: User.all.sample)
Bullet.create(content: "Aller chercher les croquettes pour le chat",
  user: User.all.sample)
puts "...#{Bullet.all.count} users created"
