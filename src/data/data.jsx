export const pages = [
  {
    id: 1,
    label: "Home",
    link: "/",
  },
  {
    id: 2,
    label: "About me",
    link: "/about-me",
  },
  {
    id: 3,
    label: "My Projects",
    link: "/my-projects",
  },
  // {
  //   id: 4,
  //   label: "Contact Me",
  //   link: "/contact-me",
  // },
];

export const aboutMeData = {
  name: "Jean Khoge",
  title: "Hello! I'm Jean Khoge",
  describetion:
    "I am a software engineer proficient in full-stack development, with a deep understanding of both front-end and back-end technologies.",
  body: "I am a full-stack developer in my final year of studies. I have a strong passion for solving complex problems through coding. My journey into the world of software development began a few years ago, and since then, I have been continuously learning and enhancing my skills. My educational background is in computer science, but I am always eager to explore new technologies and opportunities.",
  highlightedBody:
    "As a full-stack developer, I am constantly seeking new challenges and projects to work on. I am particularly interested in web development and game development and have completed several personal projects in these areas. I am always enthusiastic about taking on fresh challenges and collaborating with others. I firmly believe that working on projects is the most effective way to learn and grow as a software engineer.",
  body2:
    "Outside of coding, I enjoy spending quality time with my family and friends, watching movies, and playing video games. I am a lifelong learner and am always on the lookout for tutorials, and courses to enhance my skills and knowledge. If you are interested in learning more about my skills and experiences, please feel free to take a look at my CV. I would love to hear from you and discuss potential opportunities for project collaboration or mutual learning.",
};

export const contactMeText = {
  title: "Hello there!",
  body: "I am a full-stack developer with a passion for solving complex problems through code. I bring a unique combination of technical expertise and strong interpersonal skills to the table. I am always excited to take on new challenges and collaborate with like-minded individuals. If you'd like to get in touch, Contact me, and I will get back to you as soon as possible. I look forward to hearing from you!",
};

export const projects = [
  {
    title: "IP Address Tracker",
    body: "A web app for IP address and domain information using IP Geolocation API and LeafletJS. Pinpoint locations or explore IPs with ease.",
    body1:
      "The IP Address Tracker is a web application designed to provide users with information about IP addresses and domains. It utilizes the IP Geolocation API by IPify and the LeafletJS library to offer a user-friendly experience. Whether you want to pinpoint your own location or gather details about a specific IP address or domain, this app has you covered.    ",
    body2:
      "Technology Stack: The app is built using ReactJS for the frontend, making it highly responsive and efficient. It leverages the IP Geolocation API by IPify for location data retrieval and integrates LeafletJS for interactive mapping.",
    image: "../assets/IPAdTrApp.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/jeankh/IP-Address-Tracker",
      },
      {
        text: "Live Site",
        url: "https://ip-address-tracker.jean.khoge.fr/",
      },
    ],
  },
  {
    title: "Rock, Paper, Scissors Game",
    body: "A web-based version of the classic Rock, Paper, Scissors game for a fun and interactive experience. Test your luck and strategy!",
    body1:
      "The Rock, Paper, Scissors Game is a web application that brings the classic hand game to your browser. It offers an interactive and fun experience where players can choose between Rock, Paper, and Scissors and see who wins. Test your luck and strategy in this timeless game!",
    body2:
      "Technology Stack: This game is built using React for the frontend, providing a dynamic and engaging user interface. It's designed to be responsive, making it accessible on various devices and screen sizes.",
    image: "../assets/RPSGame.png",
    links: [
      {
        text: "Source Code",
        url: "https://github.com/jeankh/rock-paper-scissors",
      },
      {
        text: "Live Site",
        url: "https://rock-paper-scissors.jean.khoge.fr/",
      },
    ],
  },
];

export const contactMeLinks = ["khogejean@gmail.com", "linkedin", "github"];
