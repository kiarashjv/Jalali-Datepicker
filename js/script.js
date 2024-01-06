document.addEventListener('DOMContentLoaded', function() {
    var date = new Date();
    var jalaliDate = gregorianToJalali(date.getFullYear(),date.getMonth()+1,date.getDate());
    var jalaliDate2= new Date().toLocaleDateString("fa-IR");
    var day = jalaliDate[2];
    var month = jalaliDate[1];
    var year = jalaliDate[0];

    var daysContainer = document.getElementById('days');
    var datepickerContainer = document.getElementById('datepicker-container');
    var selectedDateElement = document.getElementById('selectedDate');
    var submitDateButton = document.getElementById('submitDate');
    var cancelDateButton = document.getElementById('cancelDate');
    var dayElement = document.getElementById('day');
    var monthElement = document.getElementById('month');
    var yearElement = document.getElementById('year');


    var persianMonths = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];

    var activeDay = day;
    var activeMonth = persianMonths[month];
    var activeYear = year;
    var selectedDay=null;
    var selectedMonth=null;
    var selectedYear=null;
    var mode = 'day';


    selectedDateElement.textContent = englishToPersianNumbers(day + ' / ' + persianMonths[month] + ' / ' + year);


    function gregorianToJalali(gy, gm, gd) {
        var g_d_m, jy, jm, jd, g_day_no, j_day_no, j_np;
    
        g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        gy -= (gm > 2) ? 622 : 621;
        g_day_no = 365*gy + Math.floor((gy+3)/4) - Math.floor((gy+99)/100) + Math.floor((gy+399)/400);
        g_day_no += g_d_m[gm-1] + gd - 1;
    
        j_day_no = g_day_no - 79;
        j_np = Math.floor(j_day_no / 12053);
        j_day_no %= 12053;
    
        jy = 979 + 33*j_np + 4*Math.floor(j_day_no/1461);
        j_day_no %= 1461;
    
        if (j_day_no >= 366) {
            jy += Math.floor((j_day_no-1)/365);
            j_day_no = (j_day_no-1)%365;
        }
    
        for (jm = 1; jm <= 11 && j_day_no >= 31; ++jm)
            j_day_no -= (jm <= 6) ? 31 : 30;
    
        jd = j_day_no+1;
    
        jy -= 978;
    
        return [jy, jm, jd];
    }
    
    function jalaliToGregorian(jy, jm, jd) {
        let gy=0;
        if (jy > 979) {
            gy = 1600;
            jy -= 979;
        } else {
            gy = 621;
        }
        let days = (365*jy) + (((parseInt(jy / 33))*8) + (parseInt(((jy % 33) + 3) / 4))) + 78 + jd + ((jm < 7) ? (jm - 1) * 31 : ((jm - 7) * 30) + 186);
        gy += 400 * (parseInt(days / 146097));
        days %= 146097;
        if(days > 36524) {
            gy += 100 * (parseInt(--days / 36524));
            days %= 36524;
            if (days >= 365) days++;
        }
        gy += 4 * (parseInt((days) / 1461));
        days %= 1461;
        if (days > 365) {
            gy += parseInt((days - 1) / 365);
            days = (days - 1) % 365;
        }
        let gd = days + 1;
        let sal_a = [0, 31, ((gy % 4 == 0 && gy % 100 != 0) || (gy % 400 == 0)) ? 29 : 28 , 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        let gm;
        for (gm = 0; gm < 13; gm++) {
            let v = sal_a[gm];
            if (gd <= v) break;
            gd -= v;
        }
        return [gy, gm, gd];
    }
    

    function englishToPersianNumbers(input) {
        var persianDigits = "۰۱۲۳۴۵۶۷۸۹";
        var englishDigits = "0123456789";
        var englishMap = englishDigits.split("");
        return input.replace(/[۰-۹]/g, function(m) {
            return englishMap[persianDigits.indexOf(m)];
        });
    }


    function updateCalendar() {
        dayElement.textContent = day;
        monthElement.textContent = persianMonths[month];
        yearElement.textContent = year;
        daysContainer.innerHTML = '';
        daysContainer.style.gridTemplateColumns = 'repeat(7, 1fr)';
        selectedDay = selectedDateElement.textContent.split(' / ')[0];
        selectedMonth = selectedDateElement.textContent.split(' / ')[1];
        selectedYear = selectedDateElement.textContent.split(' / ')[2];


        var daysInMonth = month <= 6 ? 31 : (month <= 11 ? 30 : (year % 4 === 3 ? 30 : 29));

        for (var i = 1; i <= daysInMonth; i++) {
            var daysElement = document.createElement('span');
            daysElement.textContent = englishToPersianNumbers(i.toString());

            if (i == day && month == jalaliDate[1] && year == jalaliDate[0]) {
                if(!dayElement.classList.contains('active')){
                daysElement.classList.add('today');
                todayDayElement = daysElement;
                }
            }

            if (i == activeDay && selectedMonth == activeMonth) {
                if(daysElement.classList.contains('today')){
                    daysElement.classList.remove('today');
                }
                daysElement.classList.add('active');
            }

            daysElement.addEventListener('click', function(e) {
                e.stopPropagation();
                
                activeDay = Number(e.target.textContent);
                selectedDateElement.textContent = (activeDay + ' / ' + activeMonth + ' / ' + activeYear);
                updateCalendar();
            });

            daysContainer.appendChild(daysElement);
        }
    }

    // Add event listeners to the month and year elements
    dayElement.addEventListener('click', function() {
        mode = 'day';
        updateCalendar();
        //generateDayView();
    });
    monthElement.addEventListener('click', function() {
        mode = 'month';
        generateMonthView();
    });
    yearElement.addEventListener('click', function() {
        mode = 'year';
        generateYearView();
    });
    

     // Create the function to generate the day view
     function generateDayView() {
        // Clear the datepicker
        daysContainer.innerHTML = '';
        // Generate span for each month
        var daysInMonth = month <= 6 ? 31 : (month <= 11 ? 30 : (year % 4 === 3 ? 30 : 29));

        for (var i = 0; i < daysInMonth ; i++) {
            var span = document.createElement('span');
            span.textContent = englishToPersianNumbers(i.toString());
            span.addEventListener('click', function() {
                // When a month is clicked, set the active month and switch back to day mode
                activeDay = i;
                mode = 'day';
                
                generateDayView();
            });
            daysContainer.appendChild(span);
        }
    }   

    // Create the function to generate the month view
    function generateMonthView() {
        // Clear the datepicker
        daysContainer.innerHTML = '';
        daysContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
        // Generate span for each month
        for (var i = 0; i < persianMonths.length; i++) {
            var span = document.createElement('span');
            span.textContent = persianMonths[i];

            if (i == jalaliDate[1]) {
                span.classList.add('today');
            }
            if (persianMonths[i] == activeMonth) {
                span.classList.remove('today');
                span.classList.add('active');
            }
            span.addEventListener('click', function(e) {
                // When a month is clicked, set the active month and switch back to day mode
                e.stopPropagation(); // Add this line
                activeMonth = e.target.textContent;
                selectedDateElement.textContent = (activeDay + ' / ' + activeMonth + ' / ' + activeYear);
                mode = 'month';
                generateMonthView();
            });
            daysContainer.appendChild(span);
        }
    }
    
    // Create the function to generate the year view
    function generateYearView() {
        // Clear the datepicker
        daysContainer.innerHTML = '';
        daysContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
        // Generate span for each year in a range
        for (var i = year - 5; i <= year + 5; i++) {
            var span = document.createElement('span');

            if (i == jalaliDate[0]) {
                span.classList.add('today');
            }
            if (i == activeYear) {
                span.classList.remove('today');
                span.classList.add('active');
            }

            span.textContent = englishToPersianNumbers(i.toString());
            span.addEventListener('click', function(e) {
                // When a year is clicked, set the active year and switch back to month mode
                e.stopPropagation(); // Add this line
                activeYear = e.target.textContent;
                mode = 'year';
                selectedDateElement.textContent = (activeDay + ' / ' + activeMonth + ' / ' + activeYear);
                generateYearView();
            });
            daysContainer.appendChild(span);
        }
    }

        // Close the datepicker and save the selected date when the submit button is clicked
        submitDateButton.addEventListener('click', function() {
            datepickerContainer.style.display = 'none';
            console.log("this");
            // Save the selected date
        });
    
    
        // Close the datepicker without saving the selected date when the cancel button is clicked
        cancelDateButton.addEventListener('click', function() {
            datepickerContainer.style.display = 'none';
            console.log("that");
            // Don't save the selected date
        });
    
         // Close the datepicker when the user clicks outside of it
         document.addEventListener('click', function(e) {
            if (!datepickerContainer.contains(e.target) && e.target !== selectedDateElement) {
                datepickerContainer.style.display = 'none';
            console.log("else");

            }
        });

        document.getElementById('prevMonth').addEventListener('click', function() {
            month--;
            if (month < 0) {
                month = 11;
                year--;
            }
            updateCalendar();
        });
    
        document.getElementById('nextMonth').addEventListener('click', function() {
            month++;
            if (month > 11) {
                month = 0;
                year++;
            }
            updateCalendar();
        });
    
        selectedDateElement.addEventListener('click', function() {
            datepickerContainer.style.display = 'block';
        });
    
        updateCalendar();
});