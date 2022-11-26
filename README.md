<p align="center">
  <img src="https://user-images.githubusercontent.com/67408018/202010497-db722491-f1c7-49cd-9aa3-7c25287aba11.png"/>
</p>

# <p align="center">**ezPointers**</p>

<p align="center"> <i>ezPointers is a lightweight, free and open-source JavaScript library to create beautiful mouse pointers with customised effects.</i> </p>

### ***Table of Contents***
- [Demo](#demo)
- [Using ezpointers...](#using-ezpointers)
  - [import functions](#1-import-functions-from-npm-package)
  - [create pointer](#2-create-mouse-pointer-element)
  - [***customize pointer element***](#3-movecustomize-pointer-element)
- [React Sample code](#react-sample-code)
- [Contributing](#contributing)
  - [Creating a PR](#creating-a-pr)
  - [Code format & preferences](#code-format--preferences)
  - [Commit message format](#commit-message-format)

Tested with React.

### ***Demo***
Demo for Round Pointer:

https://user-images.githubusercontent.com/67408018/202010052-7701596a-50a8-4e2d-ac29-c02f71c4152b.mp4

Demo for Shoot Pointer:

- Transition with 0s ( movePointerShoot{transition : "0s"} )->

https://user-images.githubusercontent.com/67408018/202190510-d876f5c7-98a7-4fbe-b9b0-1d8d7462d6db.mp4

- Transition with 0.1s ( movePointerShoot{transition : "0.1s"} )->

https://user-images.githubusercontent.com/67408018/202190573-63a0a9a1-e5ba-45ea-9f63-69413f16adec.mp4

## ***Using ezpointers...*** 

Install npm package

```
npm install ezpointers
```

### 1. Import functions from npm package

For Round Pointer:

```
import { initRound, movePointerRound } from "ezpointers";
```

For Shoot Pointer:

```
import { initShoot, movePointerShoot } from "ezpointers";
```

### 2. Create mouse pointer element

```
initRound();  // Can also pass custom id name , initRound("your-mouse-id");
//OR initShoot();
```

### 3. Move/Customize pointer element

#### _Default parameters: To use default mouse pointer with default parameters._

- color : "white", //background color
- width : "3.5rem",
- height : "3.5rem", //adjust for round size
- transition : "0.2s", //adjust for transition speed
- transitionDuration : "100ms",
- mixBlendMode : "difference",
- zIndex : 100,
- borderRadius : "9999px",
- leftOffset : 30,
- topOffset : 30,

```
//For Round pointer
movePointerRound({}); // Pass this empty object for default pointer

//For Shoot Pointer
movePointerShoot({});
```

#### _Customize mouse pointer:_

- For eg: Black pointer with default parameters

```
movePointerRound({ color: "black" });
```

- For eg: Black pointer with bigger size & rest with default parameters

```
movePointerRound({ color: "black", width: "5rem", height: "5rem" });
```

## ***React Sample code***

- #### _Round Pointer_

```
import React, { useEffect } from "react";
import { initRound, movePointerRound } from "ezpointers";

initRound();

function Work() {
  useEffect(() => {
    movePointerRound({});
  });
  return <div>Namaste World</div>;
}

export default Work;

```

- #### _Shoot Pointer_

```
import React, { useEffect } from "react";
import { initShoot, movePointerShoot } from "ezpointers";

initShoot();

function Work() {
  useEffect(() => {
    movePointerShoot({});
  });
  return <div>Namaste World</div>;
}

export default Work;

```

## ***Contributing***

We welcome and appreciate new contributions. All changes should be committed to `*.js` files only. If you want to add new CSS/JS files please mention in Readme/create a new issue for reference. Before you open an issue please review below guidelines.

#### Anyone

- Have a look at this Readme. Can it be improved? Do you see typos? You can open a PR or reach out to me at vaibhav.garg237@gmail.com or twitter.

### Creating a PR

When creating a PR please take this points as a reminder:

- If there's not yet an issue for your PR please first [create an issue](https://github.com/vaibhavgarg237/ezPointers/issues/new) with a proposal what you would like to do. This will allow me to give feedback and help you no wasting time and motivation
- Think in iterations (babysteps)\
  You can always start a PR and if you feel like adding on more things to it, better branch off and [create a new i.e. _draft_-PR](https://github.blog/2019-02-14-introducing-draft-pull-requests/)
- If you work on a more complex PR please dm me on gmail/twitter to get feedback, discuss the best way to tackle the challenge, and to ensure that there's no duplication of work. It's often faster and nicer to chat or call about questions than to do ping-pong comments in PRs.

### Code format & preferences

- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io/) for code (and more) formatting

#### Code Editors

##### [VS Code](https://code.visualstudio.com/)

For better support we recommend these extensions:

- [vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [vscode-html-css](https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css)

### Commit message format

I prefer [Conventional Commits Specification](https://www.conventionalcommits.org/en/)

A specification for adding human and machine-readable meaning to commit messages
