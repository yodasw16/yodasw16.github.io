---
layout: post
title:  "Making an important message accessible"
date:   2017-10-10 16:30:00
crosspost_to_medium: true
---

With all of the recent hurricanes, wildfires, and other natural disasters, you've probably noticed a proliferation of prominent messages at the top of websites directing impacted users to emergency resources. These messages are important and we want our users to be draw to them quickly when they visit our site.

Drawing a user's attention without annoying them (no alerts, modals, etc.) is fairly simple. We can use large fonts, bold colors, icons, and white space to visually separate the message from the rest of the page and make it noticeable. Unfortunately, this doesn't apply to users with a vision impairment who browse the web with a screen reader.

So how do we make a message stand out for someone who can't see all of our smart design decisions? This question came up recently at work when my teammate [Rob](https://medium.com/@roblcopeland) asked me if there was an Aria role for an important message.

## First things, first
Screen readers, like browsers, don't always follow the spec perfectly might behave differently. For this reason, ordering content in a meaningful way and using semantic markup should be your first concern. This ensures that a user can move through your document in a way that makes sense, even if an accessibility feature isn't functioning as expected.

## Aria "alert"?

Back to the problem of making an important message accessible, my first thought was to use "[alert](https://www.w3.org/TR/wai-aria/roles#alert)", which is meant to be used on "a message with important, and usually time-sensitive, information" or "[status](https://www.w3.org/TR/wai-aria/roles#status)", which is similar to "alert", but less assertive.

Unfortunately, according to [WAI-ARIA Authoring Practices 1.1](https://www.w3.org/TR/wai-aria-practices/), "It is important to note that, at this time, screen readers do not inform users of alerts that are present on the page before page load completes."

This means we could only use "alert" or "status" if the message is dynamically added to the page after it finishes loading. This feels like too much overhead for a message that we really just want in the page from the start.

## Landmark roles

The next idea I had, and the solution we ended up using, was a less common landmark role called  "region".

Landmark roles are used to identify the structure of a web page. Screen readers create a menu out of landmark roles which the user can utilize to quickly jump to major sections of the page.

The "[region](https://www.w3.org/TR/wai-aria-practices/examples/landmarks/region.html)" landmark is used to contain content that is "relevant to a specific, author-specified purpose and sufficiently important that users will likely want to be able to navigate to the section easily and to have it listed in a summary of the page."

We can use the "region" landmark on our important message along with "aria-label" to provide the text that will show up in the landmark menu. Now, if our user is navigating the page with landmarks they will see that there is something important for them to read. On a Mac using VoiceOver it looks like this:

<img src="/img/posts/landmark.png" alt="A screenshot of the landmark navigation menu on a Mac using VoiceOver">

## Best solution?

I like this solution, but it's not perfect. I would rather be able to use "alert" which is supposed to read the contents right after it reads the page title, but the lack of support means I need something else.

This solution makes it easily available without being annoying. If you can think of another solution, I'd love to hear about it!
