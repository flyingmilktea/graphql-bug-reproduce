# graphql-bug-reproduce
Microserver didn't connect properly bug (return null)

It happens when didn't return sth in ```args``` under subschemas.merge, even undefined is acceptable.
