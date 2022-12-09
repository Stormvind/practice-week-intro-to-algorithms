const Find_Number_In_Sorted_Array = (array, number_to_find) =>
{
	let start = 0;
	let end = array.length - 1;

	while (start <= end)
	{
		let middle = Math.floor((start + end) / 2);

		if (array[middle] === number_to_find)
		{
			return middle;
		}
		else if (array[middle] < number_to_find)
		{
			start = middle + 1;
		} else
		{
			end = middle - 1;
		}
	}

	return false;
}

// let numbers = [2, 6, 8, 9, 10];
// let target_numbers_index = Find_Number_In_Sorted_Array(numbers, 7);

// if (target_numbers_index !== false) 
// {
	// console.log(`Number found at position ${target_numbers_index}.`);
// }
// else 
// {
	// console.log(`The number is not in the array.`);
// }

