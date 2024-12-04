const review = [
    {
        id: 0,
        clientName: 'Mustafash',
        clientLocation: 'Egypt',
        clientSource: 'Fiverr',
        clientReview: 'Working with him is always a pleasure. He completes tasks efficiently and consistently goes above and beyond expectations. His expertise in his field is evident, and I eagerly anticipate collaborating with him again in the future.'
    },
    {
        id: 2,
        clientName: 'Melissabrown255',
        clientLocation: 'United States',
        clientSource: 'Fiverr',
        clientReview: 'He communicates exceptionally well and is a highly skilled website developer. Working with him has been a fantastic experience. '
    },
    {
        id: 3,
        clientName: 'Jake Corry',
        clientLocation: 'Germany',
        clientSource: 'Fiverr',
        clientReview: "Hammad is incredibly knowledgeable and supportive. He has an in-depth understanding of web app development and demonstrates impressive expertise in various technologies and frameworks. I look forward to the opportunity to work with him again."
    },
    {
        id: 4,
        clientName: 'Blaise Labriola',
        clientLocation: 'France',
        clientSource: 'Fiverr',
        clientReview: 'I have worked with Hammad, and he is a highly professional and exceptional software developer. I greatly admire his development speed and the quality of his work when assigned a task.'
    },
]
export default function handler(req, res) {
    res.status(200).json(review)
}
