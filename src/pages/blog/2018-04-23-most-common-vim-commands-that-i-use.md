---
date: "2018-04-23"
title: A short list of the most common Vim commands that I use
template: "blog_post"
featuredImage: "2018-04-23.jpg"
photoCredit: 
  name: Dawid Zawila
  unsplashUrl: https://unsplash.com/@davealmine
---

[Vim](https://www.vim.org/) is an old-school editor that's inspired by [vi](https://en.wikipedia.org/wiki/Vi), the built-in editor on Linux terminals/shells. It's extremely powerful and designed with speed in mind, so practically everything can be done without using a mouse, via shortcuts and commands. 

A lot of people get frustrated right out of the gate and give up on it forever, but the brave souls that have stuck with it for at least a week and learned the basic commands are almost always diehard, lifelong users - including myself. 

<div style="background-color: #eee; font-size: 18px; padding: 20px; margin: 20px 0; border-left: 5px solid #555; color: #444; line-height: 30px; font-weight: 100;"><strong>Disclaimer</strong>: I use the <a href="https://github.com/VSCodeVim/Vim" target="_blank" rel="noopenner noreferrer nofollow">Vim VS Code plugin</a> for the following commands, so they may work differently in the standard Vim editor. Though most people that follow my blog are JavaScript and ReasonML develoeprs and probably use VS Code anyways! </div>


<div style="background-color: #eee; font-size: 18px; padding: 20px; margin: 20px 0; border-left: 5px solid #555; color: #444; line-height: 30px; font-weight: 100;"><strong> Disclaimer 2</strong>: There are so many commands available and there are probably much better and faster ways to use Vim than these, but I stick to these for the most part and strive to reduce my cognitive load on typing as much as possible while getting the job done fast. If you're a <i>real</i> Vim diehard, please don't scoff at me too hard. Here's another awesome <a href="https://vim.rtorr.com/" target="_blank" rel="noopenner noreferrer nofollow">Vim cheat sheet</a> worth checking out.</div>

### Modes
Vim has three modes: normal, input and visual.

- "normal" mode is for saving/closing files and navigating through the file (and folders if you're an advanced user)
- "input" mode is for writing text
- "visual" mode is for selecting/highlighting groups of text

A normal workflow between the modes is to move around the file with normal mode, and once you find the place that you want to add text, you switch into input mode, add the text and then go back to normal mode and save the file.

Visual mode is for selecting text in groups, such as remove an entire paragraph (instead of holding down backspace for a long time).


<span id="commands"></span>

### Normal mode

This is the default mode in Vim, where you can navigate through and manipulate files and move around text.

> Note: you won't be able to add new text until you enter "input" mode, which we discuss below.

#### Moving around

- `h` - move left 
- `l` - move right
- `j` - move down
- `k` - move up
- `gg` - jump to top of the file
- `G` - jump to bottom of the file
- `<num>G` - jump to a specific line, i.e. `5G` will take you to line
- `B` - jump to beginning of word
- `E` - jump to end of word
- `W` - jump to beginning of next word
-  `0` - jump to beginning of line
-  `$` - jump to end of line

#### Commands
- `u` - undo
- `p` - paste
- `x` - cut/backspace
- `dd` - cut line
-  `ESC` - switch from input mode to normal mode
-  `J` - join this line with the line below
-  `r` - replace one character, i.e. `re` will replace the character that you're cursor is over with the letter `e`
- `:w` - save the file
- `:wq` - save and close the file

### Input mode
"Input" mode is for typing/inputting new text. Since there aren't really any commands that you'll use *in* this mode (since you'll just be typing text), let's discuss shortcuts on how to *access* input mode.

#### Entering input mode from "normal" mode

-  `I` - jump to beginning of line and enter input mode
-  `A` - jump to end of line and enter input mode
-  `i` - start cursor on left and enter input mode
-  `a` - start cursor on right and enter input mode
-  `O` - create new line above, jump to it and enter input mode
-  `o` - create new line below, jump to it and enter input mode
-  `ea` - jump to end of word and enter input mode
-  `bi` - jump to beginning of word and enter input mode
-  `C` - cut rest of line and enter input mode
-  `cw` - cut word and enter input mode

### Visual mode
Visual mode is really powerful, because you can manipulate large or small groups of text to work even faster. Each of these commands will start the selection, which can then be moved around to expand the range as needed, i.e. `vw` will highlight a word. 

- `v` - select one character
- `V` - select line
- `v{` - select previous block/paragraph
- `v}` - select next block/paragraph

### Unlocking the power of Vim commands
All of these commands are designed to be used together, and you can use numbers before the command to indicate how many times you would like to run it, i.e. `2yy` will select two lines, `3dd` will cut 3 lines, `v}x` will cut the next paragraph, etc.

### Conclusion
Vim rocks and you should at least do yourself a favor and try it out on a passion project for a week that you're not in a hurry to finish. Learning these simple commands will speed up your development time, reduce wrist pain (at least it has with me, especially when on a laptop) and is *really* fun to use. Happy coding! **SL**