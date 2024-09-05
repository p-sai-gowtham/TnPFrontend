import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Avatar,
} from "@mui/material";

// Sample data for faculty members
const facultyData = [
  {
    name: "Mr. G. Prakash Babu",
    position: "Training and Placement Officer",
    imageUrl: "https://lendi.org/images/tpo.jpg",
  },
  {
    name: "Mr. P.Jagannadha Varma",
    position: "Associate Professor",
    imageUrl: "https://lendi.org/images/15.jpg",
  },
  {
    name: "Mr V. Anji Reddy",
    position: "Associate Professor",
    imageUrl: "https://lendi.org/images/18.jpg",
  },
  {
    name: "Dr. B V S ACHARYULU",
    position: "Associate Professor",
    imageUrl: "https://lendi.org/images/comprofiler/575_5a475a1ee4e4a.jpg",
  },
  {
    name: "Mr B.Rama Mohan",
    position: "Associate Professor",
    imageUrl: "https://lendi.org/images/ece_7.jpg",
  },
];
const developers = [
  {
    name: "Srikar Tenneti",
    position: "UI/UX Designer",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQEzwipPPpwNZQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724266569441?e=2147483647&v=beta&t=G_wDMpGB7JacBne42T12jSepZYuMKjWuCk9RZEV2reI",
  },
  {
    name: "Amiti Sudhish",
    position: "Frontend Developer",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQGh6dx31d8rhw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1710072777112?e=1730937600&v=beta&t=i1WpvBuKy7BvzMwJztAm7UUPzS9ASRiapbKq27-4NQI",
  },
  {
    name: "Puvvula Sai Gowtham",
    position: "Backend Developer",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D5603AQFGvDHQPtdBkw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1723205983223?e=2147483647&v=beta&t=iPuQc-nwk9owPPlRBeDqC6NqfK_gzD_teKmdOthdQac",
  },
  {
    name: "Vetla Eswara Rao",
    position: "Backend Developer",
    imageUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQFVsI_uv3KJzQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1725355120485?e=1730937600&v=beta&t=yoAG7Fye2Il-_FZft47h4T4bH5h3NILlKwblgxKEIHs",
  },
];

function About() {
  return (
    <Container sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        About Our Department
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to the Training and placement cell. Our department is dedicated
        to providing high-quality education and research opportunities in the
        field of computer science. Our faculty members are experts in their
        fields and are committed to fostering an environment of learning and
        innovation.
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Meet Our Faculty
      </Typography>
      <Grid container spacing={4}>
        {facultyData.map((faculty, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                margin: 2,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={faculty.imageUrl}
                alt={faculty.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="h3">
                  {faculty.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {faculty.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography variant="h5" component="h2" gutterBottom>
        Developers
      </Typography>
      <Grid container spacing={4}>
        {developers.map((faculty, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                margin: 2,
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <CardMedia
                component="img"
                height="300"
                image={faculty.imageUrl}
                alt={faculty.name}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" component="h3">
                  {faculty.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {faculty.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default About;
