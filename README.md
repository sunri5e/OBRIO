This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

For previewing app run command: `npm run build && npm start`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Survey data rules

```json
"questions": [
  {
    "id": "<string> identifier (also used as slug)",
    "questionText": "<string> title (can hold placeholders e.g. {gender})",
    "statement?": "<string> additional question info",
    "layout?": "<string> name of custom layout",
    "type": "<string> type of question answer (single-choice | input)",
    "options": "[<string>, <string>, ...] list of answers (used only with type 'single-choice')",
    "next": "<string> identifier of next question/disclaimer/result screen",
    "ignore?": "<boolean> if answer should not be stored",
    "mapping?": {
      "<placeholder>": "<string> ID of question which answer should be used",
      "<placeholder>": {
        "value": "<string> placeholder value",
        "equalTo": "<string> answer to compare with",
        "basedOn": "<string> ID of question which answer should be compared"
      }
    }
  },
]
```
