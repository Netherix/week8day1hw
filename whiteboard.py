# Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
# The first word within the output should be capitalized only if the original word was capitalized 
# (known as Upper Camel Case, also often referred to as Pascal case). 
# The next words should be always capitalized.

# split function

# Examples
# "the-stealth-warrior" gets converted to "theStealthWarrior"
# "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

def camel_case(a_string):
    value = ""
    dashes = "-"
    underscore = "_"
    if dashes in a_string:
        a_string = a_string.split("-")
    elif underscore in a_string:
        a_string = a_string.split("_")

    for i in range(len(a_string)- 1):
        i += 1
        word = a_string[i]
        a_string[i] = word.title()
    
    return "".join(a_string)

        

print(camel_case("the_stealth_warrior"))


