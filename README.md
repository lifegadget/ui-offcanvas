# ui-offcanvas

## Usage

Provides an off-canvas menu system for an ember application. Designed mobile-first.

## Installation

Go to your project directory and type:

````bash
ember install:addon ui-offcanvas
````

That's it. You will need to stop any currently running `ember serve` you might have had running and restart it but that's it.


## Dependencies ##

There are a few lightweight packages that this addon will install for you:

- [`fastclick`](https://github.com/ftlabs/fastclick) - this converts a touch event into a synthetic click event and avoids the default 300ms delay that comes with touch trying to decide whether you're clicking something or double-clicking it. This addon is small, very well tested, and documented (it also allows for exceptions where you need them). In order to ease integration of fastclick we're just using the also popular [`ember-cli-fastclick`](https://github.com/ember-mobile/ember-cli-fastclick) addon here.
- [`ember-cli-sass`](https://github.com/aexmachina/ember-cli-sass) - we're using SASS both because we love it but also because it offers some nice dynamic aspects to the addon user. As an example, the breakpoints set by Bootstrap SASS like `$brand-primary` can be leveraged to create a better navbar background color, etc. Mind you, we do not install Bootstrap for you but if you use it we'll be smart about it.
- [`ui-button`](https://github.com/lifegadget/ui-button) - this is a lightweight button Ember component we have also written ... its used here for the hamburger button.

## Approach ##

- **Animations**. Rather than using JS resources such as liquid-fire, we will use CSS transformations for all animations. 
- **Block/Inline**. The goal is to provide an *inline* solution that works 95% of the time but because everyone has their little "must haves" we do allow you to open up the components as block components.

## Components ##

### ui-navmenu ###

This is the primary/master component. If you can live with the "inline" implementation than this is the only component you'll need. 


## Version Compatibility

This may very well work with older version of Ember and Ember-CLI but it was intended for:

- Ember 1.11.0+
- Ember-CLI 0.2.2+