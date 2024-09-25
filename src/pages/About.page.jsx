import React from 'react';
import { Box, Typography } from '@mui/material';

function AboutPage() {
    return (
        <Box
            sx={{
                width: '80%',
                margin: '0 auto',
                padding: '20px',
                backgroundColor: '#f4f4f4',
                borderRadius: '8px',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                lineHeight: 1.6,
                fontFamily: 'Arial, sans-serif',
            }}
        >
            <Typography
                variant="h2"
                sx={{
                    textAlign: 'center',
                    marginBottom: '20px',
                    color: '#333'
                }}
            >
                About Our Web Application
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    marginBottom: '15px',
                    color: '#555'
                }}
            >
                Welcome to our innovative web application designed specifically for book lovers and aspiring authors. Our platform allows users to explore a vast collection of literary works while providing authors with the tools they need to showcase their creations to a wider audience.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    marginBottom: '15px',
                    color: '#555'
                }}
            >
                One of the standout features of our application is the ability to read detailed summaries of books available on the market. Unlike typical platforms that offer only brief descriptions, we provide extensive summaries that delve into the key themes, characters, and plotlines of each book. This allows readers to gain a deeper understanding of the literary works before deciding to purchase or read them.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    marginBottom: '15px',
                    color: '#555'
                }}
            >
                As an author, you can take advantage of our platform's unique offerings by signing up for an account. Our user-friendly signup process allows you to create your author profile, where you can upload your books and manage your literary portfolio with ease. You can log in to your account anytime to add new books, update existing entries, and interact with readers who appreciate your work.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    marginBottom: '15px',
                    color: '#555'
                }}
            >
                By becoming part of our community, you will not only share your stories but also connect with a network of other writers and readers who are passionate about literature. This creates an environment where authors can gain valuable feedback on their work and readers can discover hidden gems in the literary world.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    marginBottom: '15px',
                    color: '#555'
                }}
            >
                Our platform is designed with simplicity in mind, ensuring that navigating through your dashboard and managing your books is a breeze. You can easily categorize your works, add cover images, and provide a detailed description that captures the essence of your writing.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    marginBottom: '15px',
                    color: '#555'
                }}
            >
                In addition to these features, we prioritize user experience and privacy. Our application is built with robust security measures to protect your data, ensuring that your personal information and literary works remain safe. We encourage authors to share their unique voices without the fear of compromise.
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    marginBottom: '15px',
                    color: '#555'
                }}
            >
                If you’re looking to dive into the world of literature, whether as a reader seeking in-depth summaries or as an author eager to share your stories, our platform is the perfect place for you. Join us today and be part of a thriving community that celebrates the beauty of books and storytelling.
            </Typography>
            <Typography
                variant="h6"
                sx={{
                    textAlign: 'center',
                    marginTop: '30px',
                    color: '#333'
                }}
            >
                Contact Information
            </Typography>
            <Typography
                variant="body1"
                sx={{
                    textAlign: 'center',
                    color: '#555'
                }}
            >
                For inquiries, please reach out to: <br />
                <strong>Ori Cohen</strong> <br />
                Email: <a href="mailto:oricohenlink@gmail.com">oricohenlink@gmail.com</a>
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    textAlign: 'center',
                    marginTop: '20px',
                    color: '#777'
                }}
            >
                © {new Date().getFullYear()} Ori Cohen. All rights reserved.
            </Typography>
        </Box>
    );
}

export default AboutPage;
