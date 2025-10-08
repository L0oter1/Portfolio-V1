const languageItems = document.querySelectorAll('.language-item');

  languageItems.forEach(item => {
    const icon = item.querySelector('i');  // icon inside the item

    // js displays text depending on icon class
    icon.addEventListener('click', () => {
      const universalText = document.querySelectorAll('.language-container p'); 
      const allText = universalText[7]
        if (icon.classList.contains('fa-python')) {
            allText.innerHTML = ` 
            <ul>
              <li>I have used Python for most of my Personal Projects.</li>
              <li>Something that stood out to me was the amount of in a sense, non programming you have to do push code to production</li>
              <li>One project I enjoyed was when I used Python test out the a type of Machine Learning Algorithm called NEAT.</li>
              <li>A project I'm very proud of would be my discord music bot. </li>
              <li>My friends used to bond over playing music for each other, so coding this was amazing.</li>
            </ul>
            `;
            allText.style.display = 'block'; // show it
        }
        else if (icon.classList.contains('fa-java')) {
            allText.innerHTML = ` 
            <ul>
              <li>My experience of Java came mostly from my basic programing classes in College. </li>
              <li>I learned programming basics, OOP, data structures all in Java. </li>
            </ul>
            `;
            allText.style.display = 'block'; // show it
        }
        else if (icon.classList.contains('fa-html5')) {
            allText.innerHTML = ` 
            <ul>
              <li>My HTML knowledge came from the first internship I ever had at Opportunities for All</li>
              <li>At that internship I learned the basics of Web Dev and also some soft skills</li>
              <li>The rest of my HTML knowledge came from this personal website I made without anything fancy</li>
            </ul>
            `;
            allText.style.display = 'block'; // show it
        }
        else if (icon.classList.contains('fa-css3-alt')) {
            allText.innerHTML = ` 
            <ul>
              <li>Similar to the previous statement, my css came from my first evern internship in high school.</li>
              <li>CSS really is hard to learn as there are so many ways to change element styles,</li>
              <li>This project has taught me a lot about CSS however I know I can always learn more</li>
              <li> So if you have any feedback feel free to reach out to me, I'd love to learn</li>
            </ul>
            `;
            allText.style.display = 'block'; // show it
        }
        else if (icon.classList.contains('fa-js-square')) {
            allText.innerHTML = ` 
            <ul>
              <li>My JS knowledge is limited as I haven't had the opportunity to use JS that much. </li>
            </ul>
            `;
            allText.style.display = 'block'; // show it
        }
        else if (icon.classList.contains('devicon-cplusplus-plain')) {
            allText.innerHTML = ` 
            <ul>
              <li>My C++ knowledge comes from my computer structure class, CSE 30 where we used ARM and C++ to code</li>
              <li>It was really cool seeing one of the basic programming languages and learning about memory management</li>
            </ul>
            `;
            allText.style.display = 'block'; // show it
        }
        else if (icon.classList.contains('devicon-git-plain')) {
            allText.innerHTML = ` 
            <ul>
              <li>I learned git mostly from my CSE 110 class of Software Development where Git is a good project management service</li>
              <li>I learned more of what git is and how to properly branch on github with git. This website is also published with github pages</li>
              <li> Interesting thing I learned, git is not gitHub</li>
            </ul>
            `;
            allText.style.display = 'block'; // show it
        }
    });
  });


