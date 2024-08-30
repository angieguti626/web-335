""" 
    Title: Gutierrez_lemonadeStand.py
    Author: Angelica Gutierrez
    Date: 1 September 2024
    Description: Calculating costs and profits of a lemonade stand. 
"""

# Create calculate_cost with two parameters: lemons_cost and sugar_cost. 
# In body of the function, return the total cost of making the lemonade.
def calculate_cost(lemons_cost, sugar_cost):
    total_cost = lemons_cost + sugar_cost # Calculating total cost
    return total_cost

# Create calculate_profit with three parameters: lemons_cost, sugar_cost, and selling_price. 
# In body of the function, return the profit from selling the lemonade.
def calculate_profit(lemons_cost,sugar_cost,selling_price):
    total_cost = lemons_cost + sugar_cost # Calculating total cost
    profit = selling_price - total_cost  # Calculating profit
    return profit

# Create variables to test each function. 
lemons_cost = 4.5
sugar_cost = 2.5
selling_price = 10

# Use a variable to build a string for the results.  
costString = '$' + str(lemons_cost) + ' + $' + str(sugar_cost) # Cost string
cost = calculate_cost(lemons_cost, sugar_cost) # Calculating cost

profitString = '$' + str(selling_price) + ' - $' + str(cost) + ' = ' # Profit string
profit = calculate_profit(lemons_cost, sugar_cost, selling_price) # Calculating profit


# Call each function passing in the variables you created in step 4 and print the results to the console using an output variable and string concatenation. 
print('Angies Lemonade Stand Profit Info!') # Printing title
print('Cost: ' + costString + ' = $%.2f' % cost) # Printing the cost
print('Profit: ' + profitString + '$%.2f' % profit) # Printing the profit