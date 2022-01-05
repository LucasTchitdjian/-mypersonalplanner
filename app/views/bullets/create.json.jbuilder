if @bullet.persisted?
  json.form json.partial!('bullets/formCreate.html.erb', bullet: Bullet.new)
  json.inserted_item json.partial!('bullets/bullet.html.erb', bullet: @bullet)
else
  json.form json.partial!('bullets/formCreate.html.erb', bullet: @bullet)
end
