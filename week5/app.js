

// when I visit this page,


function startClock() {
  setInterval(function () {

    const now = moment().format("YYYY-MM-DD HH:mm:ss");

    $("#current-time").text(now)


  }, 1000);
}

function createTimeBlock(hour) {


  {/* <div class="row">
    <div class="time-col col-2">9:00</div>
    <div class="textarea-col col-8">
      <textarea rows="3"></textarea>
    </div>
    <div class="button-col col-2">
      <button class="btn btn-primary">Save</button>
    </div>
  </div> */}

  const row = $("<div>");
  // if timeblock is in the future -- give it a 'future' class
  // if timeblock is in the past -- give it a 'past' class
  // if timeblock is in the present -- give it a 'present' class
  const currentHour = Number(moment().format("H"));


  // past -- hour < current hour
  const isPast = hour < currentHour;

  // present -- current hour === hour
  const isPresent = hour === currentHour;


  // future -- hour > current hour 
  const isFuture = hour > currentHour;


  let rowClass = 'row';

  if(isPast){
    rowClass = rowClass + ' past';
  }

  if(isPresent){
    rowClass = rowClass + ' present'
  }

  if(isFuture){
    rowClass = rowClass + ' future';
  }

  row.attr('class', rowClass);

  const timeCol = $("<div>")
  timeCol.attr('class', 'time-col col-2');

  timeCol.text(hour + ":00");


  const textareaCol = $("<div >");

  textareaCol.attr('class', 'textarea-col col-8');
  const textarea = $('<textarea rows="3">')
  textareaCol.append(textarea);

  // with existing details from local storage
  const existingNotes = localStorage.getItem(hour);
  textarea.val(existingNotes);


  const buttonCol = $("<div>");
  buttonCol.attr('class', 'button-col col-2');

  const saveButton = $('<button class="btn btn-primary save-button">')
  saveButton.text('Save');

  

  buttonCol.append(saveButton);


  row.append(timeCol, textareaCol, buttonCol);

  return row;




}


// I should see a clock in the header
$(function () {

  startClock();

  const timeBlockContainer = $(".container");


  // I should see 9am - 5pm timeblock
  for (let hour = 9; hour < 18; hour++) {

    const timeBlock = createTimeBlock(hour);

    timeBlockContainer.append(timeBlock);
  }



})


$(document).on('click', '.save-button', function(event){

  // when user click on the save button of a particular timeblock

  const buttonClicked = $(event.target);

  const textarea = buttonClicked.parent().prev().children();

  const timeCol = buttonClicked.parent().prev().prev();

  const time = timeCol.text()
  

  const hour = time.slice(0, -3);
  


  // grab the user input
  const userInput = textarea.val();

  // key should be the hour of timeblock

  // save to local storage
  localStorage.setItem(hour, userInput);




})











