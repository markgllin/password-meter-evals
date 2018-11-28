# size of individual dictionaries
# password overlaps
# max length, average length, standard deviation

require 'pp'
pws = File.readlines(ARGV[0])

stats = {
  password_lengths: {},
  character_usage: {},
  # longest_pw: []
}

pws.each do |pw|
  if stats[:password_lengths][pw.length].nil?
    stats[:password_lengths][pw.length] = File.open("results/#{pw.length}.txt", 'w')
    stats[:password_lengths][pw.length].puts "#{pw}"
  else
    stats[:password_lengths][pw.length].puts "#{pw}"
  end

  # if stats[:longest_pw].nil?
  #   stats[:longest_pw] = pw
  # else
  #   if stats[:longest_pw].size < pw.size
  #     stats[:longest_pw] = pw
  #   end
  # pw.each_char {|ch| stats[:character_usage][ch] = !stats[:character_usage][ch].nil? ? (stats[:character_usage][ch] += 1) : 1}
end

# File.open('pw_stats.txt', 'w') do |f|
#   lengths = stats[:password_lengths].keys
#   f.puts "Password Lengths, Count"
#   lengths.sort!
#   lengths.each {|length| f.puts "#{length}, #{stats[:password_lengths][length]}"}

#   # f.puts ""

#   # f.puts "Characters Used, Codepoint, Count"
#   # chars = stats[:character_usage].keys
#   # chars.sort!
#   # chars.each do |ch|
#   #   f.puts "#{ch}, #{ch.unpack("C*").pack("U*")}, #{stats[:character_usage][ch]}"
#   # end

#   f.puts "Summary:"
#   f.puts "# of different lengths: #{lengths.size}"
#   #f.puts "Total characters used: #{chars.size}"
#   f.puts "Longest pw: #{stats[:longest_pw]}"
# end

# pp stats
# chars = stats[:character_usage].keys
# chars.each do |ch|
#   puts "#{ch}, #{ch.unpack("C*").pack("U*")}, #{stats[:character_usage][ch]}"
# end