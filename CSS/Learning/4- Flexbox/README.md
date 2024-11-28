# Flexbox Learning Project

This project demonstrates the use of CSS Flexbox properties to create dynamic, responsive layouts. Below are the concepts covered and what each property does.

## Concepts Covered

### 1. Default Flex (row)

- **Property**: `display: flex;`
- **Description**: Aligns items in a row by default.

### 2. Flex Direction (column)

- **Property**: `flex-direction: column;`
- **Description**: Changes the layout direction to column (vertical alignment).
  - `column-reverse`: Reverses the item order in the column.

### 3. Justify Content (space-between)

- **Property**: `justify-content: space-between;`
- **Description**: Distributes items evenly, with the first item at the start and the last at the end.

### 4. Align Items (center)

- **Property**: `align-items: center;`
- **Description**: Aligns items vertically to the center of the container.

### 5. Flex Wrap (wrap)

- **Property**: `flex-wrap: wrap;`
- **Description**: Moves items to the next row when there isn't enough space.

### 6. Align Content (space-around with wrap)

- **Properties**:
  - `flex-wrap: wrap;`
  - `align-content: space-around;`
- **Description**: Aligns wrapped rows with even spacing around them.

### 7. Order Property

- **Property**: `order: <value>;`
- **Description**: Changes the visual order of items without affecting their source order.

### 8. Flex Grow

- **Property**: `flex-grow: <value>;`
- **Description**: Specifies how much an item should grow relative to others.

### 9. Align Self

- **Property**: `align-self: <value>;`
- **Description**: Aligns an individual item differently from others.
  - Possible values: `flex-start`, `flex-end`, `center`, `stretch`.

---

## How to Use

1. Clone the repository.
2. Open `index.html` in your browser.
3. Explore the examples to see how each Flexbox property works.

---

## Key Learnings

- Flexbox simplifies responsive design.
- Properties like `justify-content` and `align-items` provide precise control over alignment.
- `flex-wrap` and `flex-grow` allow dynamic layouts across different screen sizes.
