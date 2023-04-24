from random import randint
"""Word Finder: finds random words from a dictionary."""


class WordFinder:
    
    def __init__(self,file):
        self.file = file
        self.words = []
        print(self.read_file())

    def read_file(self):
        f = open(self.file, 'r')
        for line in f:
            if line.strip() != '' and not line.startswith('#'):
                self.words.append(line.strip())
        f.close()
        return f"{len(self.words)} words read"
    
    def randome_word(self):
        index = randint(0, len(self.words)-1)
        return self.words[index].strip()


class SearchWordFile(WordFinder):

    def __init__(self,file):
        super().__init__(file)
        

