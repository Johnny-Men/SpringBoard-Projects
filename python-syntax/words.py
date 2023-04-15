def print_upper_words(words):
    """ pass in a list of words. Function will return
        words that start with 'y' or 'h' in full caps
        """
    for word in words:
        if word[0] == 'h' or word[0] == 'y':
            print(str.upper(word))

