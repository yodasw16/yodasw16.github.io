---
layout: post
title:  "Using Unordered Lists for Forms"
date:   2014-02-19 14:00:00
---

I like using unordered lists to mark up my forms. I'm not sure when I started doing it and I've never really thought hard about why. A couple weeks ago I got into a debate with a coworker who believes forms should never be lists. If the labels and inputs need anything to wrap them a <span class="inline-code">div</span> is appropriate, not a list. That may be an oversimplification of his argument and I hope and encourage him to write a post explaining his position, as well.

I love debating semantics, so I am glad we got into the discussion we did. It forced me to really think about why I use lists.

<strong>SPOILER:</strong> I still like using lists.

## Forms are a list of questions

My main reason is one of semantics. When we present a user with a form, we are asking them a list of questions. I'm not saying forms _have_ to be made up of lists; divs are also semantically fine since they have no semantic meaning. That said, I can't think of a good reason not to add additional semantics to a document, as long as they are appropriate.

<figure class="quote">
    <blockquote>
        <p>The ul element represents a list of items, where the order of the items is not important — that is, where changing the order would not materially change the meaning of the document.</p>
    </blockquote>
    <figcaption class="source"><cite><a href="http://www.w3.org/TR/html5/grouping-content.html#the-ul-element">W3C HTML5 - Grouping Content</a></cite></figcaption>
</figure>

The most important part here is "a list of items." <span class="inline-code">ul</span> has a very open ended semantic meaning. A bunch of form elements _is_ a list of items. It is a list of <span class="inline-code">label</span>/<span class="inline-code">input</span> pairs. Where using a <span class="inline-code">ul</span> comes in handy over a semantically neutral <span class="inline-code">div</span> is that it creates a relationship between the inputs. When a screen reader comes to a list, it tells a sightless user how many items are in the list. Since I can see, I don't need this because I can count them. For a blind person, what harm is there in showing them how long the form is?

## <span class="inline-code">ul</span> adds useful styling hooks

From a styling perspective, it means I don't have to apply classes to all of the wrapping divs to target them for default styles. I can put one class on the <span class="inline-code">ul</span> and then add a bottom margin to every child <span class="inline-code">li</span>. That is useful and makes styling easier.

## <span class="inline-code">ul</span> creates a coding standard

Also, of lesser importance, it creates a consistent coding standard. It's any easy markup pattern that everyone knows and doesn't leave a bunch of ambiguity about where to put divs and how many and around what. Granted, this can be achieved through good project documentation of whatever elements are used.

## Do whatever works for you

I certainly don't believe using <span class="inline-code">ul</span> is the _One True Way_ to mark up a form, but I don't believe you can argue that it is the _wrong_ way either. It adheres to the spec, adds additional meaning, aids in styling, and is a solid coding standard. Technically, you could probably argue that an entire web page is a list, but you need to draw a line somewhere. For me, it is the point where semantics and ease of use cross paths. When it comes to forms, using <span class="inline-code">ul</span> makes my life easier without doing semantic harm. That's enough for me.