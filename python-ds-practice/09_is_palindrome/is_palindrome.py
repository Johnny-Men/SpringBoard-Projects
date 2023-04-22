def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """
    if phrase.find(' ') != -1:
        phrase = phrase.replace(' ', '')
    to_list = [letter for letter in phrase]
    to_list.reverse()
    reversed_word = ''
    for char in to_list:
        reversed_word += char
    if reversed_word == phrase:
        return True
    else: return False

