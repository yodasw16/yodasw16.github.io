---
layout: post
title:  "Where's my HEXa?"
date:   2011-01-09 20:48:00
---

[RGBa](http://www.css3.info/preview/rgba/) and [HSLa](http://www.css3.info/preview/hsla/) are really powerful additions to the [CSS Color Module](http://www.w3.org/TR/css3-color/). Having the ability to set the opacity value for a color is indispensable. For most web developers though, Hexadecimal values are much more comfortable. Most of us have many Hex values memorized because we use them so often. Part of this is stubbornness. We know that RGB and HSL are “better,” but we stick with what we know.

While listening to [Episode 5](http://www.pagebreakpodcast.com/podcast/episode-5-hardboiled-web-design/) of [Page Break Podcast](http://www.pagebreakpodcast.com/) I was reminded of the problem I’ve had with RGBa and HSLa since I first read about and started using them. Why can’t the Hexadecimal color notation be extended to include alpha so we can set the opacity of a color? Hexadecimal is simply a different way of writing an RGA value. The value #ffffff corresponds to #rrggbb (so #fff corresponds to #rgb).

So, instead of rgb(102,0,255,0.5) why can’t we have #6600ff05 where 05 is the opacity on a scale from 01 (fully transparent) to 10 (fully opaque)?

Interestingly, [Microsoft is doing something like this](http://msdn.microsoft.com/en-us/library/ms532930%28v=vs.85%29.aspx) with filters to replicate opacity in browsers that don’t support it.

Am I the only one would would like to see something like this added to the spec?