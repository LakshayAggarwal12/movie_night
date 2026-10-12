# Movie Night - AI-Assisted Coding Workshop

You will extend this small movie discovery app with an AI coding assistant. The layout, movie data and movie-card rendering are already provided. Some behaviors are intentionally incomplete for the workshop.

## Run it
1. Download/unzip the project.
2. Open the `movie-night` folder in VS Code.
3. Open `index.html` in Chrome or Edge. You can also use VS Code Live Server.
4. No install, build step, backend, database, API key or framework is required.

## Workflow
For every requirement:
1. Read the requirement.
2. Inspect the relevant code.
3. Decide what should change.
4. Ask AI for a focused implementation.
5. Read and understand the generated code.
6. Run the app and test it.
7. Keep the change only if you can explain and verify it.

Do not ask AI to regenerate the whole app.

## Live demo - Search
Implement title search inside `applyFilters()` in `app.js`. It should be case-insensitive.

Test `Interstellar`, `inter`, `INTER`, `xyz`, and an empty search field.

## Challenge 1 - Persistent watchlist
Implement `toggleWatchlist(movieId)` and restore saved movie IDs from `localStorage`.
- Add a movie and remove it by clicking again.
- Update button state and count.
- Preserve the watchlist after refresh.
- Watchlist view should show saved movies and allow returning to all movies.

Test: add → refresh → verify → remove → refresh → verify.

## Challenge 2 - Smart filters
Implement genre and minimum-rating filters. They must work with search and watchlist mode.
Test Sci-Fi + 4.5+, Drama + 4.0+, no-result combinations, reset, and search combined with a genre.

## Challenge 3 - Surprise Me
Choose a random movie from the currently filtered results and display its title. Handle the case where no movies match.

## Optional extension
Add sorting by rating, year or title.

## Rules
- You may use an AI coding assistant.
- Read generated code before accepting it.
- Keep existing features working.
- Test normal and edge cases.
- If you cannot explain a section, ask AI to explain it.
- Do not paste passwords, secrets or private information into AI tools.

## Files
- `index.html` - page structure and controls
- `style.css` - styling and responsive layout
- `data.js` - movie data
- `app.js` - rendering, event handling and workshop tasks

The incomplete behavior is intentional: you are expected to implement it during the workshop.
