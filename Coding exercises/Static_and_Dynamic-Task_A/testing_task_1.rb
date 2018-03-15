### Testing task 1 code:

# Carry out static testing on the code below.
# Read through the code.
# Comment any errors you can see without correcting them.


def func1 val  # val should be in brackets
  if val = 1
  return true #indentation, should be more right
  else
  return false #indentation, should be more to the right
  end
end

dif max a b # should be def, missing brackets and comma between values
  if a > b
      return a #indentation, should be more left
  else
  b #indentation, should be more right
  end
end
end # extra end

def looper
  for i in 1..10
  puts i
end  #return missing on the next line
end

failures = 0

if looper == 10 #missing brackets
  puts "looper passed"
else
  puts "looper failed"
  failures = failures + 1 #could use += instead


if func1(3) == false
  puts "func1(3) passed"
else
  puts "func1(3) failed"
  failures = failures + 1 #could use += instead
end


if max(100,1) == 100
  puts "max(100,1) passed" #wrong function name used
else
  puts "func1(3) failed"
  failrues = failures + 1 # typing error 'failrues'
end


if failures # should be failures grater than zero
  puts "Test Failed"
else
  puts "Test Passed"
end
