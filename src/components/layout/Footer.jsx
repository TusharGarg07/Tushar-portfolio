import Container from './Container.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            © {new Date().getFullYear()} Tushar Garg. All rights reserved.
          </p>
          <p className="text-sm text-muted opacity-80">
            Built with React & Tailwind CSS.
          </p>
        </div>
      </Container>
    </footer>
  )
}
