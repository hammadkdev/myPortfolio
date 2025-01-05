const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'University of Swabi',
                degree: 'BS, Computer Science',
                detail: "Bachelor's Degree in Computer Science from University of Swabi.",
                year: '2019-2023'
            },
            {
                id: 1,
                title: 'Lahor Model College',
                degree: 'HSSC, Pre Engineering',
                detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Lahor Model College.",
                year: '2017-2019'
            },
            {
                id: 2,
                title: 'DIT (1 Year)',
                degree: 'Diploma in Information Technology',
                detail: "Completed Diploma in Information Technology from Swedish International Institute of Technology.",
                year: '2018-2019'
            },
            {
                id: 3,
                title: 'Government High School',
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC part 1 and part 2 in Science subjects from Government High School No.1 Tordher Swabi",
                year: '2015-2017'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Pixako Technologies',
                role: ' Associate Software Engineer',
                url: 'https://www.pixako.com/',
                desc: 'As a Software Engineer, I am working on MERN Stack, Nextjs and JavaScript to build Complete Full Stack Applications.',
                year: '07/2024 - Present',
                location: 'Islamabad, Pakistan'
            },
            {
                id: 2,
                title: 'Ezitech Institute',
                role: 'MERN Stack Intern',
                url: 'https://ezitech.org/',
                desc: 'As an Internee, I learned how to build Full Stack  interactive websites using MERN Stack (Mongodb, ExpressJs, ReactJs, NodeJs).',
                year: '02/2024 - 07/2024',
                location: 'Rawalpindi, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
