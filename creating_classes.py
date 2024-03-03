# Python Object-Oriented Programming


class Employee:
    def __init__(self, first, last, pay):
        self.first = first
        self.last = last
        self.pay = pay
        self.email =first + '.' + last + '@company.com'

    def fullname(self):
        return '{} {}'.format(self.first, self.last)


emp_1 = Employee('murtala', 'mudi', 50000)
emp_2 = Employee('ahmad', 'daura', 60000)


# emp_1.first = 'murtala'
# emp_1.last = 'mudi'
# emp_1.email = 'murtala.mudi@company.com'
# emp_1.pay = 50000

# emp_2.first = 'ahmad'
# emp_2.last = 'daura'
# emp_2.email = 'ahmad.daura@company.com'
# emp_2.pay = 60000

print(emp_1.email)
print(emp_2.email)

print(Employee.fullname(emp_1))
print(emp_1.fullname())