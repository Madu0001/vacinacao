'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Button,
  Divider,
} from '@mui/material';
import {
  ExpandMore,
  Biotech,
  Security,
  Science,
  Groups,
  CheckCircle,
  ArrowBack,
} from '@mui/icons-material';
import Link from 'next/link';

export default function SobreVacinas() {
  const tiposVacinas = [
    {
      titulo: 'Vacinas de vírus/bactéria atenuados',
      descricao: 'Contêm o microrganismo vivo, mas enfraquecido. Estimulam uma resposta imunológica forte e duradoura.',
      exemplos: 'Sarampo, Caxumba, Rubéola (Tríplice Viral), Febre Amarela',
    },
    {
      titulo: 'Vacinas inativadas',
      descricao: 'Utilizam o microrganismo morto. São seguras, mas geralmente requerem doses de reforço.',
      exemplos: 'Hepatite A, Poliomielite (Salk), Raiva',
    },
    {
      titulo: 'Vacinas de subunidades',
      descricao: 'Contêm apenas partes específicas do microrganismo (proteínas ou açúcares).',
      exemplos: 'Hepatite B, HPV, Coqueluche',
    },
    {
      titulo: 'Vacinas de mRNA',
      descricao: 'Tecnologia mais recente que ensina as células a produzir uma proteína que desencadeia a resposta imune.',
      exemplos: 'COVID-19 (Pfizer, Moderna)',
    },
  ];

  const beneficios = [
    {
      icon: <Security sx={{ fontSize: 50, color: '#2e7d32' }} />,
      titulo: 'Proteção Individual',
      descricao: 'As vacinas protegem você de doenças graves, reduzindo o risco de complicações e hospitalizações.',
    },
    {
      icon: <Groups sx={{ fontSize: 50, color: '#2e7d32' }} />,
      titulo: 'Imunidade Coletiva',
      descricao: 'Quando muitas pessoas são vacinadas, a transmissão da doença diminui, protegendo toda a comunidade.',
    },
    {
      icon: <Science sx={{ fontSize: 50, color: '#2e7d32' }} />,
      titulo: 'Erradicação de Doenças',
      descricao: 'A vacinação em massa já erradicou a varíola e está próxima de eliminar a poliomielite.',
    },
    {
      icon: <Biotech sx={{ fontSize: 50, color: '#2e7d32' }} />,
      titulo: 'Desenvolvimento Científico',
      descricao: 'As vacinas passam por rigorosos testes clínicos e são constantemente monitoradas por sua segurança.',
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f0f8f4' }}>
      {/* Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #2e7d32 0%, #66bb6a 100%)',
          color: 'white',
          py: 8,
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Button
            component={Link}
            href="/"
            startIcon={<ArrowBack />}
            sx={{
              color: 'white',
              mb: 3,
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.1)',
              },
            }}
          >
            Voltar para Home
          </Button>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              fontSize: { xs: '2rem', md: '3rem' },
            }}
          >
            Sobre Vacinas
          </Typography>
          <Typography
            variant="h5"
            sx={{
              opacity: 0.95,
              maxWidth: '800px',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
            }}
          >
            Entenda como as vacinas funcionam e por que são essenciais para a saúde pública
          </Typography>
        </Container>
      </Box>

      {/* Como Funcionam */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Paper
          elevation={2}
          sx={{
            p: 4,
            mb: 6,
            borderRadius: 3,
            bgcolor: 'white',
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, color: '#2e7d32', mb: 3 }}
          >
            Como as Vacinas Funcionam?
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            As vacinas são preparações biológicas que estimulam o sistema imunológico a reconhecer e combater 
            agentes causadores de doenças, como vírus e bactérias. Elas funcionam apresentando ao organismo 
            uma versão enfraquecida, inativada ou apenas partes do microrganismo.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Quando o sistema imunológico entra em contato com a vacina, ele produz anticorpos e células de 
            memória. Caso a pessoa seja exposta ao agente infeccioso real no futuro, o corpo já terá 
            &quot;memória&quot; de como combatê-lo, respondendo rapidamente e evitando que a doença se desenvolva.
          </Typography>
          <Box
            sx={{
              mt: 4,
              p: 3,
              bgcolor: '#e8f5e9',
              borderRadius: 2,
              borderLeft: '4px solid #2e7d32',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, color: '#2e7d32' }}>
              <CheckCircle sx={{ verticalAlign: 'middle', mr: 1 }} />
              Importante saber:
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              As vacinas não causam a doença que previnem. Elas apenas &quot;ensinam&quot; o sistema imunológico 
              a se defender, sem causar a infecção completa.
            </Typography>
          </Box>
        </Paper>

        {/* Tipos de Vacinas */}
        <Box mb={6}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, color: '#2e7d32', mb: 4 }}
          >
            Tipos de Vacinas
          </Typography>
          {tiposVacinas.map((tipo, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                '&:before': { display: 'none' },
                borderRadius: 2,
                overflow: 'hidden',
                '&:first-of-type': { borderRadius: 2 },
                '&:last-of-type': { borderRadius: 2 },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
                sx={{
                  bgcolor: '#e8f5e9',
                  '&:hover': { bgcolor: '#c8e6c9' },
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600, color: '#2e7d32' }}>
                  {tipo.titulo}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 3 }}>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  {tipo.descricao}
                </Typography>
                <Divider sx={{ my: 2 }} />
                <Typography variant="body2" sx={{ fontWeight: 600, color: '#2e7d32' }}>
                  Exemplos:
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {tipo.exemplos}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Benefícios */}
        <Box mb={6}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, color: '#2e7d32', mb: 4, textAlign: 'center' }}
          >
            Por Que Vacinar?
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {beneficios.map((beneficio, index) => (
              <Grid size ={{xs:12, sm:6, md:3}} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    maxWidth: '250px',
                    minWidth: '250px',
                    textAlign: 'center',
                    borderRadius: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 24px rgba(0,0,0,0.1)',
                    },
                  }}
                >
                  <Box mb={2}>{beneficio.icon}</Box>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600, color: '#333', mb: 2 }}
                  >
                    {beneficio.titulo}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                    {beneficio.descricao}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Segurança */}
        <Paper
          elevation={2}
          sx={{
            p: 4,
            borderRadius: 3,
            bgcolor: 'white',
          }}
        >
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, color: '#2e7d32', mb: 3 }}
          >
            Segurança e Eficácia
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Todas as vacinas aprovadas passam por rigorosas fases de testes clínicos antes de serem 
            disponibilizadas ao público. Esses testes avaliam a segurança e a eficácia em milhares de 
            voluntários.
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Após a aprovação, os órgãos reguladores continuam monitorando as vacinas através de sistemas 
            de vigilância que detectam qualquer evento adverso raro. Este acompanhamento contínuo garante 
            que as vacinas permaneçam seguras ao longo do tempo.
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            Os benefícios da vacinação superam amplamente os riscos. Reações graves são extremamente raras, 
            enquanto as doenças prevenidas por vacinas podem causar complicações sérias e até morte.
          </Typography>
        </Paper>
      </Container>

      {/* CTA */}
      <Box
        sx={{
          bgcolor: '#e8f5e9',
          py: 6,
        }}
      >
        <Container maxWidth="md">
          <Box textAlign="center">
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 600, color: '#2e7d32', mb: 2 }}
            >
              Pronto para se proteger?
            </Typography>
            <Typography variant="h6" color="text.secondary" paragraph>
              Consulte o calendário de vacinação e mantenha suas doses em dia.
            </Typography>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/calendario"
              sx={{
                mt: 2,
                bgcolor: '#2e7d32',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                '&:hover': {
                  bgcolor: '#1b5e20',
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