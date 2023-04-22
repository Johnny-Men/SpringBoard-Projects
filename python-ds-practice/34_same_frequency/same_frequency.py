def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    to_string1 = str(num1)
    to_string2 = str(num2)
    to_list1 = list(to_string1)
    to_list2 = list(to_string2)
    to_list1.sort()
    to_list2.sort()
    if to_list1 == to_list2:
        return True
    else: return False
    