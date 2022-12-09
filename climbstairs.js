/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/
const Get_Amount_Of_Ways_To_Climb_Stairs = steps => 
{
	if (steps < 1 || !Number.isInteger(steps))
	{
		console.log("Stairs must have an amount of steps that is more than 0 and an integer");
		return false;
	}
	
	let current_fibonacci_number = 1;
	let previous_fibonacci_number = 0;
	let next_fibonacci_number = 0;
	
	for (let current_step = 0; current_step < steps; current_step++)
	{
		next_fibonacci_number = current_fibonacci_number + previous_fibonacci_number;
		previous_fibonacci_number = current_fibonacci_number;
		current_fibonacci_number = next_fibonacci_number;
	}
	
	return current_fibonacci_number;
}