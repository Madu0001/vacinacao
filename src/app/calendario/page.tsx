'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Tabs,
  Tab,
  Card,
  CardContent,
  Chip,
  Grid,
  Divider,
} from '@mui/material';
import {
    ArrowBack,
    CalendarMonth,
    ChildCare,
    Elderly,
    PregnantWoman,
    WorkOutline,
    Info,
    Vaccines,
  } from '@mui/icons-material';
  
import Link from 'next/link';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

export default function CalendarioVacinacao() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const calendarioCriancas = [
    {
      idade: 'Ao Nascer',
      vacinas: [
        { nome: 'BCG', doses: '1 dose', protege: 'Formas graves de tuberculose' },
        { nome: 'Hepatite B', doses: '1ª dose', protege: 'Hepatite B' },
      ],
    },
    {
      idade: '2 Meses',
      vacinas: [
        { nome: 'Pentavalente', doses: '1ª dose', protege: 'Difteria, tétano, coqueluche, Haemophilus influenzae tipo b, hepatite B' },
        { nome: 'VIP (Poliomielite)', doses: '1ª dose', protege: 'Poliomielite' },
        { nome: 'Pneumocócica 10', doses: '1ª dose', protege: 'Pneumonia, meningite, otite' },
        { nome: 'Rotavírus', doses: '1ª dose', protege: 'Diarreia por rotavírus' },
      ],
    },
    {
      idade: '3 Meses',
      vacinas: [
        { nome: 'Meningocócica C', doses: '1ª dose', protege: 'Meningite C' },
      ],
    },
    {
      idade: '4 Meses',
      vacinas: [
        { nome: 'Pentavalente', doses: '2ª dose', protege: 'Difteria, tétano, coqueluche, Haemophilus influenzae tipo b, hepatite B' },
        { nome: 'VIP (Poliomielite)', doses: '2ª dose', protege: 'Poliomielite' },
        { nome: 'Pneumocócica 10', doses: '2ª dose', protege: 'Pneumonia, meningite, otite' },
        { nome: 'Rotavírus', doses: '2ª dose', protege: 'Diarreia por rotavírus' },
      ],
    },
    {
      idade: '5 Meses',
      vacinas: [
        { nome: 'Meningocócica C', doses: '2ª dose', protege: 'Meningite C' },
      ],
    },
    {
      idade: '6 Meses',
      vacinas: [
        { nome: 'Pentavalente', doses: '3ª dose', protege: 'Difteria, tétano, coqueluche, Haemophilus influenzae tipo b, hepatite B' },
        { nome: 'VIP (Poliomielite)', doses: '3ª dose', protege: 'Poliomielite' },
      ],
    },
    {
      idade: '9 Meses',
      vacinas: [
        { nome: 'Febre Amarela', doses: '1 dose', protege: 'Febre amarela' },
      ],
    },
    {
      idade: '12 Meses',
      vacinas: [
        { nome: 'Tríplice Viral', doses: '1ª dose', protege: 'Sarampo, caxumba, rubéola' },
        { nome: 'Pneumocócica 10', doses: 'Reforço', protege: 'Pneumonia, meningite, otite' },
        { nome: 'Meningocócica C', doses: 'Reforço', protege: 'Meningite C' },
      ],
    },
    {
      idade: '15 Meses',
      vacinas: [
        { nome: 'DTP', doses: '1º reforço', protege: 'Difteria, tétano, coqueluche' },
        { nome: 'VOP (Gotinha)', doses: '1º reforço', protege: 'Poliomielite' },
        { nome: 'Hepatite A', doses: '1 dose', protege: 'Hepatite A' },
        { nome: 'Tetra Viral', doses: '1 dose', protege: 'Sarampo, caxumba, rubéola, varicela' },
      ],
    },
    {
      idade: '4 Anos',
      vacinas: [
        { nome: 'DTP', doses: '2º reforço', protege: 'Difteria, tétano, coqueluche' },
        { nome: 'VOP (Gotinha)', doses: '2º reforço', protege: 'Poliomielite' },
        { nome: 'Varicela', doses: 'Reforço', protege: 'Catapora' },
      ],
    },
    {
      idade: '9-14 Anos (meninas)',
      vacinas: [
        { nome: 'HPV', doses: '2 doses', protege: 'Câncer de colo de útero, verrugas genitais' },
      ],
    },
    {
      idade: '11-14 Anos (meninos)',
      vacinas: [
        { nome: 'HPV', doses: '2 doses', protege: 'Câncer de pênis, verrugas genitais' },
        { nome: 'Meningocócica ACWY', doses: '1 dose', protege: 'Meningite A, C, W, Y' },
      ],
    },
  ];

  const calendarioAdultos = [
    {
      faixa: '20-59 Anos',
      vacinas: [
        { nome: 'Hepatite B', doses: '3 doses', indicacao: 'Pessoas não vacinadas' },
        { nome: 'Febre Amarela', doses: '1 dose', indicacao: 'Reforço a cada 10 anos ou conforme necessidade' },
        { nome: 'Tríplice Viral', doses: '1 ou 2 doses', indicacao: 'Pessoas não vacinadas' },
        { nome: 'dT ou dTpa', doses: 'Reforço', indicacao: 'A cada 10 anos' },
        { nome: 'Influenza', doses: 'Anual', indicacao: 'Grupos de risco' },
      ],
    },
    {
      faixa: '60+ Anos',
      vacinas: [
        { nome: 'Influenza', doses: 'Anual', indicacao: 'Todos os idosos' },
        { nome: 'Pneumocócica 23', doses: '1 dose', indicacao: 'Todos os idosos' },
        { nome: 'dT', doses: 'Reforço', indicacao: 'A cada 10 anos' },
        { nome: 'Herpes Zóster', doses: '1 ou 2 doses', indicacao: 'Conforme disponibilidade' },
      ],
    },
  ];

  const calendarioGestantes = [
    {
      periodo: 'Qualquer período',
      vacinas: [
        { nome: 'Hepatite B', doses: '3 doses', obs: 'Se não vacinada anteriormente' },
        { nome: 'dTpa', doses: '1 dose', obs: 'A partir da 20ª semana, preferencialmente entre 27ª e 36ª semana' },
      ],
    },
    {
      periodo: 'Campanha de vacinação',
      vacinas: [
        { nome: 'Influenza', doses: '1 dose anual', obs: 'Durante campanha ou conforme disponibilidade' },
      ],
    },
  ];

  const calendarioOcupacional = [
    {
      profissao: 'Profissionais de Saúde',
      vacinas: [
        { nome: 'Hepatite B', frequencia: '3 doses + teste sorológico' },
        { nome: 'Tríplice Viral', frequencia: '2 doses' },
        { nome: 'Varicela', frequencia: '2 doses' },
        { nome: 'dTpa', frequencia: 'Reforço a cada 10 anos' },
        { nome: 'Influenza', frequencia: 'Anual' },
      ],
    },
    {
      profissao: 'Trabalhadores Rurais',
      vacinas: [
        { nome: 'Febre Amarela', frequencia: 'Dose única ou reforço' },
        { nome: 'dT', frequencia: 'Reforço a cada 10 anos' },
        { nome: 'Hepatite B', frequencia: '3 doses' },
      ],
    },
    {
      profissao: 'Professores e Educadores',
      vacinas: [
        { nome: 'Tríplice Viral', frequencia: '2 doses' },
        { nome: 'Varicela', frequencia: '2 doses' },
        { nome: 'dTpa', frequencia: 'Reforço a cada 10 anos' },
        { nome: 'Influenza', frequencia: 'Anual' },
      ],
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f0f7ff' }}>
      {/* Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #0385ff 0%, #4da6ff 100%)',
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
          <Box display="flex" alignItems="center" mb={2}>
            <CalendarMonth sx={{ fontSize: 60, mr: 2 }} />
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Calendário de Vacinação
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{
              opacity: 0.95,
              maxWidth: '800px',
              fontSize: { xs: '1.1rem', md: '1.3rem' },
            }}
          >
            Consulte os calendários de vacinação recomendados pelo Ministério da Saúde
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
            borderLeft: '6px solid #0385ff',
          }}
        >
          <Box display="flex" alignItems="center" mb={2}>
            <Info sx={{ fontSize: 40, color: '#0385ff', mr: 2 }} />
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontWeight: 600, color: '#0385ff' }}
            >
              Mantenha sua Vacinação em Dia
            </Typography>
          </Box>
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#333' }}>
            O calendário de vacinação é elaborado pelo Ministério da Saúde e define as vacinas que devem 
            ser administradas em cada faixa etária. Manter a carteira de vacinação atualizada é fundamental 
            para garantir a proteção individual e coletiva contra doenças graves. Consulte sempre um 
            profissional de saúde para orientações específicas.
          </Typography>
        </Paper>

        {/* Tabs */}
        <Paper elevation={3} sx={{ borderRadius: 3, overflow: 'hidden' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: '#e6f3ff' }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  minHeight: 80,
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#0385ff',
                  '&.Mui-selected': {
                    color: '#0385ff',
                  },
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#0385ff',
                  height: 3,
                },
              }}
            >
              <Tab icon={<ChildCare />} label="Crianças" />
              <Tab icon={<Elderly />} label="Adultos e Idosos" />
              <Tab icon={<PregnantWoman />} label="Gestantes" />
              <Tab icon={<WorkOutline />} label="Ocupacional" />
            </Tabs>
          </Box>

          {/* Tab Panel - Crianças */}
          <TabPanel value={tabValue} index={0}>
            <Container maxWidth="lg">
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, color: '#0385ff', mb: 4, textAlign: 'center' }}
              >
                Calendário de Vacinação Infantil
              </Typography>

              <Grid container spacing={3}>
                {calendarioCriancas.map((item, index) => (
                    <Grid size ={{xs:12}} key={index}>
                    <Card
                      elevation={2}
                      sx={{
                        borderRadius: 3,
                        border: '2px solid #e6f3ff',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: '#0385ff',
                          boxShadow: '0 8px 16px rgba(3,133,255,0.2)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: '#0385ff',
                          color: 'white',
                          p: 2,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Vaccines sx={{ fontSize: 30, mr: 2 }} />
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {item.idade}
                        </Typography>
                      </Box>
                      <CardContent sx={{ p: 3 }}>
                        {item.vacinas.map((vacina, vIndex) => (
                          <Box key={vIndex}>
                            <Grid container spacing={2} alignItems="center" sx={{ mb: 2 }}>
                                <Grid size ={{xs:12, sm:3}}>
                                <Typography
                                  variant="h6"
                                  sx={{ fontWeight: 600, color: '#0385ff' }}
                                >
                                  {vacina.nome}
                                </Typography>
                              </Grid>
                              <Grid size ={{xs:12, sm:3}}>
                                <Chip
                                  label={vacina.doses}
                                  sx={{
                                    bgcolor: '#e6f3ff',
                                    color: '#0385ff',
                                    fontWeight: 600,
                                  }}
                                />
                              </Grid>
                              <Grid size ={{xs:12, sm:6}}>
                                <Typography variant="body2" color="text.secondary">
                                  <strong>Protege contra:</strong> {vacina.protege}
                                </Typography>
                              </Grid>
                            </Grid>
                            {vIndex < item.vacinas.length - 1 && <Divider sx={{ my: 2 }} />}
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </TabPanel>

          {/* Tab Panel - Adultos e Idosos */}
          <TabPanel value={tabValue} index={1}>
            <Container maxWidth="lg">
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, color: '#0385ff', mb: 4, textAlign: 'center' }}
              >
                Calendário de Vacinação para Adultos e Idosos
              </Typography>

              <Grid container spacing={4}>
                {calendarioAdultos.map((item, index) => (
                    <Grid size ={{xs:12, sm:6}} key={index}>
                    <Card
                      elevation={3}
                      sx={{
                        height: '100%',
                        borderRadius: 3,
                        border: '2px solid #e6f3ff',
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: index === 0 ? '#0385ff' : '#0066cc',
                          color: 'white',
                          p: 3,
                          textAlign: 'center',
                        }}
                      >
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {item.faixa}
                        </Typography>
                      </Box>
                      <CardContent sx={{ p: 3 }}>
                        {item.vacinas.map((vacina, vIndex) => (
                          <Box key={vIndex} sx={{ mb: 3 }}>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: 600, color: '#0385ff', mb: 1 }}
                            >
                              {vacina.nome}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                              <strong>Doses:</strong> {vacina.doses}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <strong>Indicação:</strong> {vacina.indicacao}
                            </Typography>
                            {vIndex < item.vacinas.length - 1 && <Divider sx={{ mt: 2 }} />}
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </TabPanel>

          {/* Tab Panel - Gestantes */}
          <TabPanel value={tabValue} index={2}>
            <Container maxWidth="lg">
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, color: '#0385ff', mb: 4, textAlign: 'center' }}
              >
                Calendário de Vacinação para Gestantes
              </Typography>

              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  mb: 4,
                  borderRadius: 3,
                  bgcolor: '#fff8e6',
                  borderLeft: '6px solid #ff9800',
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#e65100' }}>
                  ⚠️ Atenção: Gestantes devem sempre consultar seu médico antes de tomar qualquer vacina.
                </Typography>
              </Paper>

              <Grid container spacing={3}>
                {calendarioGestantes.map((item, index) => (
                    <Grid size ={{xs:12}} key={index}>
                    <Card
                      elevation={2}
                      sx={{
                        borderRadius: 3,
                        border: '2px solid #e6f3ff',
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: '#0385ff',
                          color: 'white',
                          p: 2,
                        }}
                      >
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {item.periodo}
                        </Typography>
                      </Box>
                      <CardContent sx={{ p: 3 }}>
                        {item.vacinas.map((vacina, vIndex) => (
                          <Box key={vIndex}>
                            <Typography
                              variant="h6"
                              sx={{ fontWeight: 600, color: '#0385ff', mb: 1 }}
                            >
                              {vacina.nome}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                              <strong>Doses:</strong> {vacina.doses}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <strong>Observação:</strong> {vacina.obs}
                            </Typography>
                            {vIndex < item.vacinas.length - 1 && <Divider sx={{ my: 2 }} />}
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </TabPanel>

          {/* Tab Panel - Ocupacional */}
          <TabPanel value={tabValue} index={3}>
            <Container maxWidth="lg">
              <Typography
                variant="h4"
                gutterBottom
                sx={{ fontWeight: 600, color: '#0385ff', mb: 4, textAlign: 'center' }}
              >
                Vacinação Ocupacional
              </Typography>

              <Paper
                elevation={2}
                sx={{
                  p: 3,
                  mb: 4,
                  borderRadius: 3,
                  bgcolor: '#e6f3ff',
                  borderLeft: '6px solid #0385ff',
                }}
              >
                <Typography variant="body1" sx={{ fontSize: '1.05rem', lineHeight: 1.8 }}>
                  Algumas profissões requerem vacinação específica devido ao maior risco de exposição a determinadas 
                  doenças. Consulte o serviço de saúde ocupacional da sua empresa ou órgão de saúde local.
                </Typography>
              </Paper>

              <Grid container spacing={4}>
                {calendarioOcupacional.map((item, index) => (
                  <Grid size ={{xs:12, md:4}} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Card
                      elevation={3}
                      sx={{
                        width: '100%',
                        maxWidth: 380,
                        borderRadius: 3,
                        border: '2px solid #e6f3ff',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Box
                        sx={{
                          bgcolor: '#0385ff',
                          color: 'white',
                          p: 3,
                          textAlign: 'center',
                          minHeight: 100,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Typography variant="h5" sx={{ fontWeight: 600 }}>
                          {item.profissao}
                        </Typography>
                      </Box>
                      <CardContent sx={{ p: 3, flexGrow: 1 }}>
                        {item.vacinas.map((vacina, vIndex) => (
                          <Box key={vIndex} sx={{ mb: 2.5 }}>
                            <Typography
                              variant="body1"
                              sx={{ fontWeight: 600, color: '#0385ff', mb: 0.5 }}
                            >
                              {vacina.nome}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {vacina.frequencia}
                            </Typography>
                            {vIndex < item.vacinas.length - 1 && <Divider sx={{ mt: 2 }} />}
                          </Box>
                        ))}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </TabPanel>
        </Paper>

        {/* CTA Final */}
        <Paper
          elevation={3}
          sx={{
            mt: 8,
            p: 5,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #0385ff 0%, #4da6ff 100%)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
            Proteja-se e Proteja os Outros
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.95, mb: 3 }}>
            A vacinação é um ato de amor próprio e coletivo. Mantenha sua carteira sempre atualizada!
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/doencas"
              sx={{
                bgcolor: 'white',
                color: '#0385ff',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#f0f7ff',
                },
              }}
            >
              Conhecer Doenças Preveníveis
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/faq"
              sx={{
                borderColor: 'white',
                color: 'white',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  bgcolor: 'rgba(255,255,255,0.1)',
                },
              }}
            >
              Perguntas Frequentes
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}