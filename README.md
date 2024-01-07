# Jalali-Datepicker / تقویم شمسی

This is a custom-built datepicker designed for simplicity and ease of use. It provides a clean, intuitive interface for users to select dates, and it's highly customizable to fit the needs of your project. This datepicker supports both Gregorian and Jalali (Persian) calendars.

این یک تقویم سفارشی است که برای سادگی و آسانی استفاده طراحی شده است. این تقویم یک رابط کاربری ساده و بصری برای انتخاب تاریخ ارائه می دهد و قابلیت سفارشی سازی بالایی برای تناسب با نیازهای پروژه شما دارد. این تقویم هم Gregorian و هم Jalali (Persian) را پشتیبانی می کند.

## Features / ویژگی ها

- **No External Dependencies / بدون وابستگی های خارجی**: This datepicker does not require any external libraries or resources, making it ideal for embedded use. این تقویم نیازی به کتابخانه ها یا منابع خارجی ندارد، که آن را برای استفاده درونی ایده آل می کند.
- **Date Conversion / تبدیل تاریخ**: The datepicker includes built-in functionality for converting dates from Gregorian to Jalali and vice versa. تقویم قابلیت تبدیل تاریخ از Gregorian به Jalali و برعکس را دارد.
- **Dynamic Positioning / موقعیت دینامیک**: The datepicker opens centered below the `selectedDate` element, providing a seamless user experience. تقویم در مرکز زیر عنصر `selectedDate` باز می شود، تجربه کاربری بی درزی را فراهم می کند.
- **Month Navigation / ناوبری ماه**: Navigate through months using the `prevMonth` and `nextMonth` buttons. The datepicker automatically handles year increment/decrement when navigating between December and January. با استفاده از دکمه های `prevMonth` و `nextMonth` در ماه ها ناوبری کنید. تقویم به طور خودکار افزایش / کاهش سال را هنگام ناوبری بین دسامبر و ژانویه اداره می کند.
- **Month Selector Mode / حالت انتخاب ماه**: Easily switch between months using the month selector. با استفاده از انتخابگر ماه به راحتی بین ماه ها تغییر دهید.
- **Year Selector Mode / حالت انتخاب سال**: EEasily switch between years using the year selector. با استفاده از انتخابگر سال به راحتی بین سال ها تغییر دهید.
- **Responsive Design / طراحی پاسخگو**: The datepicker is designed to be responsive and works well on both desktop and mobile devices. تقویم برای پاسخگو بودن طراحی شده است و در هر دو دستگاه رومیزی و موبایل خوب کار می کند.

## Usage / استفاده

To use this datepicker, simply include the JavaScript and CSS files in your HTML file. You can then initialize the datepicker on any element using its ID:

برای استفاده از این تقویم، کافی است فایل های JavaScript و CSS را در فایل HTML خود قرار دهید. سپس می توانید تقویم را روی هر عنصری با استفاده از ID آن مقداردهی اولیه کنید:

```javascript
var selectedDateElement = document.getElementById('selectedDate');
```
When the selectedDate element is clicked, the datepicker will open centered below the selectedDate element. The user can then select a date, and the datepicker will close, displaying the selected date in the selectedDate element.

وقتی عنصر selectedDate کلیک می شود، تقویم در مرکز زیر عنصر selectedDate باز می شود. کاربر سپس می تواند تاریخ را انتخاب کند و تقویم بسته می شود، تاریخ انتخاب شده را در عنصر selectedDate نمایش می دهد.
## Customization / سفارشی سازی

The look and feel of the datepicker can be customized by modifying the CSS file. You can change the colors, fonts, sizes, and more to match the style of your website or application.

ظاهر و احساس تقویم را می توان با تغییر فایل CSS سفارشی سازی کرد. شما می توانید رنگ ها، فونت ها، اندازه ها و بیشتر را تغییر دهید تا با سبک وب سایت یا برنامه شما مطابقت داشته باشد.

## Conclusion / نتیجه گیری

This custom datepicker is a simple, intuitive, and customizable solution for date selection in your web projects. It's easy to use and integrate into your existing projects, and it provides a great user experience. Give it a try!

این تقویم سفارشی یک راه حل ساده، بصری و قابل سفارشی سازی برای انتخاب تاریخ در پروژه های وب شما است. استفاده از آن آسان است و به راحتی در پروژه های موجود شما یکپارچه می شود و تجربه کاربری عالی را فراهم می کند. امتحانش کنید!
