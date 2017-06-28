# require 'pry'
#
# class = game
#
#   def initialize
#     @card
#   end
#
#   def ritual
#     puts "Pokemon! I choose you!"
#   end
#
#   def getCard
#     @card.sample
#   end
# end
#
# card1 = Pikachu.new(40)
# card2 = Rattata.new(20)
# card3 = Pidgeot.new(60)
# card4 = Alakazam.new(80)
# card5 = Butterfree.new(30)
# card6 = Gengar.new(70)
# card7 = Moltres.new(100)
# card8 = Vulpix.new(40)
# card9 = Blastoise.new(80)
# card10 = Hitmonchan.new(50)


groups = card_pack.reverse.each_slice(3).to_a
players = {
  alfred: groups.shift, peter: groups.shift
}

winner = rand(0..1) == 0 ? :alfred : :peter
loser = winner == :alfred ? :peter : :alfred

# or you could use a * (splat operator) instead of a .flatten method
players[winner].push(groups.shift).flatten!
players[loser].push(groups.shift).flatten!
