m2 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
    ]
def sum_up_diagonals(matrix):
    """Given a matrix [square list of lists], return sum of diagonals.

    Sum of TL-to-BR diagonal along with BL-to-TR diagonal:

        >>> m1 = [
        ...     [1,   2],
        ...     [30, 40],
        ... ]
        >>> sum_up_diagonals(m1)
        73

        >>> m2 = [
        ...    [1, 2, 3],
        ...    [4, 5, 6],
        ...    [7, 8, 9],
        ... ]
        >>> sum_up_diagonals(m2)
        30
    """
    to_list1 = []
    x = 0
    y = 0
    for el in matrix:
        to_list1.append(matrix[x][y])
        x += 1
        y += 1
    diagonal_one = 0
    for num in to_list1:
        diagonal_one += num
        
    to_list2 = []
    x = 0
    y = len(matrix) - 1
    for el in matrix:
        to_list2.append(matrix[x][y])
        x += 1
        y -= 1
    diagonal_two = 0
    for num in to_list2:
        diagonal_two += num
    return diagonal_one + diagonal_two
    
    
    
    
    
