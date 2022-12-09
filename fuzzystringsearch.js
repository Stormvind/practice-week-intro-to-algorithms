const data = require("./words.json");

const Fuzzy_String_Search = search_term =>
{
	const word_match_scores = {};
	let most_similar_word = {score:0, word: ""};
	data.forEach(word =>
	{
		if (search_term === word)
		{
			word_match_scores[word] = 9999;
		}
		
		for (let current_letter = 0; current_letter < 3; current_letter++)
		{
			if (search_term[current_letter]
			&& word[current_letter]
			&& word.includes(search_term[current_letter]))
			{
				if (!(word in word_match_scores))
				{
					word_match_scores[word] = 1
				}
				else
				{
					word_match_scores[word]++;
				}
			}
		}
		
		if (word_match_scores[word] > most_similar_word.score)
		{
			most_similar_word = {score: word_match_scores[word], word};
		}

		if (search_term.length < 3 || word.length < 3)
		{
			return;
		}
		for (let current_position = 0;
			current_position < search_term.length - 2; 
			current_position++)
		{
			if (word.includes(
			search_term[current_position] +
			search_term[current_position + 1] +
			search_term[current_position + 2]))
			{
				word_match_scores[word] += 10;
			}
		}
		if (word_match_scores[word] > most_similar_word.score)
		{
			most_similar_word = {score: word_match_scores[word], word};
		}
	});
	
	return most_similar_word.word;
}