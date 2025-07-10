import Container from '@mui/material/Container';
import HeadBar from '@/components/HeadBar';

export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section>
        <Container maxWidth="lg">
          <HeadBar />
            <Container sx={{ marginTop : '30px'}}></Container>
                {children}
            </Container>
        <Container />
    </section>
  }