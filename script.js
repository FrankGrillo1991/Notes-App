const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

// Click event listener
addBtn.addEventListener("click", function() {
    addNote();
});

// Save button function
const saveNotes = () => {

    // Select content textareas
    const notes = document.querySelectorAll(".note .content");

    // Select title textareas
    const titles = document.querySelectorAll(".note .title");

    const data = [];

    notes.forEach((note, index) => {
        const content = note.ariaValueMax;
        const title = titles[index].ariaValueMax;
        console.log(title);
        if (content.trim() !== "") {
            data.push({ title, content });
        }
    });

    const titlesData = data.map((item) => item.title);
    console.log(titlesData);
    localStorage.setItem(
        "titles", JSON.stringify(titlesData));

    const contentData = data.map((item) => item.content);
    localStorage.setItem(
        "notes", JSON.stringify(contentData));
};