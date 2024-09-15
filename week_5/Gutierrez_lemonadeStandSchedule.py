"""
Author: Angelica Gutierrez
Date: 15 September 2024
File Name: Gutierrez_lemonadeStandSchedule.py
Description: Weekly to do each a lemonade stand.
"""

# Create a list of at least 5 tasks related to running a lemonade stand.
tasks = ["Set Up Stand", "Buy Ingredients", "Make Lemonade", "Sell Lemonade", "Count Earnings"]

# Use a for loop to iterate over the list of tasks and print them to the console window.
print('\n' "Tasks:")
for task in tasks: # Loop through the tasks
    print(task) # Printing tasks

# Create a list of days (Sunday through Saturday).
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

print('\n' "Daily To Do Schedule:")

# Use a for loop to iterate over the list of days and add an if…else statement to display what the task is for each day.
# For Saturday and Sunday display a message indicating it is a day off and you should rest
for i in range(len(days)): # Loop through the days by referring to their index number.
  if days[i] == "Saturday" or days[i] == "Sunday":
    print("It's a day off! You should rest!")
  # For all other days, display a message indicating the day of the week and the corresponding task from the tasks list.
  else: 
    j = i - 1 # Index number of the task according to the day
    print(days[i] + " - " + tasks[j]) # Print each day & task