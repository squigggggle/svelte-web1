# ID512 2023 Website
## Purpose
This website shows contains pictures of my cats, and a random cat image page.
The main learning purpose of this website was learn how the SvelteKit framework operates, while also learning JavaScript.
I have made this website responsive, with the tiles on the front page collapsing into column order when the viewport is small enough.
The nav bar will hide when scrolling down and reveal itself again when scrolling up, using a combination of Svelte and JavaScript.
I used the Fetch API to pull random cat images from Cat As A Service (CATAAS) and display them on their own page, which also features an update button to pull a new random cat image.
These design features were based off of websites I had found and put in [this design document](https://github.com/squigggggle/svelte-web1/blob/main/static/Web%20Assignment%20Example%20Sites.docx).
## Technology used
* HTML
* CSS
* JavaScript
* [SvelteKit](https://kit.svelte.dev/)
* [CATAAS](https://cataas.com/)
## Bugs
- Random cat image fetch sometimes fetches two images, shows the first one briefly and gets replaced by the second one
- Black fade between loading pages doesn't appear over the page content or hide the scroll bar, so it is possible to see the current page after clicking a link
  
![Black element covering screen fade bug](/static/fade-bug.png)
## Roadmap
- Add a loading indicator on the random cat page to indicate something is happening when the button is pressed.
- Fix the loading fade so that it covers the entire screen
- Be able to click my cats for more information, in another page or a pop-up
## References
"[How to hide a div element when scrolling up from any part of the page the svelte way?](https://stackoverflow.com/a/74777342)" answered by [IamFr0ssT](https://stackoverflow.com/users/7891382/iamfr0sst) is licenced under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)

"[What is the JavaScript version of sleep()?](https://stackoverflow.com/a/39914235)" answered by [Dan Dascalescu](https://stackoverflow.com/users/1269037/dan-dascalescu) is licenced under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
