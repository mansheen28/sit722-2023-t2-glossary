var express = require("express");
var router = express.Router();

const itemList = [
  {
    id: 1,
    term: "DevOps",
    description: "DevOps is describes as people working together to conceive, build and deliver secure software at top speed.",
    references: "GitLab (2022). DevOps explained. [online] GitLab. Available at: https://about.gitlab.com/topics/devops/.",
  },
  {
    id: 2,
    term: "Wall of Confusion ",
    description: "It refers to the process where a group does a complete job when they have passed it to the next group.",
    references: "Kawaguchi, S. (2022). The Wall of Confusion. [online] Medium. Available at: https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26",
  },
  {
    id: 3,
    term: "Deployment",
    description: "It is the process of by which softwares are available by users and other programs to run on their systems. It guides you through the software deployment process",
    references: "www.ibm.com. (n.d.). Deploying software. [online] Available at: https://www.ibm.com/docs/en/zos/2.4.0?topic=task-deploying-software",
  },
  {
    id: 4,
    term: "Cloud",
    description: "It refers to servers that runs software and databases which are accessed over the Internet. The companies do not have physical servers or run applications on their machines.",
    references: "[1]Cloudflare, “What Is the Cloud? | Cloud Definition | Cloudflare,” Cloudflare, 2022. Available: https://www.cloudflare.com/learning/cloud/what-is-the-cloud/",
  },
  {
    id: 5,
    term: "Microservices",
    description: "It is an approach to software development where software is composed of small independent services that communicate over well-defined APIs. These services are owned by small or self-contained teams",
    references: "Amazon Web Services, Inc. (n.d.). What are Microservices? | AWS. [online] Available at: https://aws.amazon.com/microservices/#:~:text=Microservices%20are%20an%20architectural%20and",
  },
  {
    id: 6,
    term: "Automation",
    description: "It is the creation and application of technology to control and monitor the production and delivery of products and services",
    references: "International Society of Automation (2021). What is Automation? - ISA. [online] isa.org. Available at: https://www.isa.org/about-isa/what-is-automation",
  },
  {
    id: 7,
    term: "Web Hosting",
    description: "Web hosting is a service that allows groups and people to post a website or web page on the Internet",
    references: "Website.com. (n.d.). What is Web Hosting? - Web Hosting - Beginner’s Guide. [online] Available at: https://www.website.com/beginnerguide/webhosting/6/1/what-is-web-hosting?.ws#:~:text=Web%20hosting%20is%20a%20service",
  },
  {
    id: 8,
    term: "Agile Methodology",
    description: "It is a project management approach that involves breaking the project into pieces and has continuous collaboration and improvement. It includes cycle of planning, executing, and evaluating",
    references: "Atlassian (n.d.). What is Agile? [online] Atlassian. Available at: https://www.atlassian.com/agile#:~:text=The%20Agile%20methodology%20is%20a",
  },
  {
    id: 9,
    term: "Concurrency",
    description: "In simple terms, multiple apps running in one system. Multiple computations are happening at the same time",
    references: "web.mit.edu. (n.d.). Reading 17: Concurrency. [online] Available at: https://web.mit.edu/6.005/www/fa14/classes/17-concurrency/#:~:text=Concurrency%20means%20multiple%20computations%20are",
  },
  {
    id: 10,
    term: "Testing",
    description: "Software Testing is a method to check whether the actual software product matches expected requirements and to ensure that software product is has no bugs.",
    references: "Hamilton, T. (2019). What is Software Testing? Introduction, Definition, Basics & Types. [online] Guru99.com. Available at: https://www.guru99.com/software-testing-introduction-importance.html",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "SIT722 DevOps Glossary",
    subheading:
      " our DevOps glossary! Whether you are new to the world of DevOps or you are a seasoned pro, this glossary is designed to help you understand the essential to the DevOps world.",
    items: itemList,
  });
});

module.exports = router;
