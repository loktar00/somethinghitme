---
title: "Use built in jQuery UI icon with datepicker"
date: "2010-10-06"
---

Needed the date picker in a project today and noticed it doesn't integrate well with jQuery UI's icons, if trying to use an icon to open the calendar rather than an input. Found a response on [Stackoverflow](http://stackoverflow.com/questions/802379/use-jquery-ui-datepicker-with-icons-from-jquery-ui-theme) that talked about having to do it manually. This is the solution I ended up using.

\[sourcecode language="js"\] $("#DateFrom").datepicker({ showOn: 'button'}).next('button').text('').button({icons:{primary : 'ui-icon-calendar'}}); \[/sourcecode\]

By default the datepicker button call automatically inserts three ellipses to the button, so the text('') is needed to remove the text from the default button. So there you go a fully theme away calendar button. Now if only they would make this easier by having the datepicker do it all for you.
