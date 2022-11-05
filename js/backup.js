render() {
  let bookWrapper = document.createElement("li");
  bookWrapper.classList.add("bookWrapper");
  let bookTitle = document.createElement("h1");
  bookTitle.textContent = `${this.title} by: ${this.author}`;
  let subjectHeader = document.createElement("h2");
  let listOfSubjects = document.createElement("ol");
  //loop through all subjects and append each one
  for (let i = 0; i < this.subject.length; i++) {
    let subjects = this.subject[i];
    subjectHeader.textContent = `Subjects`;
    listOfSubjects.append(subjectHeader);
    let aSubject = document.createElement("li");
    aSubject.textContent = subjects;
    listOfSubjects.append(aSubject);
  }

  // create comment btn and adds event listener ========

  const addCommentBtn = document.createElement("button");
  addCommentBtn.innerHTML = "add Comment";
  // let commentBox = document.createElement("input");
  const commentHeader = document.createElement("h2");

  const listOfComments = document.createElement("ol");

  //toggle comments
  


  let commentBox = document.createElement("input");
  commentBox.placeholder = "Comment";
  addCommentBtn.addEventListener("click", () => {
    commentHeader.innerHTML = "Comments";
    bookWrapper.append(commentBox);

    commentBox.classList.add("commBtn"); // for CSS

    commentBox.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        // stops from header being gen with no comms
        if (!commentBox.value) {
          alert("Please add a comment before submitting");
          return;
        }
        // resets comment list
        listOfComments.innerHTML = "";

        // this.comments = this.comments;
        this.comments.unshift(commentBox.value); // add comment to arr
        console.log(this.comments);

        for (let i = 0; i < this.comments.length; i++) {
          // loop arr
          // this.comments = '';
          const aComment = document.createElement("li");
          aComment.textContent = this.comments[i];
          // aComment.value='subject'
          listOfComments.append(aComment);
        }

        commentBox.value = "";
      }
    });