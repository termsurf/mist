
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

<p align='center'>
  <img src='https://github.com/teamtreesurf/mist/blob/make/view/view.svg?raw=true' height='256'>
</p>

<h3 align='center'>
  mist
</h3>
<p align='center'>
  Public Domain Words and Texts for Conlangs
</p>

<br/>
<br/>
<br/>

<h3 id="summary">Summary</h3>

This project has some files to get you started in creating your conlang. See the text folder. Use the [tone script](https://github.com/teamtreesurf/tone) to write your language words and sentences phonologically.

There are already some great guides on the web explaining how to create a conlang. What is mostly missing though are lists of words and lists of sentences, and potentially some simple stories, which you could translate into your conlang to bootstrap its development. This "mist" project is exactly that, collecting lists of simple words (nouns, verbs, adjectives, adverbs, prepositions, and determiners, in English), simple sentences, and a few simple stories which you could translate into your conlang or fantasy language to help get your mind working and developing your language's rich features.

- [Words](https://github.com/teamtreesurf/mist/tree/make/text/list/word)
- [Sentences](https://github.com/teamtreesurf/mist/tree/make/text/list/sentence)
- [Stories](https://github.com/teamtreesurf/mist/tree/make/text)

_FYI, the "full" word lists will always be in the process of being developed/curated, but the 1000 word lists are pretty complete, though could use another pass or two down the road to double check._

First, we have **words**. For "open classed words", words in which there are potentially endless amounts of them (nouns, verbs, adjectives, and adverbs), we have created 4 lists: a list of 10 key easy words to start off with translating, a list of 100 easy words with which you can extend your lexicon, a list of 1000 of the most common or simple words in the category, and a "full" list of words, which is every word we could possibly find in that category (and potentially some miscategorized or wrong words which we need to filter out (send a pull request to help us filter them out if you can!)). For "closed class words", like prepositions and determiners, we have just a full list, since there are so few of them and yet they are almost all important to include in your lexicon.

Then we have a bunch of **sentences**, ranging from very simple sentence structures to semi-complex sentence structures. We don't have really long sentences (like some of those in this readme, haha), because you are just getting started building your lexicon and practicing with your new grammar in theory, and those types of sentences might be overwhelming when trying to translate at the beginning. If you need long sentences with complex words, just copy random sentences from Wikipedia. What we have done instead, here, is write sentences using extremely basic words, with a generally positive vibe, so you can focus on your grammar and sentence structure and not on having to translate thousands of words before you can get to handling your sentences.

Finally, we have a few **stories** to round things out. Generally speaking, some of these stories are extremely basic in terms of vocabulary and sentence structure, as if they were among the first stories you ever read or tried translating, while others are more complex and subtle in their use of language, and then there is at least one poem. All generally don't use complex vocabulary, so again you can focus on your sentence structure handling and not on the lexicon at this stage.

So that's about it! Clone this repo onto your computer and start adding your translations to the CSV files or to the markdown files directly, and if you are so inclined, share your work by publishing it along with any other documents you create on GitHub, like this repo!

```bash
git clone git@github.com:teamtreesurf/mist.git
```

We are currently working on a custom language to aid in mathematical and computational thinking over at [the tune project](https://github.com/teamtreesurf/tune), to give you an example. While we started working on the tune language way before creating this talk repo, we aim to go back and forth between the projects, sharing what we learn in creating our first conlang by putting the tools into this talk repo as we discover things we need. Hopefully down the road we have a solid collection of words, sentences, and stories collected through the community to share with everyone, so newcomers and the old alike can get a quickstart into conlang creation.

_Note: some initial inspiration / word sources came from around the web, from places like [this](https://www.reddit.com/r/conlangs/comments/hy5f0z/625_words_to_get_your_conlang_going/)._

### Submit Fixes and Improvements

Please help us curate the best words and sentences for easy translation! Here are a few things you can quickly do to help out.

1. **Add missing words.** For each category (noun, verb, adjective, etc.) add any missing words. For example, you can do `node code/uniq adjective/full`, after you've added some adjectives to the `full` list, and it will remove any duplicates (so it's easier to just add words and worry about if they are duplicates later).
2. **Remove junk words.** Sometimes there will be a non-noun in the noun file, or a junk word. Please flag these and remove them.
3. **Curate quality words.** Think of what words are "best", that is words that are "simple", "basic", and really easy to understand and translate. For the 10 word list, this should be the simplest of simpl words. For the 100 word list, some more. For the 1000 word list, this should be the simplest 1000 words you can think of. It's hard to figure out what counts as a simple easy to understand word, but if you have opinions here, feel free to submit PRs.

<h3 id="license">License</h3>

<p xmlns:dct="http://purl.org/dc/terms/" xmlns:vcard="http://www.w3.org/2001/vcard-rdf/3.0#">
  <a rel="license"
     href="http://creativecommons.org/publicdomain/zero/1.0/">
    <img src="http://i.creativecommons.org/p/zero/1.0/88x31.png" style="border-style: none;" alt="CC0" />
  </a>
  <br />
  <br />
  To the extent possible under law,
  <a rel="dct:publisher"
     href="https://github.com/teamtreesurf/talk">
    <span property="dct:title">TreeSurf</span></a>
  has waived all copyright and related or neighboring rights to
  <span property="dct:title">Seed</span>.
This work is published from the
<span property="vcard:Country" datatype="dct:ISO3166"
      content="US" about="https://github.com/teamtreesurf/talk">
  United States</span>.
</p>

Basically, the content in this toolkit is totally free to use for whatever purpose you want, no matter what.

<h3 id="mount">TreeSurf</h3>

The talk project is being developed by the folks at [TreeSurf](https://drum.work), a California-based project for helping humanity master information and computation. TreeSurf started off in the winter of 2008 as a spark of an idea, to forming a company 10 years later in the winter of 2018, to the start of a project just beginning its development phases. TreeSurf funds talk's development. It is entirely bootstrapped by working full time and running [Etsy](https://etsy.com/shop/teamtreesurf) and [Amazon](https://www.amazon.com/s?rh=p_27%3AMount+Build) shops. Also find us on [Facebook](https://www.facebook.com/teamtreesurf), [Twitter](https://twitter.com/teamtreesurf), and [LinkedIn](https://www.linkedin.com/company/teamtreesurf). Check out our other GitHub projects as well!
