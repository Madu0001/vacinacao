'use client';
import React from 'react';
import {Box, Container, Typography, Button, Grid, Card, CardContent, CardActions, CardMedia,} from '@mui/material';
import {Vaccines, CalendarMonth, HealthAndSafety, Quiz,} from '@mui/icons-material';
import Link from 'next/link';

export default function Home() {
  const sections = [
    {
      title: 'Sobre Vacinas',
      description: 'Entenda como as vacinas funcionam, seus tipos e importância para a saúde individual e coletiva.',
      icon: <Vaccines sx={{ fontSize: 60 }} />,
      link: '/sobre-vacinas',
      color: '#4CAF50',
    },
    {
      title: 'Calendário de Vacinação',
      description: 'Consulte o calendário vacinal por faixa etária e mantenha sua carteirinha em dia.',
      icon: <CalendarMonth sx={{ fontSize: 60 }} />,
      link: '/calendario',
      color: '#2196F3',
    },
    {
      title: 'Doenças Preveníveis',
      description: 'Conheça as doenças que podem ser evitadas através da vacinação e suas consequências.',
      icon: <HealthAndSafety sx={{ fontSize: 60 }} />,
      link: '/doencas',
      color: '#FF9800',
    },
    {
      title: 'Perguntas Frequentes',
      description: 'Tire suas dúvidas sobre vacinas, efeitos colaterais e muito mais.',
      icon: <Quiz sx={{ fontSize: 60 }} />,
      link: '/faq',
      color: '#9C27B0',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f0f8f4' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg,rgb(47, 114, 201) 0%,rgb(162, 195, 255) 100%)',
          color: 'white',
          py: 12,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.1,
          },
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box textAlign="center">
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
              }}
            >
              Portal de Informações sobre Vacinas
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.95,
                maxWidth: '800px',
                minWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.5rem' },
              }}
            >
              Informação confiável e baseada em ciência para proteger você e sua família
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, color: '#333' }}
          >
            Explore Nosso Conteúdo
          </Typography>
          <Typography variant="h6" color="text.secondary" sx={{ maxWidth: '700px', mx: 'auto' }}>
            Navegue pelas seções e encontre informações completas sobre vacinação
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {sections.map((section, index) => (
            <Grid size = {{xs:12, sm:6, md:6}} key={index}>
              <Card
                sx={{
                  height: '100%',
                  minHeight: 380,
                  maxWidth: '500px',
                  minWidth: '500px',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
                  },
                  borderRadius: 3,
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    bgcolor: section.color,
                    color: 'white',
                    py: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {section.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: 600, mb: 2 }}
                  >
                    {section.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {section.description}
                  </Typography>
                </CardContent>
                <CardActions sx={{ p: 3, pt: 0 }}>
                  <Button
                    size="large"
                    component={Link}
                    href={section.link}
                    sx={{
                      color: section.color,
                      fontWeight: 600,
                      '&:hover': {
                        bgcolor: `${section.color}15`,
                      },
                    }}
                  >
                    Saiba Mais →
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          bgcolor: '#e3f2fd',
          py: 8,
          mt: 6,
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 600, color: '#1976d2', mb: 2 }}
            >
              Mantenha sua saúde em dia
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              A vacinação é um dos meios mais eficazes de prevenção de doenças.
              Proteja-se e proteja quem você ama.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/calendario"
              sx={{
                mt: 2,
                bgcolor: '#1976d2',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: '#1565c0',
                },
              }}
            >
              Ver Calendário de Vacinação
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}