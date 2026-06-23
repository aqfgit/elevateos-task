# React Native Pokedex

A simple Pokedex application built with React Native, TypeScript, React Navigation, Redux Toolkit, and RTK Query.

## Features

- Browse the first 151 Pokemon (Generation I)
- Search Pokemon by name
- View detailed information for each Pokemon
- Local Pokemon images bundled with the application
- Loading and error states for API requests
- Type-safe navigation and API integration

## Technical Decisions

### State Management & API Layer

The application uses Redux Toolkit Query (RTK Query) for data fetching and caching because it reduces boilerplate compared to traditional Redux and is considered the de facto industry standard today.

### Project Structure

The project follows a feature-based folder structure:

    features/
      Pokedex/
        PokemonListScreen/
        PokemonDetailsScreen/

This approach keeps related components, utilities, and screen logic together and scales well as features grow.

### Data Transformation

Pokemon IDs are extracted and added during API response transformation. This keeps UI components focused on presentation and avoids repeating URL parsing logic throughout the application.

## Environment & Local Development

I had to make the following specific configurations to get the project to build and run on my machine:

- **Platform Testing:** Please note that because I developed this exclusively on a Windows machine, the application has only been built and tested on Android. I do not have local access to macOS/Xcode to verify the iOS build.
- **Node Compatibility:** The older Metro bundler kept crashing on my current Node version, so I added `NODE_OPTIONS=--openssl-legacy-provider` to the start script.
- **Android Build:** Fixed a JDK compatibility error (`major version 61`) by explicitly pointing Gradle to a Java 11 home directory.
- **React-Redux Dependency:** Since the initial template relies on React 17, adding the latest `react-redux` breaks runtime execution because it expects React 18 hooks. I locked `react-redux` to a lower version (`7.2.9`) to guarantee native compatibility with React 17.

## Testing

I included unit tests for the `getPokemonId` function.

For a production application, I would extend the test suite with:

- Component integration tests using React Native Testing Library
- User interaction tests (search, navigation flows)
- API mocking and error-state testing

## Potential Production Improvements

For a production application, I would consider:

- API schema generation to reduce manually maintained API types
- Runtime API validation using a library such as Zod
- More comprehensive integration testing
- Design system and reusable UI component library
