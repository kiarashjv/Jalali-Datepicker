# Jalali-Datepicker

This is a custom-built datepicker designed for simplicity and ease of use. It provides a clean, intuitive interface for users to select dates, and it's highly customizable to fit the needs of your project.

## Features

- **No External Dependencies**: This datepicker does not require any external libraries or resources, making it ideal for embedded use.
- **Date Conversion**: The datepicker includes built-in functionality for converting dates from Gregorian to Jalali and vice versa.
- **Dynamic Positioning**: The datepicker opens centered below the `selectedDate` element, providing a seamless user experience.
- **Month Navigation**: Navigate through months using the `prevMonth` and `nextMonth` buttons. The datepicker automatically handles year increment/decrement when navigating between December and January.
- **Month Selector Mode**: Easily switch between months using the month selector.
- **Year Selector Mode**: Easily switch between years using the year selector.
- **Responsive Design**: The datepicker is designed to be responsive and works well on both desktop and mobile devices.

## Usage

To use this datepicker, simply include the JavaScript and CSS files in your HTML file. You can then initialize the datepicker on any element using its ID:

```javascript
var selectedDateElement = document.getElementById('selectedDate');
```
When the selectedDate element is clicked, the datepicker will open centered below the selectedDate element. The user can then select a date, and the datepicker will close, displaying the selected date in the selectedDate element.

## Customization
The look and feel of the datepicker can be customized by modifying the CSS file. You can change the colors, fonts, sizes, and more to match the style of your website or application.

## Conclusion
This custom datepicker is a simple, intuitive, and customizable solution for date selection in your web projects. It's easy to use and integrate into your existing projects, and it provides a great user experience. Give it a try!
