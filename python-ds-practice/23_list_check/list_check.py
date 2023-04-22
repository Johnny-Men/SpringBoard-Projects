def list_check(lst):
    """Are all items in lst a list?

        >>> list_check([[1], [2, 3]])
        True

        >>> list_check([[1], "nope"])
        False
    """
    count = 0
    for el in lst:
        if type(el) == list:
            count = count + 1
    if len(lst) == count:
        return True
    else: return False
