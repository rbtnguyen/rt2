Thanks for checking this out some notes:

To get started

```
yarn install
yarn start
```

Links:
[CodeSandox Live Preview](https://6n725p.csb.app/)
[Sandbox/Code](https://codesandbox.io/p/sandbox/quizzical-mendel-6n725p)
[Netlify Preview](https://master--harmonious-speculoos-cb9303.netlify.app/) <-Deployed it here just b/c CodeSandbox behaves a little unpredictably for me performance-wise


- The prompt specified animated but I don't think it explicitly said all the animation had to be of uniform speed so I opted to make them all slightly different speeds. Since it's not to fast I think grabs the attention while also not being too distracting. I prefer this now but I would understand if uniform speed might be a better option (in which case uncomment line 20 of PillRow.tsx would fix that).

Things I would try to improve given more time:

- Maybe slow down row shift animation on hover instead of just pausing animation (though I think options are limited using anaimations)
- Get rid of TS any types
- Rethink pill-data data structure
- Make PillGroup into separate file
- Improve experience on mobile (increase pill size? maybe no animation at all or replace with horizontal scrolling for touch?)
- Refactor div soup with more semantic elements (ul, a, button, section, eg)
- Allow something like markdown for modal body in order to produce formatting like line breaks, hyperlinks
- I mixed some styled components with vanilla css to allow some props to be passed to the animation of PillRows. Might rethink that to have a more consistent pattern
- Add alt tags for logo images, though maybe not necessary because company name sits next, could be redundant for screen readers and a11y tools
- Use more css variables and css classes, instead of targeting elements
- Revisit the modal, did that very quickly, allow click outside modal to close (Modal images have delayed loading in only CodeSandbox, look into that)