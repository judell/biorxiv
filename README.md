# biorxiv

This tool illustrates one way a biorxiv article might indicate and link to review layers. 

The sample URL, https://www.biorxiv.org/content/10.1101/540088v2, has dummy annotations in two dummy open groups I created for the demo.

The tool takes liberties with two elements on the page just for demo purposes. The disqus link becomes a summary of the # of review groups, 
annotations, and replies. The citation tools link becomes a reviews element that links to only groups that contain annotations.

It runs from a bookmarklet, which cannot be made bookmark-bar-draggable from GitHub, but there's a draggable link at 
http://jonudell.info/h/#bookmarklets. If you "install" the bookmarklet from there, then visit https://www.biorxiv.org/content/10.1101/540088v2 and click it, you should get this result.

![](https://jonudell.info/h/biorxiv-bookmarklet.jpg)

The tool is based on a library, https://github.com/judell/hlib, which I use for all sorts of Hypothesis-related tools.
