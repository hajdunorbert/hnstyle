## Card Component

### HTML Structure:

<div class="card">
    <div class="card-image">
        <img src="...">
    </div>
    <div class="card-title">
        ...
    </div>
    <div class="card-body">
        ...
    </div>
    <div class="card-footer">
        ...
    </div>
</div>

### Styles:

#### `.card`
- Styles for the card container.
  - `border-radius: 8px;`
  - `overflow: hidden;`
  - `box-shadow: 0 4px 8px #000;`
  - `border: 1px solid black;`

#### `.card-image img`
- Styles for the image inside the card.
  - `width: 100%;`
  - `object-fit: cover;`

#### `.card-title`
- Styles for the card title.
  - `padding: 10px;`
  - `font-weight: 600;`

#### `.card-body`
- Styles for the card body.
  - `padding: 10px;`

#### `.card-footer`
- Styles for the card footer.
  - `padding: 10px;`

#### `.card-ns` (Optional)
- Style to remove box shadow from the card.
  - `box-shadow: none;`

#### `.card-nb` (Optional)
- Style to remove border from the card.
  - `border: 0;`

### Usage Tips:

- The `border-radius: 8px;` gives a rounded corner appearance to the card.
- `box-shadow: 0 4px 8px #000;` adds a subtle shadow for depth.
- Adjust the `width: 100%;` and `object-fit: cover;` to control the image inside the card.
- Customize the `font-weight` and `padding` for the title, body, and footer based on your design preferences.
- `.card-ns` and `.card-nb` classes are optional and can be used to remove the box shadow or border if needed.

## Card Component END
