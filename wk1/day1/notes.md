# Day 1 notes

## Questions I have:
- how to handle improper user input if the data type differs from what's expected
- ReadOnly vs Private? why create a list instead of a tuple if it's going to be readOnly?
- Enums they seem to function as a dictionaly but how do i grab the key from enums
- Practical uses for  type alias
- How does TypeScript work with Jest?

## Typed Languages
### Strong vs Weak Typed Languages
- Python (Strong)
    - 123+"hello" will return an error
    - cant convert data types on the run
    - Syntatical Sugar (look it up and get into it)
- JS (Weak)
    - 123+ "hello" will run and concatenate the string to return a string 
    - returns "123hello"

### Dynamically vs Statically Typed
- when is the type checked (code compiled)
    - Dynamic Type
        - Checks during run time
        - Python
        - JS
    - Static Type
        - Compiles before code being attempted to run
        - C#
        - TypeScript

### Key TakeAways
- Strong vs Weak 
    - deals with whether data types are implicitly (assummingly) converted
- Dynamic vs Static 
    - Checks when types are checked (Compiled[static]/Runtime[Dynamic])
    

