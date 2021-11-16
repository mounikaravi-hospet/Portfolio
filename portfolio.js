import emoji from "react-easy-emoji";

export const greetings = {
	name: "Mounika Ravi Hospet",
	title: "Hi all, I'm Mounika",
	description:
		"A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / Python / Django / Flask and some other cool libraries and frameworks and Cross Platform Mobile Apps With Flutter.",
	resumeLink: "documents/Mounika_Resume.pdf",
};

export const openSource = {
	githubUserName: "mounikaravi-hospet",
};

export const contact = {};

export const socialLinks = {
	// facebook: "https://www.facebook.com/1hanzla100",
	// instagram: "https://www.instagram.com/1hanzla100",
	// twitter: "https://twitter.com/1hanzla100",
	github: "https://github.com/mounikaravi-hospet",
	linkedin: "https://www.linkedin.com/in/hanzla-tauqeer-0869281ba/",
};

export const skillsSection = {
	title: "My Skills",
	subTitle:
		"",
	skills: [
		emoji(
			"⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
		),
		emoji(
			"⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"
		),
		
	],

	softwareSkills: [
		{
			skillName: "HTML-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "CSS3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "TypeScript",
			fontAwesomeClassname: "logos:typescript-icon",
		},
		{
			skillName: "Angular",
			fontAwesomeClassname: "vscode-icons:file-type-angular",
		},
		{
			skillName: "Reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "Python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "Java",
			fontAwesomeClassname: "logos:java",
		},
		{
			skillName: "Git",
			fontAwesomeClassname: "logos:git-icon",
		},
	],
};

export const SkillBars = [
	{
		Stack: "Frontend/Design", //Insert stack or technology you have experience in
		progressPercentage: "90", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "60",
	},
	{
		Stack: "Programming",
		progressPercentage: "70",
	},
];

export const educationInfo = [
	{
		schoolName: "Georgia State University",
		subHeader: "Master of Science in Computer Science",
		duration: "August 2021 - Present",
		desc: "Working as a Teaching Assistant for Software Engineering course.",
		descBullets: [
			"As part of my assistantship, I supervise the undergraduate students and help them with their queries in the subject.",
			"My work also includes grading the assignments and projects of the students.",
		],
	},
	{
		schoolName: "Sreenidhi Institute of Science and Technology",
		subHeader: "Bachelor of Technology in Information Technology",
		duration: "September 2015 - June 2019",
		desc: "I was a part of Emerging Computer Arena club",
		descBullets: [
			"I was responsible for organizing Hackathons and Workshops."
		],
	}
];

export const experience = [
	{
		role: "Systems Engineer",
		company: "Infosys",
		companylogo: "/img/icons/common/infosys-technologies-logo.svg",
		date: "September 2019 – May 2021",
		desc: "",
		descBullets: [
			"Initially my work included a solutions development for Supply Chain Control Tower dashboard using 'Grafana'",
			"Later, I was moved to an angular based project where I was the lead developer and was also involved in DevOps in setting up CI/CD pipelines for the same angular projects.",
		],
	},
	{
		role: "Systems Engineer Intern",
		company: "Infosys",
		companylogo: "/img/icons/common/infosys-technologies-logo.svg",
		date: "February 2019 – May 2019",
		desc: "",
		descBullets:[
			"I was initially trained in Python, RDBMS, JAVA, Angular 4 and Spring Boot. Then worked on a full stack Angular project (Created a Blogging Application)."

		]
	},
	{
		role: "Web Development Intern",
		company: "The Sparks Foundation",
		companylogo: "/img/icons/common/airbnbLogo.png",
		date: "February 2018 – May 2018",
		desc: "",
		descBullets:[
			"Worked this Singapore based NGO in the development of a website for its branch in India."
		]
	},
];

export const projects = [
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		link: "https://example.com",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
	},
	{
		name: "lorem ipsum",
		desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		github: "https://github.com/1hanzla100",
		link: "https://example.com",
	},
];

export const feedbacks = [
	{
		name: "Chandrika Sathyanarayana",
		feedback:
			"You do a great job organizing the team and the project. Could not have done the project without you. You were like a pillar to the project",
	},
	{
		name: "Bhavya Kandala",
		feedback:
			"Your support and encouragement during the difficult and the good times were inseparable.  It has been a pleasure to work with you. The knowledge that you shared with us and the learning you brought cannot be compared with anything. Thank you so much for your support at all times.",
	},
];
