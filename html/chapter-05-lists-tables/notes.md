# Chapter 5: Lists And Tables

## Lists

Lists are perfect for related items.

Use:

- `ul` for unordered lists
- `ol` for ordered lists
- `li` for each list item

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

```html
<ol>
  <li>Open the editor</li>
  <li>Write the HTML</li>
  <li>Preview in browser</li>
</ol>
```

## Tables

Tables are for structured data, not for page layout.

Good use cases:

- study timetable
- pricing chart
- marks table
- product comparison

## Real-World Analogy

- a shopping checklist is a list
- a school timetable is a table

## Table Example

```html
<table>
  <tr>
    <th>Day</th>
    <th>Topic</th>
  </tr>
  <tr>
    <td>Monday</td>
    <td>HTML</td>
  </tr>
  <tr>
    <td>Tuesday</td>
    <td>CSS</td>
  </tr>
</table>
```

## Best Practices

- use lists for grouped items
- use tables only for real data
- add clear table headings with `th`
- keep table content readable

## Mentor Tip

If you are tempted to use a table to arrange page sections side by side, stop. That is a layout problem, not a table problem.
