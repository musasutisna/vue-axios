<h1 align="center">Vue Axios</h1>

VueAxios is based on **Vue 3** with composition style codes and compatible with axios library version **1.75**

## Getting started

Lets install vue-axios with npm

```
npm install --save @musasutisna/vue-axios
```

## Libraries

- Axios, manage Axios configurations efficiently.

| Method | Type | Description |
|:--|:--|:--|
| apiGET | async | Sends a GET request. |
| apiPOST | async | Sends a POST request. |
| apiPUT | async | Sends a PUT request. |
| apiDELETE | async | Sends a DELETE request. |

```js
const config = axios.create({
  baseURL: 'http://baseurl',
  headers: {
    'Authorization': `Bearer token`
  }
})

const myAPI Axios(config)
```

## Stores

- Message, managing messages process and result from requests.

| Property | Type | Description |
|:--|:--|:--|
| loading | Object | A collection of loading messages. |
| loading[].display | Boolean | Indicates whether the loading message is displayed. |
| loading[].text | String | The text of the loading message. |
| loading[].icon | String | A unique icon for the loading message. |
| loading[].prefix | String | Prefix text for the loading message. |
| loading[].suffix | String | Suffix text for the loading message. |
| warning | Object | A collection of warning messages. |
| warning[].display | Boolean | Indicates whether the warning message is displayed. |
| warning[].text | String | The text of the warning message. |
| warning[].icon | String | A unique icon for the warning message. |
| warning[].prefix | String | Prefix text for the warning message. |
| warning[].suffix | String | Suffix text for the warning message. |

| Method | Type | Description |
|:--|:--|:--|
| toToggleLoading | function | Toggles the display of loading messages or adds a new one. |
| toToggleWarning | function | Toggles the display of warning messages or adds a new one. |

```js
// add a new loading message
message.toToggleLoading(
  '/id',
  { text: 'this a text loading' }
)

// to hide loading message has been added
message.toToggleLoading(
  '/id',
  { display: false }
)

// add a new warning message
message.toToggleWarning(
  '/id',
  { text: 'this a text warning' }
)

// to hide warning message has been added
message.toToggleWarning(
  '/id',
  { display: false }
)
```