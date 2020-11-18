# Project Overview

Mydiem is a limited-functionality clone of the user-sourced news blog Medium - https://medium.com/.<br />
A large-ish relational database of lorem ipsum data will represent articles, stats, and content.  <br />
This project is a self-guided study in design fidelity through reverse engineering. The challenge is to strike a balance between regular, reusable components on the one hand, and specific exceptions to behavoir and styling to allow for responsive design,  on the other.  This project, my first with React, will also be a study in managine screen flows with large amounts of dynamic content that the browser will not be able to render until the AJAX promise resolves.  Finally, there will be CRUD functional comments section, to re-hydrate app-level data from descended grandchild components.

# Hosted on Netlify at: https://silly-goodall-b3a366.netlify.app/

## API and Data Sample

https://airtable.com/shrhe3mgxSiLMgmJ2

## Wireframes

https://www.figma.com/file/ixr6g4sLRUepstgnTAGpjW/Untitled?node-id=0%3A1

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

## Priority Matrix

https://drive.google.com/file/d/1XJ-RzlxrrwPygIRSYmMUFboQotY9HZHK/view?usp=sharing

## Component Hierarchy

https://drive.google.com/file/d/13vkJLtizEeqSsIAcCjDxJsY6QJcES9Zw/view?usp=sharing

## Code Snippet

The below snippet lays out two alternative React Elements in JSX, assigning each to a variable for easy portability. This portability
allows for conditional rendering in the context of the component's return block, allowing us to use a single line of ternary logic to keep a clean return (render) clause while selecting between two large-ish configurations of HTML tags.

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







