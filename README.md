# An App to Create Workouts

Welcome to my in-progress workouts application! This is a project I am challenging myself to complete in a single week. I'm in the beginning stages, but here are some of the features to come:

MVP:

- User can create "workouts", which are a series of exercises with appropriate rep and set counts.
- User can read, edit, and delete these workouts, to complete the CRUD process.

Reach Features:

- Users will be authenticated and taken to their workouts
- User can see workouts created by other users.

## Technology Being Used

For this project, I have chosen to go with a MERN stack (MongoDB, Express, React, Node.js). This was a fairly arbitrary decision as I wanted to practice with the MERN stack. My hope is to learn the ins-and-outs of MERN so that I can compare with other popular stacks and be able to better understand the pros and cons of various technologies. So, expect some other simple apps utilizing various stacks soon!

Also, I am attempting to over-engineer this app a bit in order to learn other devOps tools such as Docker. As you will see, there is a Dockerfile in the repo, which I hope to eventually use to dockerize the full app once it is in a running state. Then, I can create a dev environment to support a CI/CD pipeline. Not sure how much of this I will get through, but I think it is an important part of my learning.

## How to Run

This is pretty simple, but feel free to spin it up!

1: Copy code to local
2: npm install
3: I have a .env file with my PORT mapped to it (backend and frontend should be on different ports)
4: (backend) npm run dev
5: (frontend) npm start
