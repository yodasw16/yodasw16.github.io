---
layout: post
title:  "Silly (Personal) Issue Pushing Jekyll to Github Pages"
date:   2013-12-18 9:46:00
---

When I was rebuilding this site to use Jekyll I ran into a really stupid issue when it came to deploying to Github Pages. I had the impression that the <span class="inline-code">master</span> branch (this site is an organization page, not a regular Github page, so the site is deployed to the <span class="inline-code">master</span> branch instead of the <span class="inline-code">gh-pages</span> branch) should only get the code that is generated in the <span class="inline-code">_site</span> directory and that the source should be put on some other development branch.

I spent a good deal of time trying to figure out how to push only the contents of the <span class="inline-code">_site</span> directory to <span class="inline-code">master</span>. I didn't understand how a popular tool like Jekyll would have nothing about how to do this.

It turns out the issue was my own poor reading of the docs, rather than anything to do with Jekyll or Github. On the Github help page for working with Jekyll it reads:

<figure class="quote">
    <blockquote>
        <p>Every GitHub Page is run through Jekyll when you push content to a specially named branch within your repository...Simply start committing Jekyll formatted files, and you'll be using Jekyll in no time.</p>
    </blockquote>
    <figcaption class="source"><cite><a href="https://help.github.com/articles/using-jekyll-with-pages">Using Jekyll with Pages</a></cite></figcaption>
</figure>

All I ever needed to do was push my source files to <span class="inline-code">master</span> and Github would automatically run them through Jekyll. It just works. I completely misunderstood this and wasted a lot of time on hacky and confusing workarounds like [subtree merging](http://git-scm.com/book/ch6-7.html). I might be the only person who has had this problem, but if not I hope this is helpful.