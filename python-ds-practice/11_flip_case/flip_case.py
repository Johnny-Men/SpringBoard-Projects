def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    outcome = ''
    for ltr in phrase:
        if  to_swap == to_swap.upper() and ltr == to_swap:
            outcome += ltr.lower()
        if to_swap == to_swap.lower() and ltr == to_swap:
            outcome += ltr.upper()
        elif ltr != to_swap and to_swap == to_swap.upper() and ltr.lower() == to_swap.lower():
            outcome += ltr.upper()
        elif ltr != to_swap and to_swap == to_swap.lower() and ltr.lower() == to_swap.lower():
            outcome += ltr.lower()
        elif ltr.lower() != to_swap.lower():
            outcome += ltr
    return outcome

