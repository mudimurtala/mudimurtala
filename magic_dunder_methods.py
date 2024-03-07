# Python Object-Oriented Programming
class Employee:

    raise_amount = 1.04
    
    def __init__(self, first, last, pay):
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + '.' + last + '@company.com'

    def fullname(self):
        return '{} {}'.format(self.first, self.last)
    
    def apply_raise(self):
        self.pay = int(self.pay * self.raise_amount)

    # def __repr__(self):
    #     pass

    # def __str__(self):
    #     pass

emp_1 = Employee('murtala', 'mudi', 50000)
emp_2 = Employee('ahmad', 'daura', 60000)


print(emp_1)
print(1 + 2)
print('a' + 'b')

repr(emp_1)
str(emp_1)