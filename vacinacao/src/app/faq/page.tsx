'use client';

import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Grid,
} from '@mui/material';
import {
  ArrowBack,
  ExpandMore,
  HelpOutline,
  Vaccines,
  CalendarMonth,
  Warning,
  VerifiedUser,
  Science,
} from '@mui/icons-material';
import Link from 'next/link';

export default function PerguntasFrequentes() {
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const categorias = [
    {
      nome: 'Segurança',
      icon: <VerifiedUser sx={{ fontSize: 40 }} />,
      cor: '#ab02d1',
      perguntas: [
        {
          pergunta: 'As vacinas são seguras?',
          resposta: 'Sim! As vacinas passam por rigorosos testes de segurança antes de serem aprovadas. Elas são testadas em várias fases de ensaios clínicos e continuamente monitoradas após a aprovação. Os benefícios das vacinas superam amplamente os riscos de possíveis efeitos colaterais, que geralmente são leves e temporários.',
        },
        {
          pergunta: 'Quais são os efeitos colaterais comuns?',
          resposta: 'Os efeitos colaterais mais comuns são leves e incluem: dor no local da injeção, febre baixa, fadiga e dor de cabeça. Esses sintomas geralmente desaparecem em poucos dias. Reações graves são extremamente raras e os profissionais de saúde estão preparados para lidar com elas.',
        },
        {
          pergunta: 'Posso ter uma reação alérgica à vacina?',
          resposta: 'Reações alérgicas graves são muito raras, ocorrendo em aproximadamente 1 a cada milhão de doses. Por isso, é recomendado que você permaneça no local de vacinação por 15-30 minutos após receber a vacina. Informe sempre ao profissional de saúde sobre qualquer alergia conhecida.',
        },
      ],
    },
    {
      nome: 'Eficácia',
      icon: <Science sx={{ fontSize: 40 }} />,
      cor: '#8b00b3',
      perguntas: [
        {
          pergunta: 'As vacinas realmente funcionam?',
          resposta: 'Sim! As vacinas são uma das intervenções de saúde pública mais eficazes já desenvolvidas. Elas preveniram milhões de mortes e erradicaram ou controlaram doenças que antes causavam epidemias devastadoras, como a varíola e a poliomielite em muitas regiões do mundo.',
        },
        {
          pergunta: 'Por que preciso de doses de reforço?',
          resposta: 'Algumas vacinas requerem doses de reforço porque a proteção pode diminuir com o tempo. Os reforços "relembram" seu sistema imunológico sobre como combater a doença, mantendo a imunidade em níveis eficazes. O calendário de reforços é baseado em extensos estudos científicos.',
        },
        {
          pergunta: 'Posso pegar a doença mesmo vacinado?',
          resposta: 'Embora as vacinas sejam altamente eficazes, nenhuma é 100% eficaz. No entanto, pessoas vacinadas que contraem a doença geralmente apresentam sintomas mais leves e menor risco de complicações graves. A vacinação também reduz significativamente a transmissão.',
        },
      ],
    },
    {
      nome: 'Administração',
      icon: <Vaccines sx={{ fontSize: 40 }} />,
      cor: '#6b009d',
      perguntas: [
        {
          pergunta: 'Posso tomar várias vacinas ao mesmo tempo?',
          resposta: 'Sim! É seguro e comum receber múltiplas vacinas na mesma visita. O sistema imunológico pode lidar facilmente com várias vacinas simultaneamente. Isso é mais conveniente e garante que você fique protegido mais rapidamente contra várias doenças.',
        },
        {
          pergunta: 'O que fazer se perdi uma dose?',
          resposta: 'Se você perdeu uma dose, procure um posto de saúde o mais rápido possível para retomar o calendário vacinal. Na maioria dos casos, não é necessário recomeçar toda a série de vacinação. O profissional de saúde avaliará sua situação e recomendará o melhor curso de ação.',
        },
        {
          pergunta: 'Grávidas podem se vacinar?',
          resposta: 'Algumas vacinas são recomendadas durante a gravidez (como a vacina contra gripe e tétano), enquanto outras devem ser evitadas. É fundamental consultar seu médico para saber quais vacinas são seguras e recomendadas durante a gestação, pois algumas protegem tanto a mãe quanto o bebê.',
        },
      ],
    },
    {
      nome: 'Calendário',
      icon: <CalendarMonth sx={{ fontSize: 40 }} />,
      cor: '#5b008d',
      perguntas: [
        {
          pergunta: 'Qual é a idade certa para vacinar?',
          resposta: 'Cada vacina tem uma idade recomendada baseada em quando o sistema imunológico está melhor preparado para responder e quando há maior risco de exposição à doença. O calendário nacional de vacinação é desenvolvido por especialistas para fornecer proteção ideal em cada fase da vida.',
        },
        {
          pergunta: 'Adultos precisam se vacinar?',
          resposta: 'Sim! A vacinação não é apenas para crianças. Adultos precisam de reforços de certas vacinas e podem precisar de vacinas adicionais dependendo da idade, condições de saúde, profissão ou planos de viagem. Consulte o calendário de vacinação do adulto.',
        },
        {
          pergunta: 'Como sei quais vacinas já tomei?',
          resposta: 'A melhor forma é manter sua caderneta de vacinação atualizada. Se você perdeu sua caderneta, pode solicitar um histórico vacinal em postos de saúde ou através de sistemas online disponibilizados pelo Ministério da Saúde. Mantenha sempre um registro das suas vacinas.',
        },
      ],
    },
    {
      nome: 'Mitos e Verdades',
      icon: <Warning sx={{ fontSize: 40 }} />,
      cor: '#4b007d',
      perguntas: [
        {
          pergunta: 'Vacinas causam autismo?',
          resposta: 'NÃO! Esta é uma informação completamente falsa que foi desmentida por inúmeros estudos científicos. Não há nenhuma relação entre vacinas e autismo. Este mito surgiu de um estudo fraudulento que foi completamente desacreditado pela comunidade científica.',
        },
        {
          pergunta: 'Imunidade natural é melhor que a vacina?',
          resposta: 'Não necessariamente. Embora a infecção natural possa produzir imunidade, ela vem com riscos sérios de complicações, hospitalização e morte. As vacinas fornecem proteção sem expor você aos perigos da doença. É uma forma muito mais segura de obter imunidade.',
        },
        {
          pergunta: 'Vacinas contêm microchips ou substâncias perigosas?',
          resposta: 'NÃO! Vacinas não contêm microchips, metais pesados prejudiciais ou qualquer substância para rastreamento. Os ingredientes das vacinas são públicos e servem propósitos específicos, como preservar a vacina ou aumentar a resposta imunológica. Todas as substâncias são rigorosamente testadas.',
        },
      ],
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f5f0f7' }}>
      {/* Header */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #ab02d1 0%, #d946f5 100%)',
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
            <HelpOutline sx={{ fontSize: 60, mr: 2 }} />
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2rem', md: '3rem' },
              }}
            >
              Perguntas Frequentes
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
            Tire suas dúvidas sobre vacinação e saiba tudo sobre como proteger você e sua família
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
            borderLeft: '6px solid #ab02d1',
          }}
        >
          <Typography variant="body1" sx={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#333' }}>
            A vacinação é um dos temas mais importantes para a saúde pública, mas também gera muitas 
            dúvidas. Reunimos aqui as perguntas mais frequentes sobre vacinas, organizadas por categoria, 
            com respostas baseadas em evidências científicas e informações oficiais. Se você não encontrar 
            a resposta para sua dúvida, procure um profissional de saúde qualificado.
          </Typography>
        </Paper>

        {/* Categorias */}
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{ fontWeight: 600, color: '#ab02d1', mb: 4, textAlign: 'center' }}
        >
          Categorias de Perguntas
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {categorias.map((categoria, index) => (
            <Grid size ={{xs:12, sm:6, md:4}} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            
              <Paper
                elevation={3}
                sx={{
                  width: '100%',
                  maxWidth: 280,
                  minHeight: 160,
                  maxHeight: 160,
                  p: 3,
                  borderRadius: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  bgcolor: categoria.cor,
                  color: 'white',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 24px rgba(171,2,209,0.4)',
                  },
                }}
                onClick={() => {
                  const element = document.getElementById(`categoria-${index}`);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                <Box sx={{ mb: 1 }}>{categoria.icon}</Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  {categoria.nome}
                </Typography>
                <Chip
                  label={`${categoria.perguntas.length} perguntas`}
                  size="small"
                  sx={{
                    mt: 1,
                    bgcolor: 'rgba(255,255,255,0.2)',
                    color: 'white',
                    fontWeight: 500,
                  }}
                />
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Perguntas por Categoria */}
        {categorias.map((categoria, catIndex) => (
          <Box key={catIndex} id={`categoria-${catIndex}`} sx={{ mb: 6 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: 3,
                pb: 2,
                borderBottom: `3px solid ${categoria.cor}`,
              }}
            >
              <Box sx={{ color: categoria.cor, mr: 2 }}>{categoria.icon}</Box>
              <Typography
                variant="h4"
                component="h3"
                sx={{ fontWeight: 600, color: categoria.cor }}
              >
                {categoria.nome}
              </Typography>
            </Box>

            {categoria.perguntas.map((item, pergIndex) => (
              <Accordion
                key={pergIndex}
                expanded={expanded === `panel${catIndex}-${pergIndex}`}
                onChange={handleChange(`panel${catIndex}-${pergIndex}`)}
                sx={{
                  mb: 2,
                  borderRadius: 2,
                  '&:before': {
                    display: 'none',
                  },
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                  border: expanded === `panel${catIndex}-${pergIndex}` ? `2px solid ${categoria.cor}` : '1px solid #e0e0e0',
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore sx={{ color: categoria.cor }} />}
                  sx={{
                    bgcolor: expanded === `panel${catIndex}-${pergIndex}` ? `${categoria.cor}15` : 'white',
                    borderRadius: 2,
                    '&:hover': {
                      bgcolor: `${categoria.cor}10`,
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: '#333',
                      fontSize: { xs: '1rem', md: '1.2rem' },
                    }}
                  >
                    {item.pergunta}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    bgcolor: 'white',
                    pt: 3,
                    pb: 3,
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      lineHeight: 1.8,
                      color: '#555',
                      fontSize: '1.05rem',
                    }}
                  >
                    {item.resposta}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}

        {/* CTA Final */}
        <Paper
          elevation={3}
          sx={{
            mt: 8,
            p: 5,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #ab02d1 0%, #d946f5 100%)',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 600, mb: 2 }}
          >
            Ainda tem dúvidas?
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.95, mb: 3 }}>
            Consulte sempre um profissional de saúde qualificado para orientações personalizadas.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={Link}
              href="/calendario"
              sx={{
                bgcolor: 'white',
                color: '#ab02d1',
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: '#f5f0f7',
                },
              }}
            >
              Ver Calendário de Vacinação
            </Button>
            <Button
              variant="outlined"
              size="large"
              component={Link}
              href="/doencas"
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
              Conhecer Doenças Preveníveis
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}