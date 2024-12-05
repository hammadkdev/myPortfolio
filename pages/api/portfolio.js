const portfolio = [
    {
        id: 0,
        projectName: "E-Commerce",
        url: "https://github.com/ihammadkp/E-Commerce/",
        image: "projects/ecommerce.png",
        projectDetail: "An E-Commerce App Built in Nextjs in which user can add, delete and update their products and buy other products.",
        technologiesUsed: [
            {
                tech: "NextJS"
            },
            {
                tech: "ReactJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Mongodb"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Formik and Yup"
            },
        ]
    },
    {
        id: 0,
        projectName: "Attendance Management System",
        url: "https://github.com/ihammadkp/attendanceManagementSystem/",
        image: "projects/attendanceManagementSystem.png",
        projectDetail: "Attendance Management System is a MERN Stack app with tailored interfaces for admins, teachers, and students to manage attendance records.",
        technologiesUsed: [
            {
                tech: "NodeJS"
            },
            {
                tech: "ReactJS"
            },
            {
                tech: "ExpressJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Mongodb"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Galaxy",
        url: "https://github.com/ihammadkp/Galaxy/",
        image: "projects/galaxy.PNG",
        projectDetail: "Galaxy is a Dynamic Blog Website in which admin can add update and delate post built in MERN Stack.",
        technologiesUsed: [
            {
                tech: "NodeJS"
            },
            {
                tech: "ReactJS"
            },
            {
                tech: "Express"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Mongodb"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Hepta",
        url: "https://github.com/ihammadkp/Hepta/",
        image: "projects/hepta.PNG",
        projectDetail: "Hepta drives digital transformation of Hotal Management System built with Reactjs and Tailwind css.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "TailwindCSS"
            },
        ]
    },
    {
        id: 0,
        projectName: "Ableton",
        url: "https://github.com/ihammadkp/Ableton/",
        image: "projects/ableton.PNG",
        projectDetail: "Ableton is a Musical Instrumental Plateform that buy and sell musical instruments built in Reactjs and css.",
        technologiesUsed: [
            {
                tech: "ReactJS"
            },
            {
                tech: "REST API's"
            },
            {
                tech: "Core CSS"
            },
        ]
    },
    
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
