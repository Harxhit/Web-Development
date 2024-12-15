# Layout with Tailwind CSS

This project demonstrates the usage of Tailwind CSS to create responsive grid layouts. The layouts are divided into multiple sections showcasing two-column, three-column, and a central content design with sidebars.

## Features

1. **Two-Column Layout**:

   - Displays two responsive columns.
   - Adjusts to a single column on smaller screens.

2. **Three-Column Layout**:

   - Displays three columns.
   - Adjusts to a single column on smaller screens.

3. **Central Content with Sidebars**:
   - Central content spans most of the width.
   - Sidebars are hidden on smaller screens and visible on larger screens.

## Technologies Used

- **HTML**: The structure of the webpage.
- **Tailwind CSS**: For styling and responsive design.

## How to Use

1. Clone this repository.
   ```bash
   git clone <repository_url>
   ```
2. Ensure Tailwind CSS is installed and linked to the `style.css` file.
3. Open the HTML file in your browser to view the layouts.

## Tailwind Classes Used

- `grid`: Defines a grid container.
- `grid-cols-1`, `sm:grid-cols-2`, `sm:grid-cols-3`, `sm:grid-cols-12`: Specifies the number of columns for different breakpoints.
- `m-4`: Adds margin to the grid.
- `gap-4`: Adds spacing between grid items.
- `rounded-lg`: Applies rounded corners to elements.
- `min-h-[100px]`: Sets a minimum height for grid items.
- `shadow`: Adds a shadow effect to elements.
- `hidden`, `sm:block`: Controls visibility of elements at different screen sizes.

## Breakpoints in Use

- `sm`: For screens `640px` and wider.

## Example Output

The project contains three responsive sections:

1. **Two-column layout** that collapses to a single column on smaller screens.
2. **Three-column layout** with items stacked vertically on smaller screens.
3. **Central content with sidebars**, where the sidebars are hidden on small screens.
