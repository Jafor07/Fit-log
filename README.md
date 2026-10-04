# FitLog

FitLog is a dark, no-nonsense workout tracker. Browse a library of twelve lifts, check the details on any one of them, and build a daily plan by adding the ones you actually want to do. You can also save workouts for later, mark planned workouts as done, and everything sticks around even after you refresh the page.

## Technologies Used

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Context API
- React Hot Toast
- React Icons

## Features

- Browse all twelve workouts from a live API, shown as cards in a responsive grid that adjusts from one column on mobile up to three on desktop.
- Click any workout for a full detail page: equipment, difficulty, sets, reps, duration, calories, rating, and step-by-step instructions.
- Add workouts to a daily plan (capped at five) or save them for later, both tracked with live badge counters in the navbar.
- My Plan page with live metrics (total exercises, minutes, calories), tabs for Today's Plan vs Saved, and a sort dropdown by duration, calories, or rating.
- Mark planned workouts as done or remove them entirely, both with instant toast notifications confirming the action.
- Plan and saved data persist in localStorage, so your progress survives a page refresh.
- Custom 404 page for any route that doesn't exist.


## Live Link

https://fit-log-nine-alpha.vercel.app/

