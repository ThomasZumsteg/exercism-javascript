# Accumulate

Implement the `accumulate` operation, which, given a collection and an operation to perform on each element of the collection, returns a new collection containing the result of applying that operation to each element of the input collection.

For example, given the collection of numbers:

- 1, 2, 3, 4, 5

And the operation:

- square a number

Your code should be able to produce the collection of squares:

- 1, 4, 9, 16, 25

## Restrictions

Keep your hands off that collect/map/fmap/whatchamacallit functionality
provided by your standard library!
Solve this one yourself using other basic tools instead.

Elixir specific: it's perfectly fine to use `Enum.reduce` or
`Enumerable.reduce`.

## Setup

Go through the setup instructions for JavaScript to
install the necessary dependencies:

http://help.exercism.io/getting-started-with-javascript.html

## Making the Test Suite Pass

Execute the tests with:

```bash
$ jasmine-node .
```

In many test suites all but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.


## Source

Conversation with James Edward Gray II [view source](https://twitter.com/jeg2)
