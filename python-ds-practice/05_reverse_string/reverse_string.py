def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    to_list = list(phrase)
    to_list.reverse()
    outcome = ''
    for letter in to_list:
        outcome += letter
    return outcome
