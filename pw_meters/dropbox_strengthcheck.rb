require 'zxcvbn'

#   result.score      # Integer from 0-4 (useful for implementing a strength bar)
#   0 # too guessable: risky password. (guesses < 10^3)
#   1 # very guessable: protection from throttled online attacks. (guesses < 10^6)
#   2 # somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)
#   3 # safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)
#   4 # very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)

indicator = {
  0 => 'very weak',
  1 => 'weak',
  2 => 'medium',
  3 => 'strong',
  4 => 'very strong'
}

tester = Zxcvbn::Tester.new

pws = File.readlines(ARGV[0])

File.open('dropbox_results.csv', 'a') do |line|
  line.puts "Password, Score, Strength, Entropy, Cracktime(secs), Cracktime(string), Calculation Time"

  pws.each do |pw|
    begin
      result = tester.test(pw)
      line.puts "#{pw.strip}, #{result.score}, #{indicator[result.score]}, #{result.entropy}, #{result.crack_time}, #{result.crack_time_display}, #{result.calc_time} "
    rescue
      File.open('dropbox_invalid.txt', 'a') do |invalid|
        invalid.puts "pw"
      end
    end 
  end
end

