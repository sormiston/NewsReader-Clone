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

- Render dynamically generated URL addressed Article pages that relate exactly to their thumbnail links

  - Article pages will have a fold-out Comments section with post and update functionality \*\* challenge

- Replicate the layout styles of medium.com at desktop, tablet, and mobile breakpoints

#### PostMVP

- functional bookmark -- bookmarked items will appear in the Reading List portion of the Feed
- Clickable Tag Categories
- Article pages will have incrementing Clap counters and bookmark functions
- dropdown article specific context meny w/ functional "Dismiss this story" button
- Infinite scroll of newsfeed
- Pop-down menu, notifications peek, separate Reading List page

## Project Schedule

| Day   | Deliverable                                                                                        | Status     |
| ----- | -------------------------------------------------------------------------------------------------- | ---------- |
| Aug 3 | Approval/ Populate Airtable / Initialize React Components / Raw main feed rendering                | Complete   |
| Aug 4 | Finish/troubleshoot main feed rendering / Show Article Page w/ Comment section                     | Complete   |
| Aug 5 | Finish/troubleshoot CRUD functionality of Comment section / style comment section and article page | Complete   |
| Aug 6 | Style main feed rendering                                                                          | Complete   |
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

https://drive.google.com/file/d/13vkJLtizEeqSsIAcCjDxJsY6QJcES9Zw/view?usp=sharing

## SWOT

07-31-2020
Strengths: I already have some practice/experience generating HTML content through iterators, and organizing "high volume" elements from a high level
I have a very keen eye and focus when driven to reproduce things in detail.

Weaknesses: I tend to run behind my own schedule, consistently, and expend energy fretting about it.

Opportunities: Excellent chance to demonstrate my capability for abstraction and scalability. Excellent opportunity to go "scavenger hunting" through Bulma's UI components to build quickly with professional style.

Threats: No telling what kind of distractions/difficulties may lay in implementing Bulma - will be very documentation dependant.
The challenges of the comment section are substantial.

## Code Snippet

```
const editCommentElement = (
    <div className="content">
      <textarea display="block" className="edit-textarea" value={userEditedComment} rows={4}
        onChange={(e) => setUserEditedComment(e.target.value)} >
      </textarea>
      <button className="button is-primary" onClick={() => handleEditComment()}>Submit</button>
      <button className="button cancel" onClick>Cancel</button>
    </div>
  )

  const defaultCommentElement = (
    <div className="content">
      <p>
        {comment.comment}
      </p>
    </div>
  )

  ...later, in React function return block ...

   <div className="dropdown-menu">
            {comment.name == localStorage.getItem('name') ? ownCommentDropdownContent : otherCommentDropdownContent}
          </div>
```

And, this one in a Styled Component for resposive layout for the Article Footer...

```
}
  div.media-right {
    flex: 1 0 400px;
  }

  @media screen and (max-width: 700px) {
    div.media.media-left, div.media-content.content {
    flex: 0 0 100%;
    }

    div.media-right {
      flex: 1 1;
    }
  }
```

... clearly evidence of someone who knows what they're doing.

The above snippet lays out two alternative React Elements in JSX, assigning each to a variable for easy portability. This portability
allows for conditional rendering in the context of the component's return block, allowing us to swap out large-ish code structures with
a single line of ternary logic.

## Issues

08-07-2020

- That box-shadow on the CommentsCard on scroll-in is hideous. Please figure out a way to darken the article itself on CommentOverlay action.

## Change Log

08-08-2020

- for time constraints - main feed render limited to "above the fold" section.
- functional bookmarking + reading list components moved to MVP items
