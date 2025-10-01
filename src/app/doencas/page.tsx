'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Divider,
} from '@mui/material';
import {
  ArrowBack,
  Warning,
  Coronavirus,
  LocalHospital,
  Shield,
} from '@mui/icons-material';
import Link from 'next/link';

export default function DoencasPreveniveis() {
  const [selectedDoenca, setSelectedDoenca] = useState<number | null>(null);

  const doencas = [
    {
      nome: 'Sarampo',
      icon: <Coronavirus sx={{ fontSize: 40 }} />,
      descricao: 'Doença viral altamente contagiosa que pode causar complicações graves.',
      sintomas: ['Febre alta', 'Tosse', 'Coriza', 'Conjuntivite', 'Manchas vermelhas na pele'],
      complicacoes: ['Pneumonia', 'Encefalite', 'Otite', 'Cegueira', 'Morte em casos graves'],
      vacina: 'Tríplice Viral (SCR)',
      gravidade: 'Alta',
    },
    {
      nome: 'Poliomielite',
      icon: <LocalHospital sx={{ fontSize: 40 }} />,
      descricao: 'Doença infecciosa que pode causar paralisia permanente.',
      sintomas: ['Febre', 'Dor de cabeça', 'Rigidez no pescoço', 'Dor muscular', 'Paralisia flácida'],
      complicacoes: ['Paralisia permanente', 'Atrofia muscular', 'Deformidades', 'Insuficiência respiratória'],
      vacina: 'VIP/VOP (Gotinha)',
      gravidade: 'Muito Alta',
    },
    {
      nome: 'Hepatite B',
      icon: <Warning sx={{ fontSize: 40 }} />,
      descricao: 'Infecção viral que ataca o fígado e pode se tornar crônica.',
      sintomas: ['Fadiga', 'Náusea', 'Dor abdominal', 'Icterícia', 'Urina escura'],
      complicacoes: ['Cirrose hepática', 'Câncer de fígado', 'Insuficiência hepática', 'Morte'],
      vacina: 'Vacina Hepatite B',
      gravidade: 'Alta',
    },
    {
      nome: 'Coqueluche',
      icon: <Coronavirus sx={{ fontSize: 40 }} />,
      descricao: 'Infecção respiratória bacteriana muito contagiosa, especialmente perigosa para bebês.',
      sintomas: ['Tosse intensa e prolongada', 'Som de "guincho" ao respirar', 'Vômitos após tosse', 'Fadiga extrema'],
      complicacoes: ['Pneumonia', 'Convulsões', 'Danos cerebrais', 'Morte em bebês'],
      vacina: 'DTP/dTpa (Tríplice Bacteriana)',
      gravidade: 'Alta',
    },
    {
      nome: 'Rubéola',
      icon: <Warning sx={{ fontSize: 40 }} />,
      descricao: 'Doença viral que pode causar graves defeitos congênitos se contraída durante a gravidez.',
      sintomas: ['Manchas vermelhas na pele', 'Febre baixa', 'Dor de cabeça', 'Linfonodos inchados'],
      complicacoes: ['Síndrome da Rubéola Congênita', 'Defeitos cardíacos no feto', 'Surdez', 'Catarata congênita'],
      vacina: 'Tríplice Viral (SCR)',
      gravidade: 'Média a Alta',
    },
    {
      nome: 'Difteria',
      icon: <LocalHospital sx={{ fontSize: 40 }} />,
      descricao: 'Infecção bacteriana grave que afeta a garganta e pode obstruir as vias respiratórias.',
      sintomas: ['Dor de garganta', 'Febre', 'Membrana cinza na garganta', 'Dificuldade para respirar'],
      complicacoes: ['Obstrução das vias aéreas', 'Danos ao coração', 'Paralisia', 'Insuficiência respiratória'],
      vacina: 'DTP/dTpa (Tríplice Bacteriana)',
      gravidade: 'Muito Alta',
    },
    {
      nome: 'Caxumba',
      icon: <Warning sx={{ fontSize: 40 }} />,
      descricao: 'Doença viral que causa inchaço das glândulas salivares.',
      sintomas: ['Inchaço das glândulas parótidas', 'Febre', 'Dor ao mastigar', 'Dor de cabeça'],
      complicacoes: ['Meningite', 'Encefalite', 'Surdez', 'Infertilidade (raro)', 'Orquite/Ooforite'],
      vacina: 'Tríplice Viral (SCR)',
      gravidade: 'Média',
    },
    {
      nome: 'Tétano',
      icon: <LocalHospital sx={{ fontSize: 40 }} />,
      descricao: 'Infecção bacteriana grave que causa espasmos musculares dolorosos.',
      sintomas: ['Rigidez muscular', 'Espasmos dolorosos', 'Dificuldade para engolir', 'Febre', 'Sudorese'],
      complicacoes: ['Fratura óssea', 'Pneumonia', 'Espasmo laríngeo', 'Morte por asfixia'],
      vacina: 'DTP/dTpa (Tríplice Bacteriana)',
      gravidade: 'Muito Alta',
    },
  ];

  const getGravidadeColor = (gravidade: string) => {
    switch (gravidade) {
      case 'Muito Alta':
        return '#d32f2f';
      case 'Alta':
        return '#f57c00';
      case 'Média a Alta':
        return '#fbc02d';
      default:
        return '#fbc02d';
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#fffef0' }}>
      {/* Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #f9a825 0%, #fdd835 100%)',
          color: '#333',
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
              color: '#333',
              mb: 3,
              '&:hover': {
                bgcolor: 'rgba(0,0,0,0.05)',
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
            Doenças Preveníveis por Vacinas
          </Typography>
          <Typography
            variant="h5"
            sx={{
              opacity: 0.9,
              maxWidth: '800px',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
            }}
          >
            Conheça as doenças graves que podem ser evitadas através da vacinação
          </Typography>
        </Container>
      </Box>

      {/* Intro */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper
          elevation={2}
          sx={{
            p: 4,
            mb: 6,
            borderRadius: 3,
            bgcolor: 'white',
            borderLeft: '6px solid #f9a825',
          }}
        >
          <Box display="flex" alignItems="center" mb={2}>
            <Shield sx={{ fontSize: 40, color: '#f9a825', mr: 2 }} />
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: 600, color: '#f9a825' }}
            >
              A Importância da Prevenção
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
            As vacinas são capazes de prevenir uma série de doenças graves que, antes de sua existência, 
            causavam milhões de mortes e sequelas permanentes em todo o mundo. Graças à imunização, 
            muitas dessas doenças foram praticamente erradicadas ou tiveram sua incidência drasticamente 
            reduzida. Conhecer essas doenças nos ajuda a entender por que a vacinação é tão importante.
          </Typography>
        </Paper>

        {/* Lista de Doenças */}
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600, color: '#f9a825', mb: 4, textAlign: 'center' }}
        >
          Principais Doenças
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {doencas.map((doenca, index) => (
            <Grid size={{xs:12, sm:6, md:4}} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Card
                sx={{
                  width: '100%',
                  maxWidth: 380,
                  minHeight: 480,
                  maxHeight: 480,
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  border: selectedDoenca === index ? '3px solid #f9a825' : '1px solid #e0e0e0',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(249,168,37,0.3)',
                  },
                }}
                onClick={() => setSelectedDoenca(selectedDoenca === index ? null : index)}
              >
                <Box
                  sx={{
                    bgcolor: '#fff9e6',
                    p: 3,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottom: '2px solid #f9a825',
                  }}
                >
                  <Box sx={{ color: '#f9a825' }}>{doenca.icon}</Box>
                </Box>
                <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600, color: '#333', mb: 2 }}
                  >
                    {doenca.nome}
                  </Typography>
                  <Chip
                    label={`Gravidade: ${doenca.gravidade}`}
                    size="small"
                    sx={{
                      bgcolor: getGravidadeColor(doenca.gravidade),
                      color: 'white',
                      fontWeight: 600,
                      mb: 2,
                    }}
                  />
                  <Typography variant="body2" color="text.secondary" paragraph sx={{ lineHeight: 1.6, flexGrow: 1 }}>
                    {doenca.descricao}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="body2" sx={{ fontWeight: 600, color: '#f9a825' }}>
                    Vacina: {doenca.vacina}
                  </Typography>
                  <Button
                    size="small"
                    sx={{
                      mt: 2,
                      color: '#f9a825',
                      fontWeight: 600,
                    }}
                  >
                    {selectedDoenca === index ? 'Ver menos ▲' : 'Ver mais ▼'}
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Detalhes da Doença Selecionada */}
        {selectedDoenca !== null && (
          <Paper
            elevation={3}
            sx={{
              mt: 4,
              p: 4,
              borderRadius: 3,
              bgcolor: '#fff9e6',
              border: '2px solid #f9a825',
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 600, color: '#f9a825', mb: 3 }}
            >
              {doencas[selectedDoenca].nome} - Detalhes
            </Typography>

            <Grid container spacing={4}>
            <Grid size ={{xs:12, md:6}}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: '#333', mb: 2 }}
                >
                  Sintomas Comuns:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {doencas[selectedDoenca].sintomas.map((sintoma, idx) => (
                    <Typography component="li" variant="body1" key={idx} sx={{ mb: 1, lineHeight: 1.6 }}>
                      {sintoma}
                    </Typography>
                  ))}
                </Box>
              </Grid>

              <Grid size ={{xs:12, md:6}}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: '#d32f2f', mb: 2 }}
                >
                  Possíveis Complicações:
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  {doencas[selectedDoenca].complicacoes.map((complicacao, idx) => (
                    <Typography component="li" variant="body1" key={idx} sx={{ mb: 1, lineHeight: 1.6 }}>
                      {complicacao}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            </Grid>

            <Box
              sx={{
                mt: 3,
                p: 2,
                bgcolor: 'white',
                borderRadius: 2,
                borderLeft: '4px solid #f9a825',
              }}
            >
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                ✓ Prevenção: {doencas[selectedDoenca].vacina}
              </Typography>
            </Box>
          </Paper>
        )}

        {/* CTA */}
        <Box
          sx={{
            mt: 8,
            p: 4,
            bgcolor: '#fff9e6',
            borderRadius: 3,
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 600, color: '#f9a825', mb: 2 }}
          >
            Proteja-se Agora
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Consulte o calendário de vacinação e garanta que você e sua família estejam protegidos.
          </Typography>
          <Button
            variant="contained"
            size="large"
            component={Link}
            href="/calendario"
            sx={{
              mt: 2,
              bgcolor: '#f9a825',
              color: '#333',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 600,
              '&:hover': {
                bgcolor: '#f57f17',
              },
            }}
          >
            Ver Calendário de Vacinação
          </Button>
        </Box>
      </Container>
    </Box>
  );
}