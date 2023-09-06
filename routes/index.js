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
  {
    id: 11,
    term: "Command Line Interface",
    description: "CLI are popularly known as console user interface. It interacts with the computer apllications, run programs and manage computer files.",
    references: "What is a command-line interface (CLI)?,” SearchWindowsServer. https://www.techtarget.com/searchwindowsserver/definition/command-line-interface-CLI#:~:text=A%20command%2Dline%20interface%20(CLI)%20is%20a%20text%2D"
  },
  {
    id: 12,
    term: "Google Cloud",
    description: "Google cloud is the cloud computing services that is exactly same as google services like Youtube, Gmail, Google Search. Instead of having own servers physically, we can use and pay depending on the need.",
    references: "[1]“What is Cloud Computing?,” Google Cloud. https://cloud.google.com/learn/what-is-cloud-computing#:~:text=Google%20Cloud%20is%20a%20suite",
  },
  {
    id: 13,
    term: "DASA DevOps",
    description: "DASA stands for DevOps Agile Skills Association. The six core DASA DevOps principles are Customer-centric action, Create with the end in mind, End-to-end responsibility, Cross-functional autonomous teams, Continuous improvement, Automate everything you can.",
    references: "DASA DevOps,” APMG International. https://apmg-international.com/product/dasa-devops#:~:text=The%20six%20core%20DASA%20DevOps (accessed Aug. 01, 2023).",
  },
  {
    id: 14,
    term: "Continuous Deployment",
    description: "It is a simple and a quick process of deploying the code, test it and does not breaks the application. Gets feedback after deploying.",
    references: "Continuous deployment - definition & overview,” Sumo Logic. https://www.sumologic.com/glossary/continuous-deployment/#:~:text=The%20goal%20of%20a%20continuous%20deployment%20process%20is%20to%20minimize (accessed Aug. 01, 2023).",
  },
  {
    id: 15,
    term: "Continuous Monitoring",
    description: "It is an approach where constant monitoring is seen to detect security threats, performance issues & problems in an automated manner.",
    references: "What Is Continuous Monitoring? - CrowdStrike,” crowdstrike.com. https://www.crowdstrike.com/cybersecurity-101/observability/continuous-monitoring/#:~:text=Continuous%20monitoring%20is%20an%20approach",
  },
  {
    id: 16,
    term: "Continous Integration",
    description: "It is a practice of integrating the code from multiple contributors into a single software project.",
    references: "Atlassian, “What is Continuous Integration,” Atlassian. https://www.atlassian.com/continuous-delivery/continuous-integration#:~:text=Continuous%20integration%20(CI)%20is%20the",
  },
  {
    id: 17,
    term: "Continuous Dilivery",
    description: "This helps in building, testing and releasing softwares faster and more frequently.",
    references: "What Is Continuous Delivery and How Does It Work? | Synopsys,” www.synopsys.com. https://www.synopsys.com/glossary/what-is-continuous-delivery.html#:~:text=Definition (accessed Aug. 01, 2023).",
  },
  {
    id: 18,
    term: "DevOps Cycle",
    description: "It is a series of automated development processes within an iterative development lifecycle. It includes steps: plan, code and build, test, release, deploy, operate and monitor.",
    references: "DevOps Lifecycle: 7 Phases Explained in Detail with Examples,” Insights on Latest Technologies - Simform Blog, Jan. 13, 2022. https://www.simform.com/blog/devops-lifecycle/",
  },
  {
    id: 19,
    term: "End-to-end responsibility",
    description: "End-to-end responsibility means that the team holds takes responsibility for the quality and quantity of services it provides to its customers.",
    references: "End To End Responsibility - DevOps Principle #3,” Pufferfish Solutions, Feb. 19, 2019. https://www.pufferfish.solutions/post/end-to-end-responsibility-devops-principal-3 (accessed Aug. 01, 2023)",
  },
  {
    id: 20,
    term: "Customer-centric model",
    description: "It ensures that the customer is at the center of a business's philosophy, operations, or ideas.",
    references: "Client-Centric Approach and its Benefits,” Investopedia. https://investopedia.com/terms/c/client-centric.asp#:~:text=Client-centric%2C%20also%20known%20as (accessed Aug. 01, 2023).",
  },
  {
    id: 21,
    term: "Containers",
    description: "Containers are compact packages that contain the application code and any dependencies, such as the particular versions of libraries and runtimes needed to operate your software services.",
    references: "What are containers?,” Google Cloud. https://cloud.google.com/learn/what-are-containers#:~:text=Containers%20are%20packages%20of%20software",
  },
  {
    id: 22,
    term: "Container Image",
    description: "An unalterable, static file called a container image contains executable code that enables it to execute a separate process on IT infrastructure. The image consists of the system libraries, system tools, and other platform configurations needed for a software programme to execute on a containerization platform like CoreOS Rkt or Docker. The host machine's OS kernel is shared by the image.",
    references: "What is container image? | Definition from TechTarget,” IT Operations. https://www.techtarget.com/searchitoperations/definition/container-image",
  },
  {
    id: 23,
    term: "Docker",
    description: "A software platform called Docker makes it simple to develop, test, and deploy applications. Software is packaged by Docker into standardised units called containers that contain all of the necessary code, libraries, system tools, and runtime.",
    references: "AWS, “What is Docker? | AWS,” Amazon Web Services, Inc., 2019. https://aws.amazon.com/docker/",
  },
  {
    id: 24,
    term: "Virtual Machine (VM)",
    description: "A virtual machine (VM) is a computer that has had most of its functionalities virtualized, including the ability to run programmes and operating systems.",
    references: "“What Is a Virtual Machine?,” Google Cloud. https://cloud.google.com/learn/what-is-a-virtual-machine#:~:text=Engine%20free%20tier-",
  },
  {
    id: 25,
    term: "Docker Compose",
    description: "A tool called Docker Compose enables you to create and distribute multi-container applications. You may specify the services in a YAML file using Compose, and you can spin everything up or take it down with just one command.",
    references: "Use Docker Compose,” Docker Documentation, May 12, 2022. https://docs.docker.com/get-started/08_using_compose/#:~:text=Docker%20Compose%20is%20a%20tool",
  },
  {
    id: 26,
    term: "Azure Storage",
    description: "Microsoft's cloud storage option for contemporary data storage scenarios is the Azure Storage platform. For a range of data objects, Azure Storage provides highly available, massively scalable, reliable, and secure cloud storage.",
    references: "tamram, “Introduction to Azure Storage - Cloud storage on Azure,” learn.microsoft.com, 2023. https://learn.microsoft.com/en-us/azure/storage/common/storage-introduction",
  },
  {
    id: 27,
    term: "Metadata",
    description: "Data that describes other data, or metadata, provides a structured reference that makes it easier to organise and recognise characteristics of the material it represents.",
    references: "G. Kranz, “What is metadata and how does it work?,” WhatIs.com, Jul. 2021. https://www.techtarget.com/whatis/definition/metadata",
  },
  {
    id: 28,
    term: "Cloud Native Applications",
    description: "A programme created specifically for a cloud computing architecture is known as a cloud-native application. These apps are built to take advantage of the inherent benefits of a cloud computing software delivery architecture. They are hosted and run in the cloud.",
    references: "What is a Cloud-Native Application and How Do You Build One?,” Cloud Computing. https://www.techtarget.com/searchcloudcomputing/definition/cloud-native-application#:~:text=A%20cloud%2Dnative%20application%20is (accessed Aug. 21, 2023).",
  },
  {
    id: 29,
    term: "YAML",
    description: "A data serialisation language known as YAML Ain't Markup Language (YAML) is frequently cited as one of the most well-liked computer languages. Although its object serialisation capabilities make it a potential alternative to languages like JSON, it is frequently used as a format for configuration files.",
    references: "YAML Tutorial: Everything You Need to Get Started in Minutes,” CloudBees, Mar. 08, 2023. https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started",
  },
  {
    id: 30,
    term: "Video-streaming Application",
    description: "An easy way for users to access and stream your content on their TVs and mobile devices is through a video streaming app",
    references: "How to Create A Live Streaming App - The Ultimate 2023 Guide,” Uscreen, Nov. 22, 2022. https://www.uscreen.tv/blog/create-live-streaming-app/#:~:text=A%20video%20streaming%20app%20is (accessed Aug. 21, 2023).",
  },
  {
    id: 31,
    term: "volume in docker",
    description: "A Docker volume is an independent file system entirely managed by Docker and exists as a normal file or directory on the host, where data is persisted.",
    references: "S. Zivuku, “Understanding Docker Volumes,” Earthly Blog, Feb. 08, 2022. https://earthly.dev/blog/docker-volumes/#:~:text=A%20Docker%20volume%20is%20an (accessed Sep. 06, 2023).",
  },
  {
    id: 32,
    term: "nodemon",
    description: "Nodemon is a tool to restart your app every time a change is made to your app. It is very useful in a development environment.",
    references: "Debugging a Node.js app running in Docker using Nodemon and the Docker extension,” Engineering Education (EngEd) Program | Section. https://www.section.io/engineering-education/debug-nodemon-docker/#:~:text=Nodemon%20is%20a%20tool%20to (accessed Sep. 06, 2023).",
  },
  {
    id: 33,
    term: "A bridge network",
    description: "In terms of Docker, a bridge network uses a software bridge which allows containers connected to the same bridge network to communicate, while providing isolation from containers which are not connected to that bridge network.",
    references: "Bridge network driver,” Docker Documentation, Aug. 22, 2023. https://docs.docker.com/network/drivers/bridge/#:~:text=In%20terms%20of%20Docker%2C%20a",
  },
  {
    id: 34,
    term: "An overlay network",
    description: "The overlay network driver creates a distributed network that can span multiple docker hosts.",
    references: "F. Ferdous, “The Overlay Network Driver | Networking in Docker #7,” TechMormo, Oct. 24, 2022. https://medium.com/techmormo/the-overlay-network-driver-networking-in-docker-7-8d87af5eccd3 (accessed Sep. 06, 2023).",
  },
  {
    id: 35,
    term: "A macvlan network",
    description: "macvlan is a local scope network driver which is configured per-host. As a result, there are stricter dependencies between MACVLAN and external networks, which is both a constraint and an advantage that is different from overlay or bridge.",
    references: "Introduction to MacVLAN,” dockerlabs. https://dockerlabs.collabnix.com/intermediate/macvlan.html#:~:text=macvlan%20is%20a%20local%20scope",
  },
  {
    id: 36,
    term: "Direct messaging",
    description: "When sending a message, it is known if the message was received (acknowledged). An example here is a telephone call.",
    references: "Synchronous vs. asynchronous microservices communication patterns,” TheServerSide.com. https://www.theserverside.com/answer/Synchronous-vs-asynchronous-microservices-communication-patterns",
  },
  {
    id: 37,
    term: "Indirect messaging",
    description: "When sending a message, the message is commonly held an intermediary and as such it is not known when the message is actually received (no acknowledgement). An example here is a posted letter.",
    references: "Synchronous vs. asynchronous microservices communication patterns,” TheServerSide.com. https://www.theserverside.com/answer/Synchronous-vs-asynchronous-microservices-communication-patterns",
  },
  {
    id: 38,
    term: "Kubernetes",
    description: "Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.",
    references: "Kubernetes, “Production-Grade Container Orchestration,” Kubernetes.io, 2019. https://kubernetes.io/",
  },
  {
    id: 39,
    term: "pod",
    description: "A pod is the smallest execution unit in Kubernetes. A pod encapsulates one or more applications. Pods are ephemeral by nature, if a pod (or the node it executes on) fails, Kubernetes can automatically create a new replica of that pod to continue operations.",
    references: "What are Kubernetes Pods? | VMware Glossary,” VMware, Jun. 15, 2022. https://www.vmware.com/topics/glossary/content/kubernetes-pods.html#:~:text=A%20pod%20is%20the%20smallest",
  },
  {
    id: 40,
    term: "Terraform",
    description: "Terraform creates and manages resources on cloud platforms and other services through their application programming interfaces (APIs). Providers enable Terraform to work with virtually any platform or service with an accessible API.",
    references: "Hashicorp, “What is Terraform | Terraform | HashiCorp Developer,” What is Terraform | Terraform | HashiCorp Developer. https://developer.hashicorp.com/terraform/intro",
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
