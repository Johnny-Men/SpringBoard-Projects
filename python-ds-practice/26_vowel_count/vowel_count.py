def vowel_count(phrase):
    """Return frequency map of vowels, case-insensitive.

        >>> vowel_count('rithm school')
        {'i': 1, 'o': 2}
        
        >>> vowel_count('HOW ARE YOU? i am great!') 
        {'o': 2, 'a': 3, 'e': 2, 'u': 1, 'i': 1}
    """
    vowels = 'aeiou'
    outcome = {}
    phrase = phrase.lower()
    for ltr in phrase:
        if vowels.find(ltr) != -1 and  not outcome.get(ltr):
            outcome[ltr] = 1
        elif vowels.find(ltr) != -1 and outcome.get(ltr):
            outcome[ltr] = outcome[ltr] + 1
    return outcome
    

