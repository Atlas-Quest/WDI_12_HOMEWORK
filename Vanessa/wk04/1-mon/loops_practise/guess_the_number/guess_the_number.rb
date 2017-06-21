puts 'make a guess(1-10)'

number = Random.rand(1..10) #range

guess = gets.chomp.to_i

while guess != number
  puts 'wrong number'
  guess = gets.chomp.to_i
end

puts 'congrats'
