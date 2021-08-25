# Task Result - Meme Generator

## Demo

https://meme-generator-nz.web.app/

## Used technologies / Frameworks

- **JavaScript**
  I chose JavaScript because it is a very versatile language. I love that it can be used in a very broad range or proyects: web and mobile development, front & back-end etc...
  _“Any application that can be written in JavaScript, will eventually be written in JavaScript.”_ - Jeff Atwood.
  My knowledge of JS: very good (ES6, Async/Await + Promises etc)

- **ReactJS**
  I am focusing on working in React framework in all of my projects because it gives advantage of using reusable components - you can scale and maintain and app much easier than in plain JS. Besides that, it has a big community of users, which means more updates and faster bug fixes, various 3rd party libraries, support etc.
  My knowledge of React: very good (class based & functional components, e.g. hooks, React Router, Redux & Redux Toolkit, styled components etc)

## Used 3rd Party Libraries

I use the following 3rd party libraries in my project:

| Name                                                                 | Reason                                                                                           |
| -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| [lodash](https://lodash.com/)                                        | Making deep copies of objects in one simple function (Redux state update without state mutation) |
| [react-colorful](https://omgovich.github.io/react-colorful/)         | For simple and lightweight color picker                                                          |
| [react-debounce-input](https://github.com/nkbt/react-debounce-input) | Debounce canvas update on typing in input                                                        |
| [styled-components](https://styled-components.com/)                  | CSS for components (easy dynamic CSS change)                                                     |
| [react-redux](https://react-redux.js.org/)                           | Global state management across all components ( + Redux Dev Tools to see all state and actions)  |

## Installation / Run

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

---

The following components must be installed locally:

- [nodejs](https://nodejs.org/) v14.17.3 and higher

- [npm](https://www.npmjs.com.) v6.14.13 and higher

To run the project locally, enter the following in the command line / bash:

```console

$ git clone https://github.com/nastiazhyrnova/meme-generator.git

$ cd meme-generator

$ npm install

$ npm start

```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.

---

## Documentation

### Styles

- `index.css`: custom font import
- All components CSS and global styles are implemented with the 3rd party library `styled-components`:
  - **`<GlobalStyle />`**: Global styles, includes color palette variables
  - **`textChangeFieldsStyle.js`**: mixin of styles for text handlers (text input, size, font etc)
- The rest of the styles are implemented inside of the components

---

### UI Components

-- **`<Button></Button>`**: styled button, all atributes are passed via `props` to the `<button>` element. Additional props accepted:

| Props       | Description                 | Type                       |
| :---------- | :-------------------------- | :------------------------- |
| `bgColor`   | Overwrites background color | _string_ (CSS color value) |
| `textColor` | Overwrites text color       | _string_ (CSS color value) |

-- **`<FlexColumn></FlexColumn>`**: wrapper to style children components with `flex`, direction _column_. Props accepted:

| Props | Description         | Type                            |
| :---- | :------------------ | :------------------------------ |
| `gap` | Overwrites gap size | _string_ with CSS measure units |

-- **`<FlexRow></FlexRow>`**: wrapper to style children components with `flex`, direction _row_. Props accepted:

| Props    | Description         | Type                            |
| :------- | :------------------ | :------------------------------ |
| `gap`    | Overwrites gap size | _string_ with CSS measure units |
| `height` | Overwrites height   | _string_ with CSS measure units |

-- **`<Input />`**: styled `<input>` with 400 ms debounce. All atributes are passed via `props` to the `<input>` element.

-- **`<Select></Select>`**: styled `<select>`. All atributes are passed via `props` to the `<select>` element. Wrapper for all `<option>` elements. Additional props accepted:

| Props   | Description           | Type                            |
| :------ | :-------------------- | :------------------------------ |
| `width` | Overwrites width size | _string_ with CSS measure units |

---

### Functional Components

**`<Generator/>`**: main parent component for the meme generator. Handles uploaded original image state locally. Includes title, all children components and buttons to _Reset all_ or _Download_ finished image. No props needed.

-- **`<ImageUpload />`**: button to upload image (JPG) and initial image processing. Props accepted:
| Props | Description | Type |
|:--|:--|:--|
| `uploadImageHandler`*| Passes image file up to the parent component | *function\* with event parameter. |

-- **`<Canvas />`**: HTML `<canvas>` element. Changes `<canvas>` width depending on the window size and updates `<canvas>` on user input. Props accepted:

| Props     | Description                     | Type               |
| :-------- | :------------------------------ | :----------------- |
| `image`\* | Original image uploaded by user | _HTMLImageElement_ |

-- **`<TextInput />`**: parent component to all text handlers (text input, size, font and color change components). All atributes are passed via `props` to the `<input>` element. Additional props accepted:
| Props | Description | Type |
|:--|:--|:--|
| `textlocation`* | Value `'top'` or `'bottom'` indicates which of the two text handlers it is | *string\* |

- **`<Font />`**: `<Select>` component with font options dropdown. All atributes are passed via `props` to the `<select>` element. Additional props accepted:

| Props            | Description                                                                | Type     |
| :--------------- | :------------------------------------------------------------------------- | :------- |
| `textlocation`\* | Value `'top'` or `'bottom'` indicates which of the two text handlers it is | _string_ |

- **`<FontSizes />`**: `<Select>` component with font sizes dropdown. All atributes are passed via `props` to the `<select>` element. Additional props accepted:

| Props            | Description                                                                | Type     |
| :--------------- | :------------------------------------------------------------------------- | :------- |
| `textlocation`\* | Value `'top'` or `'bottom'` indicates which of the two text handlers it is | _string_ |

- **`<FontColor />`**: Parent component for the color picker. Includes `<button>` with dynamic color change and state and event handler to open the color picker. All atributes are passed via `props` to the `<button>` element. Additional props accepted:

| Props            | Description                                                                | Type     |
| :--------------- | :------------------------------------------------------------------------- | :------- |
| `textlocation`\* | Value `'top'` or `'bottom'` indicates which of the two text handlers it is | _string_ |

- **`<ColorPicker />`**: Opened color picker pop-up with transparent background. Includes `<button>` with dynamic color change and event handler to open the color picker. Props accepted:

| Props                | Description                                                                | Type       |
| :------------------- | :------------------------------------------------------------------------- | :--------- |
| `textlocation`\*     | Value `'top'` or `'bottom'` indicates which of the two text handlers it is | _string_   |
| `showColorPicker`\*  | Shows color picker pop-up                                                  | _boolean_  |
| `closeColorPicker`\* | Passed as `onClick` event to the invisible background                      | _function_ |

\*_Requiered prop_

---

### Redux State

Global state in this project is manager with Redux store `store.js`.
All action types are saved as variables in `action-types.js`.

#### Reducers:

- `canvasSizeReducer` : manages `<canvas>` width and height change when window is resized. (Action type: `CHANGE_CANVAS_SIZE`)
- `canvasImageReducer` : uploads updated canvas image to the Redux store after user changes. (Action types: `SET_CANVAS_IMAGE`, `CLEAR_CANVAS_IMAGE`)
- `textReducer` : manages all text input information by user for both, top and bottom text blocks (text, color, font, size). (Action types: `CHANGE_COLOR`, `CHANGE_TEXT`, `CHANGE_FONT`, `CHANGE_FONTSIZE`, `RESET_TEXTS`).

---

### Utility functions

- `canvas.js`: includes: `writeCanvasText (textlocation, canvasContext, textObject, canvasWidth, canvasHeight)` function to change top or bottom text on the canvas. Parameters:

| Parametert      | Description                                                                                               | Type     |
| :-------------- | :-------------------------------------------------------------------------------------------------------- | :------- |
| `textlocation`  | Value `'top'` or `'bottom'` indicates which of the two text handlers it is                                | _string_ |
| `canvasContext` | `<canvas>` context object                                                                                 | _object_ |
| `textObject`    | Object with following structure: `{ text: [string], font:[string], fontSize: [string], color: [string] }` | _object_ |
| `canvasWidth`   | Width of the canvas in px                                                                                 | _number_ |
| `canvasHeight`  | Height of the canvas in px                                                                                | _number_ |

- `imageSize.js`:
  - `getMinImageSize (uploadedImageWidth, uploadedImage, canvasSideSize)` : analyses original uploaded image size and calculates minimum size to fit the canvas. Returns following array: `[minWidth, minHeight]`, type _number_.
  - `getOffsetCoordinates (minImageWidth, minImageHeight)` : analyses minimum image size and if it is not square, calculates offset in coordinates to place center of the image in the center of the canvas. Returns following array: `[x, y]`, type _number_.

## Author

Developed by Nastia Zhyrnova https://github.com/nastiazhyrnova/
