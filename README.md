# React Native FlatList Performance Issue

This repository demonstrates a common performance issue in React Native when using FlatList to render a large number of items.  The initial implementation causes significant lag and unresponsiveness.

The `bug.js` file contains the problematic code.  The `bugSolution.js` file provides an optimized solution.

## Problem

Rendering a large dataset (1000 items in this example) directly in a FlatList leads to performance degradation.  The app becomes sluggish and may even crash.

## Solution

The solution involves using techniques to optimize FlatList rendering, such as using `keyExtractor`, `getItemLayout`, and potentially `windowSize` for further performance gains.  See `bugSolution.js` for implementation details.

## How to run

1. Clone the repository.
2. `cd` into the project directory.
3. `npm install`
4. `npx react-native run-android` (or `npx react-native run-ios`)

Observe the performance difference between the original and optimized implementations.