---
layout: post
title:  "Responsive Web Design: a Treatise"
date:   2011-02-24 10:18:00
---

For a long time, our industry has been designing for the web the same way we design for print. We open Photoshop. We decide on a width (somewhere around 960px so we can cater to those 1024×768 screens, which follows what used to be our once 750px site). We place our components exactly where we want them and in the exact pixel sizes we want them in. We open our text editor and write some semantic markup. We create all of the components in HTML and use CSS to place them where our PSD told us to in the exact size that it told us to. We set a 960px width here, a 300px width there, and a 600px width over there. As screen sizes get larger, we update with a wider site (many are moving to [1140px](http://cssgrid.net/) these days). _Pixel perfection is what matters to us_. We make our websites so they could just as easily be printed in a magazine as on a screen.

And then web capable smart phones come around and [EVERYONE](http://www.pcworld.com/article/171380/) is [using them](http://www.pcworld.com/article/184127/idc_1_billion_mobile_devices_will_go_online_by_2013.html). So, keeping with our trusty work flow we make mobile versions of our websites. We decide that if someone is trying to access our site from a mobile device, it _must_ mean they are coming for a reason other than when they are browsing on their PC. So we limit the content delivered to these devices. We cut out all of the fluff and give the user what they really want (never mind that we are only guessing at what the user really wants). We create perfectly sized mini sites with a link to our “full site,” all the while ignoring how silly that concept is. But, we are cruising again and this approach fits our print design rooted, pixel perfect ways.

And then tablet devices show up and throw another wrench into our spokes. Fortunately there is [only one](http://www.asymco.com/2011/01/19/unforeseeable-growth-analyst-failure-on-ipad-as-indicator-of-disruptive-change/) so we either decide to let them have our full desktop site or our mobile site. Or maybe we do what we’ve always done and make _one more_ site for this cool new screen size! But wait, [what about these tablets](http://ces.cnet.com/8301-32254_1-20027967-283.html?tag=mncol%3BcnetRiver)? 10.1″ screens? 7″ screens! What are we going to do?!?

## Have we always done it like this?

Creating websites with this “pixel perfection” mindset has made sense for a long time, but it isn’t how we always did it. Back in the 90′s, before we thought of using tables to create a layout, all of our sites were completely liquid and also very linear. We couldn’t really “design” anything structural, so things simply filled the screen from top to bottom and side to side. For a while, even when we had discovered tables and then, luckily, CSS many of us tried to make our designs flexible. We might not have realized it, but we were doing it because we could tell that the web felt _different_ than print. We noticed that, depending on our screen resolution, our designs might look very different. As we learned above, this never quite caught on.

## What should we do now?

We were really on to something in the 90′s when we tried to built liquid websites. It wasn’t just a feeling we had about how the web felt. The web actually _is_ different! __The web was meant to be flexible__. With the progress of CSS3, we finally have the tools to create a truly flexible experience on the web, no matter what device we are on or what screen size we are using.

By combining

* A [flexible grid](http://www.alistapart.com/articles/fluidgrids/) based layout
* [Flexible images](http://unstoppablerobotninja.com/entry/fluid-images)
* [Media queries](https://developers.google.com/web/fundamentals/design-and-ui/responsive/fundamentals/use-media-queries?hl=en)

we are able to develop websites the way the web always intended. These techniques together have come to be known as [Responsive Web Design](http://www.alistapart.com/articles/responsive-web-design/).

As <cite>Jeffery Zeldman</cite> [so eloquently puts it](http://www.zeldman.com/2010/06/23/responsive-design-is-the-new-black/):

<figure class="quote">
    <blockquote>
        <p>It’s what some of us were going for with “liquid” web design back in the 1990s, only it doesn’t suck.</p>
    </blockquote>
</figure>

## Sounds great! What’s the catch?

The magic we see with Responsive Web Design is how we can rearrange the layout based on screen width using media queries. Unfortunately, this is only the final ingredient, and not the most important. This technique requires a rethinking of how we design and build from the ground up. It is possible to apply media queries to an existing fixed-width site, but implementing in this way is frustrating and painful and makes maintenance a nightmare. It still means we have to design for a set of fixed widths. In order to do this right and make our development time quicker in the future, we have to start with the right foundation. That foundation is a fluid grid, which fully embraces the way of the web. Instead of designing for a few fixed widths, we can re-size our browser and see where things don’t work and write CSS to correct it.

I realize this is not always possible. Not everyone has a client or a boss who is willing to give the time to rebuild the foundation of a site. My hope, though, is that as responsive sites become more widely used, our bosses and clients will take notice and change their minds. All we can do is continue to evangelize web standards and push for doing the right thing. It isn’t easy. Anyone who has being in this business for a while knows that it is never easy. Web standards are an ongoing fight. We’ve won many battles in the past and we will continue to win them in the future.

<figure class="quote">
    <blockquote>
        <p>Changing our ways of thinking and acting isn’t easy. “Closely held beliefs are not easily released”. But I’ve come slowly to realize that much of what I took for granted needed to be reassessed. Judging by what I see and read and the conversations I’ve had, the email I’ve read over the last couple of years, many hold these beliefs closely, and need to rethink them too.</p>
        <p>Now is the time for the medium of the web to outgrow its origins in the printed page. Not to abandon so much wisdom and experience, but to also chart its own course, where appropriate.</p>
        <p>The web’s greatest strength, I believe, is often seen as a limitation, as a defect. It is the nature of the web to be flexible, and it should be our role as designers and developers to embrace this flexibility, and produce pages which, by being flexible, are accessible to all.</p>
        <p>The journey begins by letting go of control, and becoming flexible.</p>
    </blockquote>
    <figcaption class="source"><cite><a href="http://www.alistapart.com/articles/dao/">John Allsopp</a></cite></figcaption>
</figure>
