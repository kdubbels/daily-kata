class Set
  def initialize
  	@dataStore = []
  end

  def add(data)
    if @dataStore.index(data)
      puts "Already exists in set"
    else
      @dataStore.push(data)
      puts "#{data} added to set"
  	end
  end

  def remove(data)
  	position = @dataStore.index(data)
    @dataStore.delete_at(position)
    puts "Removed #{data} from array"
  end

  def contains(data)
    if @dataStore.index(data)
      return true
    else
      return false
    end
  end

  def union(set)
  	tempSet = Set.new;

  	@dataStore.each_with_index { |item, index| tempSet.add(@dataStore[index]) }

  	set.dataStore.each_with_index do |item, index|
  	  if !tempSet.contains(set.dataStore[index])
  	  	tempSet.dataStore.push(set.dataStore[index])
  	  end
  	end
  	return tempSet
  end

  def show
  	puts @dataStore
  end

  attr_reader :dataStore
end

# cis = Set.new
# cis.add("Clayton")
# cis.add("Mike")
# cis.add("Jennifer")
# cis.add("Raymond")

# dmp = Set.new
# dmp.add("Raymond")
# dmp.add("Cynthia")
# dmp.add("Jonathan")

# it = Set.new
# it = cis.union(dmp)
# puts it.show()
