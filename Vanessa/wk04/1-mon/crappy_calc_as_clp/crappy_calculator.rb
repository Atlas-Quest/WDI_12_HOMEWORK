# User should be given a set of menu of operations
# User should be able to choose from the menu
# User should be shown the result
# This process should continue until the user selects a quit option from the menu
# ------------------------------------------------------------------------------
# Phase 1
# ---
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# ---
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Phase 3
# ---
# User should be given a menu of Calculator functionality
# User should be able to choose intended functionality

def request_calculation_type

  puts "Type 1 to add, 2 to subtract, 3 to multiply, 4 to divide, 5 for exponents, or 6 for square root: "
  operation_selection = gets.to_i

  if operation_selection === 1
    "add"
  elsif operation_selection === 2
    "subtract"
  elsif operation_selection === 3
    "multiply"
  elsif operation_selection === 4
    "divide"
  elsif operation_selection === 5
    "exponent"
  elsif operation_selection === 6
    "square root"
  else
    "error"
  end

end

def calculate_answer(operator, a, b)
  if operator === "add"
    a + b
  elsif operator === "subtract"
    a - b
  elsif operator === "multiply"
    a * b
  elsif operator === "divide"
    a / b
  elsif operator === "exponent"
    a ** b
  elsif operator === "square root"
    Math.sqrt(a)
  end
end

run_calculator = 1

while run_calculator === 1
  current_calculation = request_calculation_type()
  if current_calculation == "error"
    puts "Please enter a valid selection"

  else
    puts "What is the first number you would like to #{current_calculation}: "
    first_number = gets.to_i
    puts "What is the second number you would like to #{current_calculation}: "
    second_number = gets.to_i

    answer = calculate_answer(current_calculation, first_number, second_number)

    puts "The answer is #{answer}"
    puts "Type 1 to run another calculation or 2  to end: "
    run_calculator = gets.to_i

  end
end
