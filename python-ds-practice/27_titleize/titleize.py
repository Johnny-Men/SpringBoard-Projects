def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    outcome = ''
    to_list = phrase.split(' ')
    for word in to_list:
        if outcome == '':
            outcome += word.capitalize()
        else: outcome += f" {word.capitalize()}"
    return outcome
        

