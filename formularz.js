//funkcja dodania studenta i obliczenia średniej
function addStudent() {

    const name = document.getElementById('name').value;
    const album = document.getElementById('album').value;
    const test1 = Number(document.getElementById('test1').value);
    const test2 = Number(document.getElementById('test2').value);
    const test3 = Number(document.getElementById('test3').value);

    const average = (test1 + test2 + test3) / 3;
    const letterGrade = calculateLetterGrade(average);

    //Stworzenie objektu student
    const student = {
        name: name,
        id: album,
        test1: test1,
        test2: test2,
        test3: test3,
        average: average.toFixed(2),
        letterGrade: letterGrade
    };

    //Zapisanie obiektu student do localStorage
    saveStudent(student);

    //Update średniej na stronie HTML
    document.getElementById('averageGrade').textContent = average.toFixed(2);

    //Update listy studentów na stronie HTML
    updateStudentsList();
    document.getElementById('studentForm').reset();
}

//Funkcja obliczenia średniej AVG
function calculateLetterGrade(average) {
    if (average >= 5) return 'A';
    else if (average >= 4) return 'B';
    else if (average >= 3) return 'C';
    else if (average >= 2) return 'D';
    else return 'F';
}

//Funkcja zapisania obiektu student do localStorage
function saveStudent(student) {
    let studentsArray = JSON.parse(localStorage.getItem('students')) || [];
    studentsArray.push(student);
    localStorage.setItem('students', JSON.stringify(studentsArray));
}

//Funkcja do updatu listy studentów na stronie HTML
function updateStudentsList() {
    const studentsListElement = document.getElementById('studentsList');
    studentsListElement.innerHTML = '';

    const studentsArray = JSON.parse(localStorage.getItem('students')) || [];

    studentsArray.forEach(student => {
        const listItem = document.createElement('li');
        listItem.textContent = `${student.name} (ID: ${student.id}) - Average: ${student.average}, Grade: ${student.letterGrade}`;
        studentsListElement.appendChild(listItem);
    });
}




