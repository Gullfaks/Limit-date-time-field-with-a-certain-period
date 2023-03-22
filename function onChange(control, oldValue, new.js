function onChange(control, oldValue, newValue, isLoading, isTemplate) {
   if (isLoading || newValue === '') {
     return;
   }
 
   var now = new Date();
   var nextMonth = new Date();
   nextMonth.setDate(now.getDate() + 30);
 
   var selectedDate = new Date(newValue);
 
   if (selectedDate > nextMonth) {
     g_form.clearValue('due_date');
     g_form.addInfoMessage('Due date cannot be set more than 30 days from now.');
   }
 }
 