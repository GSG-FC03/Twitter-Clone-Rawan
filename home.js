const nameField = document.getElementById("name");
const textField = document.getElementById("textarea");
const tweetBtn = document.getElementById("tweet");
const container = document.getElementById("newsfeed");
const myTweets = [];

tweetBtn.addEventListener("click", createTweet);
function createTweet(e) {
  e.preventDefault();
  // e.target.style.backgroundColor= "blue";
  if (nameField.value !== "") {
    if (textField.value !== "") {
      if (textField.value.length < 250) {
        myTweets.unshift({
          tweet: `<section class="container">
        <article class="part-1">
          <h3> ${nameField.value}</h3>
        </article>
        <p class="nickname">@${nameField.value}</p>
        <p class="par-j">
         ${textField.value}
        </p>
  
        <article class="icons">
          <figure class="comment">
            <img
              src="https://img.icons8.com/ios/50/000000/topic.png"
              class="comment-icon"
            />
          </figure>
          `,
          likeSrc: "https://img.icons8.com/ios-glyphs/16/000000/like--v2.png",
        });
        container.innerHTML = "";
        myTweets.forEach(
          (element, index) =>
            (container.innerHTML +=
              element.tweet +
              `<figure class="re-tweet">
              <img
                src="https://img.icons8.com/small/16/000000/retweet.png"
                class="re-tweet-icon" onclick="reTweet(${index})"
              />
            </figure>
              <figure class="heart"></figure>
        <img
          src=${element.likeSrc} onclick="like(${index})"
          // class="heart-icon"
        />
        <img src="https://img.icons8.com/ios/50/000000/no-message--v2.png"/
        class="message-icon">
      </article>

      <hr style="margin-top: 1rem" />
    </section>`)
        );
      } else {
        alert("your tweets shouldent be more than 250 charachter");
      }
    } else {
      alert("please enter your Tweet");
    }
  } else {
    alert("please enter your username");
  }
}
function like(index) {
  if (
    event.target.src ==
    "https://img.icons8.com/ios-glyphs/30/fa314a/like--v1.png"
  ) {
    myTweets[index].likeSrc =
      "https://img.icons8.com/ios-glyphs/16/000000/like--v2.png";
    event.target.src =
      "https://img.icons8.com/ios-glyphs/16/000000/like--v2.png";
  } else {
    myTweets[index].likeSrc =
      "https://img.icons8.com/ios-glyphs/30/fa314a/like--v1.png";
    event.target.src =
      "https://img.icons8.com/ios-glyphs/30/fa314a/like--v1.png";
  }
}

function reTweet(index) {
  if (nameField.value !== "") {
    myTweets.unshift({
      tweet:
        `<article class="newretweet"><img class="retweet-img"

        src="https://img.icons8.com/small/16/000000/retweet.png"/>
        <p class="retweet-this">${nameField.value} retweets this</p> </article>` +
        myTweets[index].tweet,
      likeSrc: "https://img.icons8.com/ios-glyphs/16/000000/like--v2.png",
    });
    container.innerHTML = "";
    myTweets.forEach(
      (element, index) =>
        (container.innerHTML +=
          element.tweet +
          `<figure class="re-tweet">
              <img
                src="https://img.icons8.com/small/16/000000/retweet.png"
                class="re-tweet-icon" onclick="reTweet(${index})"
              />
            </figure>
              <figure class="heart"></figure>
        <img
          src=${element.likeSrc} onclick="like(${index})"
          class="heart-icon"
        />
        <img src="https://img.icons8.com/ios/50/000000/no-message--v2.png"/
        class="message-icon">
      </article>

      <hr style="margin-top: 1rem" />
    </section>`)
    );
  } else {
    alert("please enter your username");
  }
}
