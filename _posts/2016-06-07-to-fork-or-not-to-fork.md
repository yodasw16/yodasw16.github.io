---
layout: post
title:  "To Fork or Not to Fork?"
date:   2016-06-07 21:00:00
---

In 2013 I wrote a CSS framework called [Scales](https://scalescss.com). At the time Scales was heavy influenced by another CSS framework called [inuit.css](https://github.com/inuitcss) by CSS Wizard [Harry Roberts](http://csswizardry.com/). I initially intended to use inuit.css for a project at work, but some of the patterns didn't work the way I expected or wanted. So, like many unfortunate and misguided souls before me, I decided to create my own framework that worked the way I wanted. Since I really liked the way inuit.css worked in a lot of ways, Scales ended up “borrowing” a few of the patterns. I cleared this with Harry over email and added the appropriate attribution to the files that were either based on or outright copies of inuit.css.

A little over a year later, after using Scales in several projects at work, I began writing version 2.0. One of the biggest issues keeping people from adopting Scales was that it was a single codebase. You either used all of Scales or none of it. For version 2.0 I decided to split each piece into its own Git repository so that the whole thing could be pulled in to a project, or individual patterns could be used.

Around the same time I noticed that Harry was doing the same thing with inuit.css. Since there were still a few patterns that I would be breaking out into their own repo that were copies of what were now their own repo in inuit.css, I decided to just fork those into the Scales org. Since some of the naming conventions and code style were different between the projects, I made the those changes and pushed those repos up as a part of Scales. This seemed like the appropriate thing to do. I figured I wouldn't really need any specific attribution anymore, because you could see right in the repo that it was forked and linked directly back to the original.

A few weeks ago I had a contribution to a Scales pattern that wasn't showing up on the person's contribution graph on Github. While looking into why, I found this rule from Github about [what counts as a contribution](https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/):

<figure class="quote">
    <blockquote>
        <p>The commits were made in a standalone repository, not a fork.</p>
    </blockquote>
    <figcaption class="source"><cite><a href="https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile/">Github.com</a></cite></figcaption>
</figure>

This means that if you fork a repo and make any changes to it, you don't get any credit for it in your contribution graph or in your contribution history. Learning this made me question the strategy of forking a repo for anything other than contributing pull requests back to the original.

What if a project is abandoned and the owner is unresponsive, but you want to take over the project and keep it going? Until I learned this I would have said to just fork it. I always assumed that was the best practice for those kinds of situations. Now, I would want to start a new repo, copy the old project over, and put a note of attribution in my readme.

Another problem I noticed with this rule relates to an open source project by a former co-worker, [Julie Cameron](https://github.com/jewlofthelotus). She is the creator of a pretty popular jQuery plugin called  [SlickQuiz](https://github.com/jewlofthelotus/SlickQuiz). When she moved on to a new company, she forked her repo from the official company Github org and has made 58 commits to that fork. The most recent commit was on April 8, but as you can see, she gets [no credit for it](https://github.com/jewlofthelotus?tab=overview&from=2016-04-08).

While this says something about changes that my work should consider making to how we treat projects that are maintained solely by someone who has left the company, it also makes me question how Github counts contributions to forks. It's clear that forking is not only used as a way to contribute pull requests back to the main repo.

Should Github have another process in the UI that is like a fork, but meant to mean “this is mine now and I don't intend to contribute back”? Should I just not fork things as a way of showing attribution and start standalone repos instead? Am I the only one who thought forking in these ways made sense?

This article was cross-posted to [Medium.com](https://medium.com/@yodasw16/to-fork-or-not-to-fork-1b733de24181#.igewosl4p). Leave me a comment over there.
