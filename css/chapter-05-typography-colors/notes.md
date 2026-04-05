# Chapter 5: Typography, Colors, And Backgrounds

## Why These Three Matter Together

Typography, colors, and backgrounds are the main tools that make an interface feel readable and intentional.

If layout is the structure of a room, these choices create the mood.

## Typography

Typography controls how text feels on screen.

Important properties include:

- `font-family`
- `font-size`
- `font-weight`
- `line-height`
- `letter-spacing`

### Example

```css
body {
  font-family: Georgia, serif;
  line-height: 1.7;
}
```

## Colors

Colors help create hierarchy and draw attention.

A good beginner rule:

- one main text color
- one accent color
- one soft background color

### Example

```css
.accent {
  color: #0f766e;
}
```

## Backgrounds

Backgrounds can separate sections and add atmosphere.

### Example

```css
.hero {
  background: linear-gradient(180deg, #fff7ed, #ffedd5);
}
```

## Visual Thinking

```text
Heading: strong and large
Body text: softer and smaller
Button: accent color
Section background: gentle support, not noise
```

## Real-World Analogy

- typography is like your speaking tone
- color is like lighting in a room
- background is like the wall and floor setting around the conversation

## Best Practices

- keep body text comfortable to read
- use contrast that works well
- limit the palette so the page feels consistent
- make sure accent colors support actions and headings clearly

## Common Mistakes

- using too many different font styles
- using low-contrast text on light backgrounds
- choosing colors that fight for attention

## Professional Frontend Tip

Many good interfaces are not using complicated styles.
They are using a few clear choices very consistently.

## Tailwind Preparation

Later, these ideas become utility choices such as text size, font weight, text color, background color, and tracking.
The framework syntax changes, but the design thinking stays the same.
