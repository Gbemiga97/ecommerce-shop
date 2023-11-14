

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto text-center">
        <small className="text-white text-center">
          Copyright &copy; E-commerce Shop {new Date().getFullYear()} All rights reserved.
        </small>
      </div>
    </footer>
  )
}

export default Footer