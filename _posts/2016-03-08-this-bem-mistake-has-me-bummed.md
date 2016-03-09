---
layout: post
title:  "This BEM Mistake Has Me Bummed"
date:   2016-03-08 15:00:00
---

A lot of people have jumped on the BEM bandwagon in the last few years. I was initially dismissive of BEM because of the rather ugly style, which uses double underscores (`__`) and double dashes (`--`) to separate the different parts of the class name. It looks like this:

{% highlight css %}
.block {}
.block__element {}
.block--modifier {}
{% endhighlight %}

After giving BEM a fair chance a couple years ago, I became a convert and really enjoy it now. Unfortunately, at work, in articles, and while looking at open source projects, I see BEM used in a way that makes the code less modular and harder to maintain.

BEM started as a methodology for building web applications created by [Yandex](https://en.bem.info/), but most people who use BEM focus on its CSS class selector naming convention that was popularized by articles from [Nicolas Gallagher](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/) and [Harry Roberts](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/). If you are unfamiliar or want to dig deeper, [CSS Tricks](https://css-tricks.com/bem-101/) has a pretty good BEM 101 article.

## How You're Doing it Wrong

I read an article a few months back that inspired me to add this post to my list of "I need to start blogging again" ideas. The article, [Battling BEM: 5 common problems and how to avoid them](https://medium.com/fed-or-dead/battling-bem-5-common-problems-and-how-to-avoid-them-5bbd23dee319#.z78in2cls) by [David Berner](https://twitter.com/davislurve), had the goal of pointing out some mistakes people make using BEM, but seemed to miss what I believe is the most common mistake. It even included the mistake in its example of "The right way". Take a look:

{% highlight html %}
<div class="card">
    <div class="card__header">

        <h2 class="card__title">Title text here</h2>

    </div>
    <div class="card__body">

        <img class="card__img" src="some-img.png">

        <p class="card__text">Lorem ipsum dolor sit amet, consectetur</p>
        <p class="card__text">Adipiscing elit.
            <a href="/somelink.html" class="card__link">Pellentesque amet</a>
        </p>

    </div>
</div>
{% endhighlight %}

Do you see anything wrong here? Let me explain.

[OOCSS](https://github.com/stubbornella/oocss/wiki) changed the way I write CSS forever. For me, BEM simply gives me a better way of naming my OOCSS patterns. The problem I have with the example above is that it violates one of the 2 principles of OOCSS: Separate container and content.

This principle was originally described like this:

<figure class="quote">
    <blockquote>
        <p>An object should look the same no matter where you put it. So instead of styling a specific <code class="inline-code">&lt;h2&gt;</code> with <code class="inline-code">.myObject h2 {...}</code>, create and apply a class that describes the <code class="inline-code">&lt;h2&gt;</code> in question, like <code class="inline-code">&lt;h2 class="category"&gt;</code>.</p>
    </blockquote>
    <figcaption class="source"><cite><a href="https://github.com/stubbornella/oocss/wiki#separate-container-and-content">Object Oriented CSS</a></cite></figcaption>
</figure>

Taking this a step further, you still have to be careful not to write the selector as `.myObject .category {...}`. This ties the content, `.category`, to the container, `.myObject`.

Content should almost never be location dependent. If I like the look of the heading style in my cards and I want to use the same style in a product list, I should be able to do it without writing any new CSS. I should be able to just drop the same class on the heading in my product list and have the same style. Unfortunately, giving BEM style names to our content (in the example above: `h2`,`a`,`p`,`img`) ties it to this component. This connection may only be symbolic since you could easily use the same class inside another component (as long as you keep your selectors flat), but if you do, you are losing one of the biggest benefits of BEM.

You should be able to essentially work out the HTML structure of a component just by looking at the selectors in your CSS. By giving the content component specific classes you are tying them to that component and making it impossible to work out the structure of the HTML. The CSS for this component would look like this:

{% highlight css %}
.card {...}
.card__header {...}
.card__title {...}
.card__body {...}
.card__img {...}
.card__text {...}
.card__link {...}
{% endhighlight %}

When written out as selectors, you could assume that there is a parent with a class of "card" and 6 direct children. Since we have seen the actual HTML, we know that this is wrong. You could get weird and use classes like `.card__header__title`, but this is the first common mistake that the article (correctly) points out.

## How you should do it

When using BEM to name a component, I recommend only naming the structural elements and leaving the content within those elements alone. Define the pieces that are required for the pattern and allow the content inside to be flexible. Here is how I would mark up the card example from above:

{% highlight html %}
<div class="card">
    <div class="card__header">

        <h2 class="heading-secondary">Title text here</h2>

    </div>
    <div class="card__body">

        <img src="some-img.png">

        <p class="caption">Lorem ipsum dolor sit amet, consectetur</p>        
        <p class="additional-info">Adipiscing elit.
            <a class="external-link" href="/somelink.html">Pellentesque amet</a>
        </p>

    </div>
</div>
{% endhighlight %}

Giving the content elements inside the component generic names makes it easy to apply the same styles inside any other component. Furthermore, using BEM naming for the structural elements of the component allows you to indicate what type of content belongs in them while still being flexible.

BEM is awesome for creating more understandable, scalable, and developer-friendly names for your components. Don't let this mistake make your components less portable and flexible.

This article was cross-posted to [Medium.com](https://medium.com/@yodasw16/this-bem-mistake-has-me-bummed-da4a846bae94#.d5utzufhm)
