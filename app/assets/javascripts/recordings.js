function loads when page loads 
$(function () {
	console.log('recordings.js is loaded ...')
	listenForClick()
	listenForNewRecordingFormClick()
});

function listenForClick() {
	$('button#recordings-data').on('click', function (event) {
        //prevents button from clicking itself
		event.preventDefault()
		getRecordings()
	})
}

//creating listeners 
function getRecordings() {
	$.ajax({
		url: 'http://localhost:3000/recordings',
		method: 'get',
		dataType: 'json',
		success: function (data) {
			console.log("the data is: ", data)
			data.map(recording => {
				const newRecording = new Recording(recording)
				const newRecordingHtml = newRecording.recordingHTML()
				document.getElementById('ajax-recordings').innerHTML += newRecordingHtml
			})
		}
	})
}

function listenForNewRecordingFormClick() {
	$('button#ajax-new-recording').on('click', function (event) {
		event.preventDefault()
		let newRecordingForm = Recording.newRecordingForm()
		// $('div#new-post-form-div')
		document.querySelector('div#new-recording-form-div').innerHTML = newRecordingForm
	})
}

//class constructor takes in object with key values pairs that are matched up to create an instance of a recording 
//This allows us to create instances of recording in custom functions
class Recording {
	constructor(obj) {
		this.id = obj.id
		this.title = obj.title
		this.melody = obj.melody
		this.notes = obj.notes
	}

    //class method
	static newRecordingForm() {
		return (`
		<strong>New recording melody form</strong>
			<form>
				<input id='recording-title' type='text' name='title'></input><br>
				<input type='text' name='melody'></input><br>
				<input type='submit' />
			</form>
		`)
	}
}

//custom function that creates HTML made up of the constructor 
Recording.prototype.recordingHTML = function () {
	let recordingMelodies = this.melodys.map(melody => {
        return (`
        <div>
            <h3>${recording.title}</h3>
            <p>${recording.melody}</p>
        </div>
		`)
	}).join('')

	return (`	
		<div class='post'>
			<h3>${this.title}</h3>
			<p>${this.melody}</p>
			<p>${recordingMelodys}</p>
		</div>
	`)
}