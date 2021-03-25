## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps

HTML
1) Page Layout
    - Why? Get Things started
    - How? Basic structure
2) Explain the rules
    - Why? Tell user what to do
    - How? div or p
3) Input
    - Why? Let user input a number
    - How? input
4) Button
    - Why? On click, tell if user is close to number
    - How? button
5) Number of tries
    - Why? Tell user how many guesses before game is over
    - How? div or p
6) Too High or Too Low
    - Why? Tell use how close they are
    - How? div or p
7) Win or Lose
    - Why? Tell user game is over
    - How? alert or div

Initialize State:
1) Random Number
    - math.round(math.random()*20)

Events:
1) What happens when click?
    - Compare numbers
    - Decrease number of tries
        - chances--
    - Change text Too high or Too low
