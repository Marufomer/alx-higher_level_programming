Objects and values
If we execute these assignment statements,

a = "banana"
b = "banana"
we know that a and b will refer to a string with the letters "banana". But we don’t know yet whether they point to the same string.

There are two possible states:

Two state diagrams for multiple references with strings
In one case, a and b refer to two different things that have the same value. In the second case, they refer to the same thing. These things have names — they are called objects. An object is something a variable can refer to.

We can test whether two names have the same value using ==:
