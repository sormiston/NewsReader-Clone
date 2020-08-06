# Project Overview

## Project Name

Mydiem newsreader clone

## Project Description

Mydiem is a limited-functionality clone of the user-sourced news blog Medium - https://medium.com/.
A large-ish database of schematized lorem ipsum data will represent articles, stats, and content.
This project will be a self-guided study in design fidelity and architecture. The challenge is to apply React and CSS extended frameworks to create highly scalable code that directs high-volume rendering while preserving cohesive organization and style. This will also be a localized experiment of CRUD functionality with observable analogies to a real-world cases.  
I am hoping this practice will prepare me well for working with a UX student in P3.

## API and Data Sample

https://airtable.com/shrhe3mgxSiLMgmJ2

## Wireframes

https://www.figma.com/file/ixr6g4sLRUepstgnTAGpjW/Untitled?node-id=0%3A1

### MVP/PostMVP

The functionality will then be divided into two separate lists: MVP and PostMVP. Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.

#### MVP

- Render "Main Feed page" with

  - functional bookmark -- bookmarked items will appear in the Reading List portion of the Feed

- Render dynamically generated URL addressed Article pages that relate exactly to their thumbnail links

  - Article pages will have a fold-out Comments section with post and update functionality \*\* challenge

- Replicate the layout styles of medium.com at desktop, tablet, and mobile breakpoints

#### PostMVP

- Clickable Tag Categories
- Article pages will have incrementing Clap counters and bookmark functions
- dropdown article specific context meny w/ functional "Dismiss this story" button
- Infinite scroll of newsfeed
- Pop-down menu, notifications peek, separate Reading List page

## Project Schedule

| Day   | Deliverable                                                                                        | Status     |
| ----- | -------------------------------------------------------------------------------------------------- | ---------- |
| Aug 3 | Approval/ Populate Airtable / Initialize React Components / Raw main feed rendering                | Incomplete |
| Aug 4 | Finish/troubleshoot main feed rendering / Show Article Page w/ Comment section                     | Incomplete |
| Aug 5 | Finish/troubleshoot CRUD functionality of Comment section / style comment section and article page | Incomplete |
| Aug 6 | Style main feed rendering / PostMVP                                                                | Incomplete |
| Aug 7 | Present                                                                                            | Incomplete |

## Priority Matrix

https://drive.google.com/file/d/1XJ-RzlxrrwPygIRSYmMUFboQotY9HZHK/view?usp=sharing

## Timeframes

| Component                                                              | Priority | Estimated Time | Time Invested | Actual Time |
| ---------------------------------------------------------------------- | :------: | :------------: | :-----------: | :---------: |
| Populate Airtable                                                      |    H     |      1 hr      |               |             |
| Initialize React Components: API calls + State storage                 |    H     |     2 hrs      |               |             |
| Initialize React Components: Iterative Rendering function of main feed |    H     |     3 hrs      |               |             |
| Initialize React Components: Reading List                              |    H     |     3 hrs      |               |             |
| Initialize React Components: Show Article Page                         |    H     |     3 hrs      |               |             |
| Comment Section Component                                              |    H     |     6 hrs      |               |             |
| Stress-test Comment Section                                            |    L     |      1hr       |               |             |
| CSS R & D                                                              |    H     |      4hr       |               |             |
| Style Article Page                                                     |    M     |      5 hr      |               |             |  |
| Style Main Feed                                                        |    M     |      7 hr      |               |             |  |
| Total                                                                  |    H     |     30 hrs     |               |             |

## Component Hierarchy

https://drive.google.com/file/d/19J0KZfZm5BVE-utuhHGZm4zQBS1TzezH/view?usp=sharing

## SWOT

Strengths: I already have some practice/experience generating HTML content through iterators, and organizing "high volume" elements from a high level
I have a very keen eye and focus when driven to reproduce things in detail

Weaknesses: I tend to run behind my own schedule, consistently, and expend energy fretting about it.

Opportunities: Excellent chance to demonstrate my capability for abstraction and scalability. Excellent opportunity to go "scavenger hunting" through Bulma's
UI components to build quickly with professional style.

Threats: No telling what kind of distractions/difficulties may lay in implementing Bulma - will be very documentation dependant.
The challenges of the comment section are substantial.

## Code Snippet

## Observations

Tuesday
ArticlePage > Header / Footer path .... use of destructured prop { article } enabled me to copy and paste without any dot-notation additions when generating child components ... kinda cool. PRO: my precious data doesn't get longer or more semantically complicated to call .... CON is that its history of passage through the data chain is no longer obvious.

Using Styled-components to attenuate a pre-defined CSS extension framework (like Bulma) feels like a big win, and a great way to avoid dreaded stylesheets. By opening up a Styled Component declared
const as a parent container, one can always (?) override the more generalized class rules provided bulma/css/bulma.css. This allows "spot" overriding, without opening up a dreaded stylesheet.

On the note of style, it is VERY hard to NOT style as you go. Especially since I am experimenting, there is high-risk of Frankenstyling.

Wednesday
Overriding Bulma's styles is certainly now more cumbersome than writing from scratch. The difficulty is that I can't yet what my eye sees into meaningful CSS. So for educational purposes, it is interesting to get a package of "ready made" CSS via Bulma, see what it contains and what it does NOT contain, and from there make judgement calls to knock things into place. SLOW, not a real "workflow" but a good learning experience, I think?

Thursday
Design Highlight -- for smooth UX, CommentsCard is rendered after AXIOS Get in ArticlePage.js (!dataLoading && ) -- ready, but hidden.
CommentsCard component is then locally responsible for patch/get requests to avoid re-rendering across generations.

## Issues

## Change Log

Use this section to document what changes were made and the reasoning behind those changes.
