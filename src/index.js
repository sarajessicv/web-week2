if (document.readyState !== "loading") {
  main();
} else {
  document.addEventListener("DOMContentLoaded", main());
}

function main() {
  const addCommentButton = document.getElementById("add-comment");
  const commentList = document.getElementById("commentList");
  const text = document.getElementById("text_area");
  const star_selector = document.getElementById("selector");

  addCommentButton.addEventListener("click", function () {
    const comment = text.value;
    const star_rate = star_selector.value;

    const listItem = document.createElement("div");
    const stars = document.createElement("div");
    const review = document.createElement("div");
    const remove = document.createElement("button");

    listItem.className = "comment";
    stars.className = "comment-rating";
    review.className = "comment-text";
    remove.className = "remove-comment";
    remove.innerText = "remove this comment";

    review.innerHTML = comment;
    stars.innerHTML = star_rate;

    listItem.appendChild(stars);
    listItem.appendChild(review);
    listItem.appendChild(remove);
    commentList.appendChild(listItem);

    text.value = "";

    remove.addEventListener("click", function () {
      this.parentElement.remove();
    });
  });

  const removeListButton = document.getElementById("remove-comments");
  removeListButton.addEventListener("click", function () {
    const getRemoveButtons = document.getElementsByClassName("remove-comment");
    for (let i = 0; i < getRemoveButtons.length; i++) {
      getRemoveButtons[i].style.visibility = "visible";
    }
  });
}
